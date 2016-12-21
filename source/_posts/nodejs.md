---
layout: default
title: 服务器端搭建node环境的网站
date: 2016-10-23
---

## {{page.title}}

手贱在网上买了个云服务器，于是想搭个node服务出来。

### 第一步：nodejs的安装

本来在window上和mac上玩的很开心的nodejs变得如此之艰难

下面是踩坑的过程，现在是边记录边实践，最后能否成功，敬请期待！

现在是2016年10月23日 周日 11：10分，make编译中...

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

解决办法，手动编译：

``` html
apt-get install build-essential
```

11:20编译结束，执行make install，执行完毕.

node -v输出版本号; 在bin目录下又node和npm两个命令；node安装完成

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
scp permission denied

网上查了下是因为权限不足，于是试了下上传到tmp目录，发现可行，确定是权限的问题之后就将自己的目录权限设置一下，就能正常上传了。

ps：权限问题需谨慎，这里给了最高权限。

``` html
# chmod 777 ./data1
```
ip
### 第三步：安装mongodb

``` html
apt-get update
apt-get install mongo
```

如果不update会报如下错误：
Unable to locate package mongo

### 第四步：安装pm2

``` html
npm install -g pm2
```

### 第五步：配置nginx解析

检测nginx配置是否正确

``` html
sudo nginx -t
```

配置过程中遇到个坑，老是放回helle nginx页面

解决办法是注释掉/etc/nginx/nginx.conf 里面的 include /etc/nginx/sites-enabled/* 这一行;

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

然后访问xxx.xxx.xxx.xxx:80即可访问到node程序了

至此服务端node搭建网站告一段落，下一步就是申请域名了。


找个时间跑个脚本将所有的域名都跑一遍，奶奶的

``` javascript
var str = "abcdefghijklmnopqrstuvwxyz";
var arr = str.split("");
var arr30 = "";
var i, j, k, l = 0,
	t = "";

for (i = 0; i <= arr.length; i++) {
	for (j = 0; j <= arr.length; j++) {
		for (k = 0; k <= arr.length; k++)
			if (l < 30) {
				l++;
				if (arr[i] && arr[j] && arr[k]) {
					t += "|" + (arr[i] + "" + arr[j] + "" + arr[k]);
				}
			} else {
				arr30+=(" "+t);
				t = "";
				l = 0;
			}
	}
}
console.log(arr30);
```












