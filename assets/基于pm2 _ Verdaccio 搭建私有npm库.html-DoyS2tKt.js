import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e}from"./app-6ixsUJ27.js";const i={},c=e(`<h2 id="一、安装verdaccio" tabindex="-1"><a class="header-anchor" href="#一、安装verdaccio"><span>一、安装Verdaccio</span></a></h2><h3 id="_1-全局安装-verdaccio" tabindex="-1"><a class="header-anchor" href="#_1-全局安装-verdaccio"><span>1. 全局安装 <a href="https://verdaccio.org/zh-CN/docs/what-is-verdaccio" target="_blank" rel="noopener noreferrer">Verdaccio</a>：</span></a></h3><div class="language-node line-numbers-mode" data-ext="node" data-title="node"><pre class="language-node"><code>npm i -g verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-启动verdaccio" tabindex="-1"><a class="header-anchor" href="#_2-启动verdaccio"><span>2. 启动Verdaccio</span></a></h3><p>在终端中输入 verdaccio 命令启动 Verdaccio：</p><div class="language-node line-numbers-mode" data-ext="node" data-title="node"><pre class="language-node"><code>verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着 Verdaccio 会在终端中输出提示，输出它的配置文件位置、启动的服务地址等信息，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 的配置文件位置</span>
info --- config <span class="token function">file</span>  - /home/uname/.config/verdaccio/config.yaml
info --- the <span class="token string">&quot;crypt&quot;</span> algorithm is deprecated consider switch to <span class="token string">&quot;bcrypt&quot;</span> <span class="token keyword">in</span> the configuration file. Read the documentation <span class="token keyword">for</span> additional details
info --- using htpasswd file: /home/uname/.config/verdaccio/htpasswd
info --- plugin successfully loaded: verdaccio-htpasswd
info --- plugin successfully loaded: verdaccio-audit
<span class="token comment"># 启动的服务地址</span>
warn --- http address - http://localhost:4873/ - verdaccio/5.25.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-修改配置" tabindex="-1"><a class="header-anchor" href="#_3-修改配置"><span>3. 修改配置</span></a></h3><p>要配置发布包、查看包、删除包相关的权限，可修改<code>packages</code>下的属性:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">packages</span><span class="token punctuation">:</span>
    <span class="token comment"># 作用域包</span>
  <span class="token key atrule">&#39;@*/*&#39;</span><span class="token punctuation">:</span> 
    <span class="token comment"># 允许所有人访问</span>
    <span class="token key atrule">access</span><span class="token punctuation">:</span> $authenticated
    <span class="token comment"># 注册用户可访问</span>
    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated
    <span class="token comment"># 注册用户可访问</span>
    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated
    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> npmjs
 
  <span class="token key atrule">&#39;**&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 默认情况下所有用户 (包括未授权用户) 都可以查看和发布任意包</span>
    <span class="token comment"># 你可以指定 用户名/分组名 (取决于你使用什么授权插件，默认的授权插件是内置的 htpasswd)</span>
    <span class="token comment"># 访问权限有三个关键词: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span>
    <span class="token comment"># $all 表示不限制，任何人可访问；</span>
    <span class="token comment"># $anonymous 表示未注册用户可访问；</span>
    <span class="token comment"># $authenticated 表示只有注册用户可访问</span>
    <span class="token key atrule">access</span><span class="token punctuation">:</span> $authenticated
 
    <span class="token comment"># 允许所有注册用户发布/撤销已发布的软件包</span>
    <span class="token comment"># (注意：默认情况下任何人都可以注册)</span>
    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated
    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated
 
    <span class="token comment"># 如果私有包服务不可用在本地，则会代理请求到&#39;npmjs&#39;</span>
    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> npmjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>禁止任何人都可以通过 npm adduser 命令注册用户, 在<code>auth</code>=&gt;<code>htpasswd</code>添加<code>max_users</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">htpasswd</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./htpasswd
    <span class="token comment"># 最大注册用户数，默认为 &quot;+inf&quot;.</span>
    <span class="token comment"># 可用通过设置为-1禁止注册</span>
    <span class="token comment"># max_users: 1000</span>
    <span class="token key atrule">max_users</span><span class="token punctuation">:</span> <span class="token number">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整配置文件如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 存放软件所有软件包的目录</span>
<span class="token key atrule">storage</span><span class="token punctuation">:</span> ../storage
<span class="token comment"># 存放所有插件的目录</span>
<span class="token key atrule">plugins</span><span class="token punctuation">:</span> ../plugins
 
<span class="token key atrule">web</span><span class="token punctuation">:</span>
  <span class="token comment"># 网站Title</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> Verdaccio
  <span class="token comment"># 禁用Gravatar头像</span>
  <span class="token comment"># gravatar: false</span>
  <span class="token comment"># 排序方式 asc|desc</span>
  <span class="token comment"># sort_packages: asc</span>
  <span class="token comment"># 是否启用暗黑模式</span>
  <span class="token comment"># darkMode: true</span>
  <span class="token comment"># logo地址</span>
  <span class="token comment"># logo: http://somedomain/somelogo.png</span>
  <span class="token comment"># favicon地址</span>
  <span class="token comment"># favicon: http://somedomain/favicon.ico | /path/favicon.ico</span>
 
<span class="token comment"># i18n翻译配置</span>
<span class="token comment"># i18n:</span>
<span class="token comment"># 可用列表见：https://github.com/verdaccio/ui/tree/master/i18n/translations</span>
<span class="token comment">#   web: en-US</span>
 
<span class="token key atrule">auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">htpasswd</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./htpasswd
    <span class="token comment"># 最大注册用户数，默认为 &quot;+inf&quot;.</span>
    <span class="token comment"># 可用通过设置为-1禁止注册</span>
    <span class="token comment"># max_users: 1000</span>
    <span class="token key atrule">max_users</span><span class="token punctuation">:</span> <span class="token number">-1</span>
 
<span class="token comment"># 上游npm库，这里可用设置为淘宝</span>
<span class="token key atrule">uplinks</span><span class="token punctuation">:</span>
  <span class="token key atrule">npmjs</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//registry.npmjs.org/
 
<span class="token key atrule">packages</span><span class="token punctuation">:</span>
    <span class="token comment"># 作用域包</span>
  <span class="token key atrule">&#39;@*/*&#39;</span><span class="token punctuation">:</span> 
    <span class="token comment"># 允许所有人访问</span>
    <span class="token key atrule">access</span><span class="token punctuation">:</span> $authenticated
    <span class="token comment"># 注册用户可访问</span>
    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated
    <span class="token comment"># 注册用户可访问</span>
    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated
    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> npmjs
 
  <span class="token key atrule">&#39;**&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 默认情况下所有用户 (包括未授权用户) 都可以查看和发布任意包</span>
    <span class="token comment"># 你可以指定 用户名/分组名 (取决于你使用什么授权插件，默认的授权插件是内置的 htpasswd)</span>
    <span class="token comment"># 访问权限有三个关键词: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span>
    <span class="token comment"># $all 表示不限制，任何人可访问；</span>
    <span class="token comment"># $anonymous 表示未注册用户可访问；</span>
    <span class="token comment"># $authenticated 表示只有注册用户可访问</span>
    <span class="token key atrule">access</span><span class="token punctuation">:</span> $authenticated
 
    <span class="token comment"># 允许所有注册用户发布/撤销已发布的软件包</span>
    <span class="token comment"># (注意：默认情况下任何人都可以注册)</span>
    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated
    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated
 
    <span class="token comment"># 如果私有包服务不可用在本地，则会代理请求到&#39;npmjs&#39;</span>
    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> npmjs
 
<span class="token comment"># 您可以指定传入连接的HTTP /1.1服务器保持活动超时（以秒为单位）。</span>
<span class="token comment"># 值为0会使http服务器的行为类似于8.0.0之前的Node.js版本，后者没有保持活动超时。</span>
<span class="token comment"># 解决方法：通过给定的配置可以解决以下问题</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">keepAliveTimeout</span><span class="token punctuation">:</span> <span class="token number">60</span>
<span class="token comment"># 中间件</span>
<span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
  <span class="token key atrule">audit</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
 
<span class="token comment"># 日志设置</span>
<span class="token key atrule">logs</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> stdout<span class="token punctuation">,</span> <span class="token key atrule">format</span><span class="token punctuation">:</span> pretty<span class="token punctuation">,</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> http <span class="token punctuation">}</span>
 
<span class="token comment"># 开放远程访问，允许所有IP</span>
<span class="token key atrule">listen</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">4873</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、部署" tabindex="-1"><a class="header-anchor" href="#二、部署"><span>二、部署</span></a></h2><p>verdaccio提供了docker和全局包2种方式进行安装。</p><h3 id="_1-docker部署" tabindex="-1"><a class="header-anchor" href="#_1-docker部署"><span>1. docker部署</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拉取verdaccio docker镜像</span>
$ <span class="token function">docker</span> pull verdaccio/verdaccio:nightly-master
 
<span class="token comment"># 查看docker镜像</span>
$ <span class="token function">docker</span> images
REPOSITORY                                TAG              IMAGE ID       CREATED        SIZE
verdaccio/verdaccio                       nightly-master   32713721fda5   <span class="token number">16</span> hours ago   580MB
 
<span class="token comment"># 拷贝下面配置文件到本地~/docker/verdaccio目录</span>
$ <span class="token function">cp</span> config.yaml ~/docker/verdaccio

<span class="token comment"># 给~/docker/verdaccio添加读写权限, 不然注册时会报错 Error: internal server error : -/user/org.couchdb.user: xxx</span>
<span class="token function">chmod</span> <span class="token number">666</span> ~/docker/verdaccio
 
<span class="token comment"># 启动docker容器</span>
<span class="token comment"># -d: 在后台开启docker进程</span>
<span class="token comment"># --name: 给容器指定一个名称</span>
<span class="token comment"># --p: 将本机的4873端口映射到docker的4873端口</span>
<span class="token comment"># --restart=always: 自动重启容器</span>
<span class="token comment"># -v: 将本地~/docker/verdaccio目录挂载到docker的/verdaccio/conf目录</span>
$ <span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> ~/docker/verdaccio:/verdaccio/conf <span class="token parameter variable">--name</span> verdaccio <span class="token parameter variable">-p</span> <span class="token number">4873</span>:4873 verdaccio/verdaccio
 
<span class="token comment"># 查看docker容器</span>
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE                 COMMAND                  CREATED         STATUS         PORTS                                       NAMES
6aac1ea8707a   verdaccio/verdaccio   <span class="token string">&quot;uid_entrypoint /bin…&quot;</span>   <span class="token number">2</span> minutes ago   Up <span class="token number">2</span> minutes   <span class="token number">0.0</span>.0.0:4873-<span class="token operator">&gt;</span><span class="token number">4873</span>/tcp, :::4873-<span class="token operator">&gt;</span><span class="token number">4873</span>/tcp   verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就完成了verdaccio在docker上的部署，其中我们将~/docker/verdaccio这个文件夹挂载到docker的/verdaccio/conf文件夹，verdaccio在启动时会自动寻找/verdaccio/conf/config.yaml文件作为配置。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在虚拟器中运行docker, 如果本地和外部都不能访问verdaccio网页，重启一下docker服务；</p></div><h3 id="_2-pm2部署" tabindex="-1"><a class="header-anchor" href="#_2-pm2部署"><span>2. pm2部署</span></a></h3><p><a href="https://pm2.keymetrics.io/" target="_blank" rel="noopener noreferrer">pm2</a>的部署相对于docker需要安装node。但是相对的部署起来会更快捷，可以根据自己需要选择。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 全局安装verdaccio和pm2</span>
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> verdaccio pm2

<span class="token comment"># 通过pm2启动verdaccio</span>

pm2 start verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>要在配置文件里中添加<code>listen: 0.0.0.0:4873</code> 才能开放远程访问，允许所有IP访问</p></div><p>pm2命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PM2是一个用于Node.js应用程序的生产过程管理器，具有内置的负载均衡器。

启动并守护任何应用程序： $ pm2 start app.js

停止应用程序：$ pm2 stop app.js

负载平衡4个api.js实例： $ pm2 start api.js <span class="token parameter variable">-i</span> <span class="token number">4</span>

在生产环境中进行监控： $ pm2 monitor

使pm2在服务器重新启动时自动启动： $ pm2 startup

要查看PM2启动的服务的监听地址和端口: $ pm2 show <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>

列出所有正在运行的应用程序及其相关信息: $ pm2 list

要进一步了解，请访问： http://pm2.io/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、管理npm仓库源" tabindex="-1"><a class="header-anchor" href="#三、管理npm仓库源"><span>三、管理npm仓库源</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 全局安装nrm</span>
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm
 
<span class="token comment"># 添加私有库</span>
$ nrm <span class="token function">add</span> verdaccio http://<span class="token punctuation">{</span>地址<span class="token punctuation">}</span>:4873/
 
<span class="token comment"># 查看现有的npm源</span>
$ nrm <span class="token function">ls</span>
  <span class="token function">npm</span> ---------- https://registry.npmjs.org/
  <span class="token function">yarn</span> --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
* verdaccio ---- http://<span class="token punctuation">{</span>地址<span class="token punctuation">}</span>:4873/
<span class="token comment"># 设置npm源</span>
$ nrm use verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、npm包发布" tabindex="-1"><a class="header-anchor" href="#四、npm包发布"><span>四、npm包发布</span></a></h2><h3 id="_1-注册" tabindex="-1"><a class="header-anchor" href="#_1-注册"><span>1. 注册</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 注册用户，这里因为方便演示，所以没有关闭注册。Username：用户名  Password：密码
$ npm adduser
npm notice Log in on http://{地址}:4873/
Username: yourusername
Password:
Email: (this IS public) xxxxxx@qq.com
Logged in as yourusername on http://{地址}:4873/.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-登录" tabindex="-1"><a class="header-anchor" href="#_2-登录"><span>2. 登录</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 登录用户</span>
$ <span class="token function">npm</span> login
<span class="token function">npm</span> notice Log <span class="token keyword">in</span> on http://<span class="token punctuation">{</span>地址<span class="token punctuation">}</span>:4873/
Username: yourusername
Password:
Email: <span class="token punctuation">(</span>this IS public<span class="token punctuation">)</span> xxxxxx@qq.com
Logged <span class="token keyword">in</span> as yourusername on http://<span class="token punctuation">{</span>地址<span class="token punctuation">}</span>:4873/
<span class="token comment"># 查看当前登录用户</span>
$ <span class="token function">npm</span> <span class="token function">who</span> am i
yourusername
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-发布" tabindex="-1"><a class="header-anchor" href="#_3-发布"><span>3. 发布</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 发布当前包</span>
$ <span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>运行npm publish时报错：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> ERR<span class="token operator">!</span> code E500
<span class="token function">npm</span> ERR<span class="token operator">!</span> <span class="token number">500</span> Internal Server Error - PUT http://192.168.241.128:4873/vue-test - internal server error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token number">10001</span>:65533 ~/docker/verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>`,37),l=[c];function t(p,d){return a(),s("div",null,l)}const u=n(i,[["render",t],["__file","基于pm2 _ Verdaccio 搭建私有npm库.html.vue"]]),m=JSON.parse('{"path":"/posts/%E5%9F%BA%E4%BA%8Epm2%20_%20Verdaccio%20%E6%90%AD%E5%BB%BA%E7%A7%81%E6%9C%89npm%E5%BA%93.html","title":"基于pm2 + Verdaccio 搭建私有npm库","lang":"zh-CN","frontmatter":{"title":"基于pm2 + Verdaccio 搭建私有npm库","date":"2022-11-01T17:53:12.000Z","categories":["Node"],"tags":["Node"],"description":"一、安装Verdaccio 1. 全局安装 Verdaccio： 2. 启动Verdaccio 在终端中输入 verdaccio 命令启动 Verdaccio： 接着 Verdaccio 会在终端中输出提示，输出它的配置文件位置、启动的服务地址等信息，如下： 3. 修改配置 要配置发布包、查看包、删除包相关的权限，可修改packages下的属性: 禁止...","head":[["meta",{"property":"og:url","content":"https://www.lfangq.top/posts/%E5%9F%BA%E4%BA%8Epm2%20_%20Verdaccio%20%E6%90%AD%E5%BB%BA%E7%A7%81%E6%9C%89npm%E5%BA%93.html"}],["meta",{"property":"og:site_name","content":"Lfangq"}],["meta",{"property":"og:title","content":"基于pm2 + Verdaccio 搭建私有npm库"}],["meta",{"property":"og:description","content":"一、安装Verdaccio 1. 全局安装 Verdaccio： 2. 启动Verdaccio 在终端中输入 verdaccio 命令启动 Verdaccio： 接着 Verdaccio 会在终端中输出提示，输出它的配置文件位置、启动的服务地址等信息，如下： 3. 修改配置 要配置发布包、查看包、删除包相关的权限，可修改packages下的属性: 禁止..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T01:54:59.000Z"}],["meta",{"property":"article:author","content":"Lfangq"}],["meta",{"property":"article:tag","content":"Node"}],["meta",{"property":"article:published_time","content":"2022-11-01T17:53:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T01:54:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于pm2 + Verdaccio 搭建私有npm库\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-01T17:53:12.000Z\\",\\"dateModified\\":\\"2024-05-30T01:54:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lfangq\\",\\"url\\":\\"https://www.lfangq.top/\\"}]}"]]},"headers":[{"level":2,"title":"一、安装Verdaccio","slug":"一、安装verdaccio","link":"#一、安装verdaccio","children":[{"level":3,"title":"1. 全局安装 Verdaccio：","slug":"_1-全局安装-verdaccio","link":"#_1-全局安装-verdaccio","children":[]},{"level":3,"title":"2. 启动Verdaccio","slug":"_2-启动verdaccio","link":"#_2-启动verdaccio","children":[]},{"level":3,"title":"3. 修改配置","slug":"_3-修改配置","link":"#_3-修改配置","children":[]}]},{"level":2,"title":"二、部署","slug":"二、部署","link":"#二、部署","children":[{"level":3,"title":"1. docker部署","slug":"_1-docker部署","link":"#_1-docker部署","children":[]},{"level":3,"title":"2. pm2部署","slug":"_2-pm2部署","link":"#_2-pm2部署","children":[]}]},{"level":2,"title":"三、管理npm仓库源","slug":"三、管理npm仓库源","link":"#三、管理npm仓库源","children":[]},{"level":2,"title":"四、npm包发布","slug":"四、npm包发布","link":"#四、npm包发布","children":[{"level":3,"title":"1. 注册","slug":"_1-注册","link":"#_1-注册","children":[]},{"level":3,"title":"2. 登录","slug":"_2-登录","link":"#_2-登录","children":[]},{"level":3,"title":"3. 发布","slug":"_3-发布","link":"#_3-发布","children":[]}]}],"git":{"createdTime":1717034099000,"updatedTime":1717034099000,"contributors":[{"name":"lfangq","email":"2251234678@qq.com","commits":1}]},"readingTime":{"minutes":5.64,"words":1691},"filePathRelative":"posts/基于pm2 + Verdaccio 搭建私有npm库.md","localizedDate":"2022年11月1日","excerpt":"","autoDesc":true}');export{u as comp,m as data};
