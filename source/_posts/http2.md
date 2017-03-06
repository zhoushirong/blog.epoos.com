---
layout: default
title: Http2入门
date: 2016/12/29
category: 网络
tag: http http2
---

Http/2,超文本传输协议第二版，最初命名为http2.0,是http协议的第二个版本，使用于万维网。
它是HTTP协议自1999年HTTP 1.1发布后的首个更新，主要基于SPDY协议。
随着http2的标准的确定，各大浏览器的大力支持，http2这个字眼开始出现在我们的视野里。
为什么要使用http2呢，它和之前的http有什么区别？

### 相对于http1.1的优点

``` html
1.多路复用、请求优化：一个连接内可以有无限个并行的请求即允许多个并行的http请求共用一个tpc连接。
多路复用还可以设置优先级，让重要的资源先行。

2.压缩了 HTTP 头：多个请求

3.支持服务器推送：可以将一些资源直接通过服务器推送到用户端，减少请求次数。

4.强制使用SSL传输协议
```


### Http2的安装注意事项

``` html
第一点：Http2是基于https的，因此，在使用Http2之前，首先需要弄好https，也就是需要申请网站证书。
我这里用的是腾讯云的主机、腾讯云的域名、腾讯云的证书（买域名免费用，文章后面有传送门，https证书的申请、证书的安装）。

第二点：需要Nginx版本1.9.5及以上。
从最新发布的 Nginx 1.9.5 开始，httpv2module 已经替换了 ngxhttpspdy_module 并正式开始提供全面的 HTTP/2 支持。

第三点：openssl版本1.0.2及以上。
Http2 需要扩展支持，可以用的有 ALPN 和 NPN 两种（Chrome 已经移除了对 NPN 的支持）
为了使用 ALPN 需要将 OpenSSL 升级到 1.0.2 以上版本。

```
ps:
本人就是卡在这里卡了几天，折腾了好久是在麻烦，一冲动就重装了ubuntu系统。
本人最新安装的ubuntu系统为：Ubuntu Server 16.04.1。
因为，Ubuntu 16.04 LTS 1.0.2g,之前的版本自带的openssl都不支持http2
当然爱折腾的也可以在不升级系统的情况下，自己安装新的openssl、然后进行一系列的重新编译nginx
本人折腾了好久没弄好，遂放弃之。

*本博客暂时没有支持http2，是因为腾讯云那儿买的域名，申请免费证书的时候，blog.epoos.com审核不通过*
*主站https://www.epoos.com 已经接入了http2*


### 传送门：

#### http2的兼容性

http://caniuse.com/#search=http2

#### https证书申请

https://www.qcloud.com/document/product/214/6989

#### https证书安装

https://www.qcloud.com/document/product/400/4143

#### http2配置

在上面https的配置里面找到之前配置443的地方，加上一个http2就可以了

``` html
server {
    listen 443 http2;
    server_name localhost;
    ssl on;
    ssl_certificate 1_www.domain.com_bundle.crt;
    ssl_certificate_key 2_www.domain.com.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    location / {
        root   html;
        index  index.html index.htm;
    }
}
```

刷新页面，已经变成了http2了 

eg:

https://www.epoos.com/

配好之后回想一下，其实早就已经配置好了，只不过是openssl和nginx版本的兼容性问题花了这么多时间，还好刚才冲动的重装了ubuntu系统。





#### Supporting HTTP/2

https://www.nginx.com/blog/supporting-http2-google-chrome-users/