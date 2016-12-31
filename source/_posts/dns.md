---
layout: default
title: DNS与域名
date: 2016/12/26
category: 网络
tag: dns
---


发起一次http请求需要经历下面的步骤

``` html
DNS 域名解析 -->
发起 TCP 的 3 次握手 -->
建立 TCP 连接后发起 http 请求 -->
服务器响应 http 请求 -->
```

TTL：表示 DNS 记录在 DNS 服务器上缓存时间

