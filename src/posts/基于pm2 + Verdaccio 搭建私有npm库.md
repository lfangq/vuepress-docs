---
title: 基于pm2 + Verdaccio 搭建私有npm库
date: 2022-11-01 17:53:12
tags:
  - Node
---

## 一、安装Verdaccio

1. 全局安装 [Verdaccio](https://verdaccio.org/zh-CN/docs/what-is-verdaccio)：

```bash
npm i -g verdaccio
```

2. 启动Verdaccio

在终端中输入 `verdaccio` 命令启动 Verdaccio：

```bash
verdaccio
```

接着 Verdaccio 会在终端中输出提示，输出它的配置文件位置、启动的服务地址等信息，如下：

```bash
# 的配置文件位置
info --- config file  - /home/uname/.config/verdaccio/config.yaml
info --- the "crypt" algorithm is deprecated consider switch to "bcrypt" in the configuration file. Read the documentation for additional details
info --- using htpasswd file: /home/uname/.config/verdaccio/htpasswd
info --- plugin successfully loaded: verdaccio-htpasswd
info --- plugin successfully loaded: verdaccio-audit
# 启动的服务地址
warn --- http address - http://localhost:4873/ - verdaccio/5.25.0
```

3. 修改配置

要配置发布包、查看包、删除包相关的权限，可修改`packages`下的属性:

```yaml
packages:
    # 作用域包
  '@*/*': 
    # 允许所有人访问
    access: $authenticated
    # 注册用户可访问
    publish: $authenticated
    # 注册用户可访问
    unpublish: $authenticated
    proxy: npmjs
 
  '**':
    # 默认情况下所有用户 (包括未授权用户) 都可以查看和发布任意包
    # 你可以指定 用户名/分组名 (取决于你使用什么授权插件，默认的授权插件是内置的 htpasswd)
    # 访问权限有三个关键词: "$all", "$anonymous", "$authenticated"
    # $all 表示不限制，任何人可访问；
    # $anonymous 表示未注册用户可访问；
    # $authenticated 表示只有注册用户可访问
    access: $authenticated
 
    # 允许所有注册用户发布/撤销已发布的软件包
    # (注意：默认情况下任何人都可以注册)
    publish: $authenticated
    unpublish: $authenticated
 
    # 如果私有包服务不可用在本地，则会代理请求到'npmjs'
    proxy: npmjs
```

禁止任何人都可以通过 `npm adduser` 命令注册用户, 在`auth`=>`htpasswd`添加`max_users`:

```yaml
auth:
  htpasswd:
    file: ./htpasswd
    # 最大注册用户数，默认为 "+inf".
    # 可用通过设置为-1禁止注册
    # max_users: 1000
    max_users: -1
```

:::details 完整配置文件
```yaml
# 存放软件所有软件包的目录
storage: ../storage
# 存放所有插件的目录
plugins: ../plugins
 
web:
  # 网站Title
  title: Verdaccio
  # 禁用Gravatar头像
  # gravatar: false
  # 排序方式 asc|desc
  # sort_packages: asc
  # 是否启用暗黑模式
  # darkMode: true
  # logo地址
  # logo: http://somedomain/somelogo.png
  # favicon地址
  # favicon: http://somedomain/favicon.ico | /path/favicon.ico
 
# i18n翻译配置
# i18n:
# 可用列表见：https://github.com/verdaccio/ui/tree/master/i18n/translations
#   web: en-US
 
auth:
  htpasswd:
    file: ./htpasswd
    # 最大注册用户数，默认为 "+inf".
    # 可用通过设置为-1禁止注册
    # max_users: 1000
    max_users: -1
 
# 上游npm库，这里可用设置为淘宝
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
 
packages:
    # 作用域包
  '@*/*': 
    # 允许所有人访问
    access: $authenticated
    # 注册用户可访问
    publish: $authenticated
    # 注册用户可访问
    unpublish: $authenticated
    proxy: npmjs
 
  '**':
    # 默认情况下所有用户 (包括未授权用户) 都可以查看和发布任意包
    # 你可以指定 用户名/分组名 (取决于你使用什么授权插件，默认的授权插件是内置的 htpasswd)
    # 访问权限有三个关键词: "$all", "$anonymous", "$authenticated"
    # $all 表示不限制，任何人可访问；
    # $anonymous 表示未注册用户可访问；
    # $authenticated 表示只有注册用户可访问
    access: $authenticated
 
    # 允许所有注册用户发布/撤销已发布的软件包
    # (注意：默认情况下任何人都可以注册)
    publish: $authenticated
    unpublish: $authenticated
 
    # 如果私有包服务不可用在本地，则会代理请求到'npmjs'
    proxy: npmjs
 
# 您可以指定传入连接的HTTP /1.1服务器保持活动超时（以秒为单位）。
# 值为0会使http服务器的行为类似于8.0.0之前的Node.js版本，后者没有保持活动超时。
# 解决方法：通过给定的配置可以解决以下问题
server:
  keepAliveTimeout: 60
# 中间件
middlewares:
  audit:
    enabled: true
 
# 日志设置
logs: { type: stdout, format: pretty, level: http }
 
# 开放远程访问，允许所有IP
listen:
  - 0.0.0.0:4873
```
:::

## 二、部署

verdaccio提供了docker和全局包2种方式进行安装。

### 1. docker部署

```bash
# 拉取verdaccio docker镜像
$ docker pull verdaccio/verdaccio:nightly-master
 
# 查看docker镜像
$ docker images
REPOSITORY                                TAG              IMAGE ID       CREATED        SIZE
verdaccio/verdaccio                       nightly-master   32713721fda5   16 hours ago   580MB
 
# 拷贝下面配置文件到本地~/docker/verdaccio目录
$ cp config.yaml ~/docker/verdaccio

# 给~/docker/verdaccio添加读写权限, 不然注册时会报错 Error: internal server error : -/user/org.couchdb.user: xxx
chmod 666 ~/docker/verdaccio
 
# 启动docker容器
# -d: 在后台开启docker进程
# --name: 给容器指定一个名称
# --p: 将本机的4873端口映射到docker的4873端口
# --restart=always: 自动重启容器
# -v: 将本地~/docker/verdaccio目录挂载到docker的/verdaccio/conf目录
$ docker run --restart=always -d -v ~/docker/verdaccio:/verdaccio/conf --name verdaccio -p 4873:4873 verdaccio/verdaccio
 
# 查看docker容器
$ docker ps
CONTAINER ID   IMAGE                 COMMAND                  CREATED         STATUS         PORTS                                       NAMES
6aac1ea8707a   verdaccio/verdaccio   "uid_entrypoint /bin…"   2 minutes ago   Up 2 minutes   0.0.0.0:4873->4873/tcp, :::4873->4873/tcp   verdaccio
```

这样我们就完成了verdaccio在docker上的部署，其中我们将`~/docker/verdaccio`这个文件夹挂载到`docker的/verdaccio/conf`文件夹，verdaccio在启动时会自动寻找`/verdaccio/conf/config.yaml`文件作为配置。

:::warning
在虚拟器中运行docker, 如果本地和外部都不能访问verdaccio网页，重启一下docker服务。
:::

### 2. pm2部署

[pm2](https://pm2.keymetrics.io/)的部署相对于docker需要安装node。但是相对的部署起来会更快捷，可以根据自己需要选择。

PM2是一个用于Node.js应用程序的生产过程管理器，具有内置的负载均衡器。

```bash
# 全局安装verdaccio和pm2
npm i -g verdaccio pm2

# 通过pm2启动verdaccio
pm2 start verdaccio
```

:::warning
要在配置文件里中添加`listen: 0.0.0.0:4873` 才能开放远程访问，允许所有IP访问
:::


pm2常用命令：

启动并守护任何应用程序： `pm2 start app.js`

停止应用程序：`pm2 stop app.js`

负载平衡4个api.js实例： `pm2 start api.js -i 4`

在生产环境中进行监控： `pm2 monitor`

使pm2在服务器重新启动时自动启动： `pm2 startup`

要查看PM2启动的服务的监听地址和端口: `pm2 show <app_name>`

列出所有正在运行的应用程序及其相关信息: `pm2 list`

[pm2文档](http://pm2.io/)

## 三、管理npm仓库源

```bash
# 全局安装nrm
$ npm install -g nrm
 
# 添加私有库
$ nrm add verdaccio http://{地址}:4873/
 
# 查看现有的npm源
$ nrm ls
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
* verdaccio ---- http://{地址}:4873/
# 设置npm源
$ nrm use verdaccio
```


## 四、npm包发布

### 1. 注册

```bash
# 注册用户，这里因为方便演示，所以没有关闭注册。Username：用户名  Password：密码
$ npm adduser
npm notice Log in on http://{地址}:4873/
Username: yourusername
Password:
Email: (this IS public) xxxxxx@qq.com
Logged in as yourusername on http://{地址}:4873/.
```

### 2. 登录

```bash
# 登录用户
$ npm login
npm notice Log in on http://{地址}:4873/
Username: yourusername
Password:
Email: (this IS public) xxxxxx@qq.com
Logged in as yourusername on http://{地址}:4873/

# 查看当前登录用户
$ npm who am i
yourusername
```

### 3. 发布

```bash
# 发布当前包
npm publish
```

:::warning

运行npm publish时报错：
```bash
npm ERR! code E500
npm ERR! 500 Internal Server Error - PUT http://192.168.241.128:4873/vue-test - internal server error
```

解决方法：
```bash
chown -R 10001:65533 ~/docker/verdaccio
```
:::
