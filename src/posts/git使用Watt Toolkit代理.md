---
title: git 使用 Watt Toolkit 代理
date: 2023-07-03 14:14:35
tags:
  - git
---

## 前言

由于 github 被墙了之后，git 都不能连接了，所以就想通过 [`Watt Toolkit`](https://steampp.net/) 来对 github 进行连接。

## 1. 设置 Github 加速

选择 `Github` 平台后, 开启 `System` 加速模式。

![设置 Github 加速](/post/20240730164828.png =x400)

## 2. 配置 HTTP 代理

上面的设置完后, 通过操作系统的 `设置` -> `网络和 Internet` -> `代理` 来设置代理 IP 和端口，例如：127.0.0.1:26501。

![配置 HTTP 代理](/post/20240730165849.png =x400)

## 3. 配置 git 代理

最后通过配置 git 代理来启用 HTTP 代理, 可以通过下面的命令进行设置:

```bash
git config --global http.proxy 127.0.0.1:26501 # 设置代理
git config --global http.sslverify false # 禁用 SSL 证书检查
```

上面配置完后，就可以使用 git 命令了。

## 4. 取消 git 代理的方式

```bash
git config --global --unset http.proxy
git config --global --unset http.sslverify
```
