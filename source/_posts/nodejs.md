---
layout: default
title: 服务器端搭建NodeJS环境的网站
date: 2016/10/23
category: 服务端
tag: js nodejs
---


JS是世界上最好的语言。
不对，说错了，PHP才是世界上最好的语言。
但是我还是喜欢JS。
凡是可以用Javascript来写的应用，最终都会用Javascript来写。
近些年Nodejs异常的火爆，因此服务端也开始使用js来写了。
最近在网上买了个云服务器，于是想搭个Node服务出来。

### 第一步：Nodejs的安装

本来在Window上和Mac上玩的很开心的Nodejs，在服务端（ubuntu）安装的时候变得如此之艰难
下面是踩坑的过程

#### 通过源码编译安装

首先将nodejs的源码安装包下载下来，然后解压编译

``` html
#  tar xvf node-v4.6.1.tar.gz 
#  cd node-v4.6.1 
#  ./configure 
# make 
# make install 
# cp /usr/local/bin/node /usr/sbin/ 

查看当前安装的Node的版本 
# node -v 

v0.10.28
```
make编译需要花较长的时间
make的时候可能会报这个错误：
``` html
WARNING: failed to autodetect C++ compiler version (CXX=g++)
```

解决办法，手动编译
``` html
apt-get install build-essential
```

编译结束，执行make install
``` shell
make install
```

安装完毕，检测是否安装成功
node -v输出版本号; 
在bin目录下有node和npm两个命令；
node安装完成
``` html
# node -v
v4.6.1

# cd /usr/local/bin ls
node npm
```

### 第二步：将本地的小网站上传到服务器上去

首先确定服务器上的网站存放目录。

这里我将它放到/data/htdoc/

``` html
# scp -r /Users/zsr/test ubuntu/@123.xxx.xxx.xxx:/data1/test
```
上传过长中出了一个错误,如果是直接上传到tmp就可以，其它的目录就会报错：

``` html
scp permission denied
```

网上查了下是因为权限不足，于是试了下上传到tmp目录，发现可行，确定是权限的问题之后就将自己的目录权限设置一下，就能正常上传了。
*权限问题需谨慎，这里给了最高权限，实际生产环境自己调整适当的权限。*

``` html
# chmod 777 ./data1
```

### 第三步：安装mongodb

``` html
apt-get update
apt-get install mongo
```

如果不update会报如下错误：
``` html
Unable to locate package mongo
```

### 第四步：安装pm2

``` html
npm install -g pm2
```

### 第五步：配置Nginx解析

配置过程中遇到个坑，老是返回hello nginx页面

解决办法
``` html
注释掉

/etc/nginx/nginx.conf 

里面的 

include /etc/nginx/sites-enabled/* 

这一行
```

然后增加如下nginx配置，将80端口反代理到项目端口
比如我在服务端写了个简单的node程序，端口为3000

配置代理如下：

``` html
server {
    listen 80;
    server_name xxx.xxx.xxx.xxx;
    location / {
        proxy_pass http://xxx.xxx.xxx.xxx:3000;
    }
}
```

配置完毕，检测Nginx配置是否正确

``` html
sudo nginx -t
```

检测错误，则对应具体信息做修改
检测正确，重启Nginx 服务生效

``` shell
sudo service nginx reload
```

然后访问xxx.xxx.xxx.xxx:80即可访问到Node程序了

至此服务端Node搭建网站告一段落
下一步就是申请域名了。







