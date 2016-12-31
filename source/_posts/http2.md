---
layout: default
title: HTTP2入门
date: 2016/12/29
category: 网络
tag: http http2
---


随着http2的标准的确定，各大浏览器的大力支持，http2这个字眼开始出现在我们的视野里。为什么要使用http2呢，它和之前的http有什么区别？

1.多路复用、请求优化：一个连接内可以有无限个并行的请求即允许多个并行的http请求共用一个tpc连接。多路复用还可以设置优先级。让重要的资源先行。

2.压缩了 HTTP 头：多个请求

3.支持服务器推送：可以将一些资源直接通过服务器推送到用户端，减少请求次数。

4.强制使用SSL传输协议



### http2安装的过程，以及一些坑。


支持http2首先需要弄好https，也就是需要申请网站证书。

我这里用的是腾讯云的主机、腾讯云的域名、腾讯云的证书（买域名免费用，文章后面有传送门，https证书的申请、证书的安装）。

### 环境要求：

``` html
nginx版本1.9.5及以上

https支持

openssl版本1.0.2及以上
ps:本人就是卡在这里卡了几天，折腾了好久是在麻烦，一冲动就重装了ubuntu系统。
   现在正在安装的系统为：Ubuntu Server 16.04.1。
   Ubuntu 16.04 LTS	1.0.2g,之前的版本自带的openssl都不支持http2
   当然爱折腾的也可以自己安装新的openssl、然后进行一系列的重新编译nginx，本人折腾了好久没弄好，遂放弃之。
```







### 传送门：

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

此时的心情好失落。。。

麻痹的，其实早就已经配置好了，只不过是openssl和nginx版本的兼容性问题花了这么多时间，还好刚才冲动的重装了ubuntu系统。





#### Supporting HTTP/2

https://www.nginx.com/blog/supporting-http2-google-chrome-users/