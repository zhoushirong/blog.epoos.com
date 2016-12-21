---
layout: default
title: 常用mac终端命令
date: 2016-03-29
---

## {{page.title}}

```
cd —— 进入目录

sudo —— 获取临时root权限

find ~iname xxx  —— 查找文件夹

sudo shutdown -h now | sudo halt —— 关机

sudo reboot | sudo shutdown -r now —— 重启

passwd  —— 修改用户密码

history —— 最近执行的命令以及编号

env —— 显示当前所有设置过的环境变量

who —— 当前登陆的所有用户

whoami —— 当前正在操作的用户名

```

### 登录远程机器：

```
ssh xxx@ip -p 端口

```

### 操作文件

```
mkdir 文件名 —— 建立新目录

rm -rf —— 删除文件夹

rm —— 删除文件

pwd —— 显示当前文件夹路径

```

### vim命令：

```
i —— 插入模式

esc —— 退出

:wq —— 保存并退出

:q! —— 不保存退出

u —— 撤销上一次操作

ctl+r 和u相反

```

### 一些快捷键

``` html
command + t —— 在终端新打开一个终端

command + c —— 复制

command + v —— 粘贴

command + z —— 撤销

command + 左（右） —— 移到行头（尾）

command + shift + 左（右） —— 移到行头（尾）并选中

command + r —— 刷新网页

fn + 上（下） —— pageup(pagedown)

fn + delete —— 向后删除

```

### 解压.gz文件

``` shell
gunzip filename.gz

gunzip -g filename.gz

```

or

### 将 /tmp/etc.tar.gz 文件解压缩在 /usr/local/src 底下

``` shell
[root@linux ~]# cd /usr/local/src

[root@linux src]# tar -zxvf /tmp/etc.tar.gz

```




### 安装redis教程传送门
<a href="http://www.mamicode.com/info-detail-526405.html" target="_blank">http://www.mamicode.com/info-detail-526405.html</a>




