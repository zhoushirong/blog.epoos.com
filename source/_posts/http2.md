---
layout: default
title: 最近很流行http2
date: 2016-12-18
---

## {{page.title}}

```

最近貌似很流行http2，我这边也试它一试。其实写这篇笔记的时候我已经折腾了3天了，还没折腾出来，这不，趁服务器那边还在重装系统，这里顺便写一下。

http2的好处就不说了，这里只记录安装的过程，以及一些坑。


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