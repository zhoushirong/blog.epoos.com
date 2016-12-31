---
layout: default
title: Nginx入门
category: 服务端
tag: nginx
date: 2016/12/25
---

Nginx（发音同engine x）是一个网页服务器，它能反向代理HTTP, HTTPS, SMTP, POP3, IMAP的协议链接，以及一个负载均衡器和一个HTTP缓存。
Nginx在官方测试的结果中，能够支持五万个平行连接，而在实际的运作中，可以支持二万至四万个平行链接。
整体采用模块化设计是nginx的一个重大特点，甚至http服务器核心功能也是一个模块。旧版本的nginx的模块是静态的，添加和删除模块都要对nginx进行重新编译，1.9.11以及更新的版本已经支持动态模块加载。 
—— 来自维基百科

Nginx 最常用的功能就是提供反向代理服务

#### 正向代理

作为客户端的中介接受请求，隐藏真实的用户，向服务端获取资源，如果代理在墙外，则可以实现翻墙

#### 反向代理

作为服务端的中介，隐藏真实的服务器，目的是为了实现安全和负载均衡等一系列的功能

安全：用户的请求不会直接到内网的服务器上，而是通过代理做了一层转发，在这一层可以实现安全过滤、流控、防DDOS等一系列策略

负载均衡：我们可以水平扩展后端真正提供服务的服务器数量，代理按照规则转发请求到各个服务端，使得各个服务器负载接近均衡


### 在mac osx

1.brew

``` shell
brew list 查看brew安装的软件列表
brew search xx // 搜索
brew install xx // 安装
brew info xx //查看xx信息
brew uninstall xx //卸载
```

1.用brew安装nginx

``` shell
brew nginx
```

2.启动nginx

``` shell
sudo nginx
```

3.查看nginx的进程

``` shell
sudo ps aux | grep nginx
```

访问此地址查看是否启动nginx成功：http://localhost:8080/

4.查看nginx版本

``` shell
nginx -v
```

5.停止nginx

``` shell
nginx -s stop
```

6.重新加载nginx

``` shell
nginx -s reload
```

7.重启nginx

``` shell
sudo nginx -s stop && sudo nginx
```


ps:如果启动或重启的时候遇到pid报错则按如下方法杀掉nginx主进程

在进程列表里面找到master进程，他的编号就是主进程号了。

步骤一：询nginx主进程

``` shell
ps -ef | grep nginx
```

步骤2：发送信号

``` html
从容停止：sudo kill -QUIT 主进程号

快速停止：sudo kill -TERM 主进程号

强制停止nginx：sudo pkill -9 nginx
```

8.nginx安装目录位置

``` html
/usr/local/Cellar/nginx
```

9.nginx配置文件目录

``` html
/usr/local/etc/nginx
```

10.系统host位置

``` html
/private/etc/host
```






### ubuntu系统

安装

``` html
sudo apt-get install nginx

```

### 查看nginx是否启动

``` html
ps -ef|grep nginx
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
