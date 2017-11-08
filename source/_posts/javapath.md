---
layout: default
title: 在osx环境下启动apache
date: 2017/11/8
category: 服务端
tag: java apache jdk
---

## {{page.title}}

经过近三个月的空窗期，终于在2017年11月1日正式入职了新东家，新的环境，新的挑战，努力。
经过一系列的培训、入职之后就开始干活了，而此时面临的第一个问题就是环境安装了。
新公司用的后端语言是java，用的是freemarker模板，需要在本地启动apache-tomcat服务
启动apache首先需要安装java环境，而我的mac上不知是自带的还是之前什么时候安装的，jdk版本是1.8.0_141，而同事给发的一个版本appache-tomcat版本是7.0.11
配置好环境之后发现跑不了，后面同事帮忙解决了，解决方案是重新下载了一个jdk的版本1.7.0_80。

### 下面将配置过程做一下记录

首先，**jdk安装**在osx下可以是可以多个版本的jdk共存的，并不会安装一个低版本的之后就覆盖了另一个版本
通过下面的命令可以查看安装了那些jdk以及相应的安装目录
``` shell
/usr/libexec/java_home -V
```
结果：
``` shell
zsr:~ zsr$ /usr/libexec/java_home -V
Matching Java Virtual Machines (2):
    1.8.0_141, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_141.jdk/Contents/Home
    1.7.0_80, x86_64:	"Java SE 7"	/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home

/Library/Java/JavaVirtualMachines/jdk1.8.0_141.jdk/Contents/Home
```

可以看到，当前我的机器/Library/Java/JavaVirtualMachines目录下面有两个版本的jdk，默认使用的是高版本的这个。

另外还可以通过
``` shell
java -version

```
命令查看运行的是哪个jdk版本

---
另外还需要**配置apache-tomcat**

启动apache-tomcat也有一些特殊，是直接找到文件包

``` shell
cd ~/apache-tomcat-7.0.11/bin
sh startup.sh
```

关闭服务

``` shell
cd ~/apache-tomcat-7.0.11/bin
sh shutdown.sh
```

如果直接如上面这样运行可能不行，因为没有指定想应的java环境变量，因此还需要如下配置

``` shell
cd ~/apache-tomcat-7.0.11/bin
vim setclasspath.sh
```

在文件中添加如下两个对应的jdk的位置路径
``` shell
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home
JRE_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home/jre
```








