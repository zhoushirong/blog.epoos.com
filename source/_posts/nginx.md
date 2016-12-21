---
layout: default
title: nginxLearn
date: 2016-09-29
---

## {{page.title}}

### 什么是Nginx

Nginx 最常用的功能就是提供反向代理服务

#### 正向代理

作为客户端的中介接受请求，隐藏真实的用户，向服务端获取资源，如果代理在墙外，则可以实现翻墙

#### 反向代理

作为服务端的中介，隐藏真实的服务器，目的是为了实现安全和负载均衡等一系列的功能

安全：用户的请求不会直接到内网的服务器上，而是通过代理做了一层转发，在这一层可以实现安全过滤、流控、防DDOS等一系列策略

负载均衡：我们可以水平扩展后端真正提供服务的服务器数量，代理按照规则转发请求到各个服务端，使得各个服务器负载接近均衡


### 安装

#### 在mac osx安装nginx 用brew

##### 搜索软件

``` html
brew search nginx
```

##### 安装、卸载软件

``` html
brew install nginx
brew uninstall nginx
```

##### 升级软件

``` html
brew update
```

##### 查看安装信息、安装列表

``` html
brew info nginx
brew list
```
---------------------------------

##### 安装nginx

``` html
sudo brew install nginx
```

##### 启动nginx

``` html
sudo brew servers start nginx
```
访问此地址查看是否启动nginx成功：http://localhost:8080/

##### 查看nginx版本

``` html
nginx -v
```

##### 关闭nginx服务

``` html
sudo brew servers stop nginx
```

##### 停止nginx

``` html
nginx -s stop
```

##### 重新加载nginx

``` html
nginx -s reload
```

------------------------------

### 配置nginx

#### 文件目录

##### nginx安装目录位置

``` html
/usr/local/Cellar/nginx
```

#### nginx配置文件目录

``` html
/usr/local/etc/nginx
```

##### 系统host位置

``` html
/private/etc/host
```

#### 配置nginx




### ubuntu系统

安装

``` html
sudo apt-get install nginx

```






-------------------------------

### 参考&&相关链接

##### 官方配置文档

<a href="http://nginx.org/en/docs/" target="_blank">http://nginx.org/en/docs/</a>

##### nginx配置从0开始：

<a href="http://www.open-open.com/lib/view/open1419826381531.html" target="_blank">http://www.open-open.com/lib/view/open1419826381531.html</a>

##### nginx 配置 location 总结及 rewrite 规则写法：

<a href="https://linux.cn/article-5714-1.html" target="_blank">https://linux.cn/article-5714-1.html</a>

##### 配置nginx
<a href="http://arccode.net/2015/02/27/Nginx%E9%85%8D%E7%BD%AE%E5%B0%8F%E8%AE%B0/" target="_blank">http://arccode.net/2015/02/27/Nginx配置小记/</a>
