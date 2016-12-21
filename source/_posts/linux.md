---
layout: default
title: 常用linux命令1
date: 2016-04-21
---

## {{page.title}}

```
# 超级用户

$ 普通用户

命令 [选项] [参数]
```

### ls

```
ls -a —— 显示隐藏文件  

ls -i —— 显示详细信息

ls -l —— 显示扩展名以及权限

ls -h —— 显示格式化列表

对于文件前面的这一串字符串的意思：-rw-r--r--

-表示文件类型

rw-表示所有者u     

r--

g所属组

r--

o其他人

r读 w写 x执行
```

### linux查找功能

#### 1.locate 查找文件

```
更新locate数据库 updatedb

locate locate
```

#### 2.which 查找命令

```
$PATH 定义的是所有系统搜索命令的路径

echo $PATH 输出所有路径
```

#### 3.find查找命令

```
find 范围 -name 文件名

find 范围 -iname 文件名（不区分大小写）

find 范围 -mtime 文件名 +10 （10天内修改的文件）a访问

find 范围 -size -15k (小于25k的文件) M兆

find 范围 -size +1k -a -size -50k (大于1k小于50k) -o或

通配符：

* 匹配任意内容

? 匹配一个字符

[] 匹配括号内某个字符
```

#### grep 根据内容搜索文件

-----------------------------------------------


### 帮助命令

```
main 查看帮助文档

help 获取内部命令
```

-----------------------------------------------

### 压缩与解压缩命令

#### .zip .gz .bz2 

```
.zip在window和linux通用  压缩文件命令为：zip 压缩文件名 源文件名 ； 压缩文件夹命令为：zip -r 压缩文件名 源目录 ;解压命令将zip改为unzip即可
```

#### .tar.gz .tar.bz2 打包命令tar

```
tar -cvf 打包文件名 源文件   -c：打包 -v：显示过程 -f：指定打包后的文件名 -x：解打包 -z：压缩包名为.tar.gz -C：指定解压目录

eg:

tar -zcvf packfiles.tar.gz packfiles

tar -zxvf packfiles.tar.gz

tar -zxvf packfiles.tar.gz -C ./dirs
```

-----------------------------------------------

### 关机和重启

记住要用logout；不要直接关闭远程工具

### 挂载 mount —— windows中的分配盘符

```
mount —— 查询当前已经挂载的盘符

umount —— 卸载挂载
```

#### u盘的挂载和卸载

```
umount /dev/disk2s1

*linux不支持ntfs文件系统
```

-----------------------------------------------

### 可执行文件.sh

#### 创建一个可执行文件 hello.sh

```
#!/bin/bash

echo "hello zsr !!!"
```

#### 执行可执行文件

```
chmod 755 hello.sh —— 给予文件可执行权限

./hello.sh —— 执行可执行文件
```

-----------------------------------------------

### 登录

```
w 查询当前所有的登录用户

who 查询当前所有的登录用户

last 查询所有的登录信息

/val/log —— 系统日志信息
```

### shell 学习

shell是什么？

shell是一个命令行解释器

用户 ——》shell ——》内核 

内核 ——》sell ——》用户


``` html
echo $SHELL 查看当前的shell环境变量

/etc/shells 查看当前shell支持的版本
```

### echo命令

``` html
echo 选项 输出内容

选项：-e 支持反斜杠控制的字符转换
```

### 创建可执行文件 hello.sh

``` html
#!/bin/bash
#the first program

echo -e "\e[1;34m i live yellow \e[0m"
```

#### 执行可执行文件

两个方法：

#### 赋予执行权限再执行

```
chmod 755 hello.sh

./hello.sh
```

#### 直接用bash执行

```
bash hello.sh
```


### bash的基本功能

#### alias 设置命令别名

```
alias 查看已有的别名

alias ll='ls -ilpa' 重命名显示文件详细信息的命令

unalias 删除别名

命令的生效顺序：绝对路径启动 》 别名 》 bash内部命令 》 $PATH环境变量定义的目录查找到的第一个命令
```

#### 常用快捷键

```
ctl+c 强制终止当前命令

ctl+l 清屏

ctl+a 光标移到行首

ctl+e 光标移到行尾

ctl+u 从光标删除到行首

ctl+z 把命令放入后台

ctl+r 在历史命令中搜索
```

#### 历史命令

```
history 显示所有的历史命令

保存位置在 ~/.bash_history文件里面

history -c 清除历史命令
```

#### nginx相关

查看nginx是否启动

``` html
ps -ef|grep nginx
```


### 重定向

dev目录 —— linux保存特殊文件的目录

#### 输出重定向

```
命令 > 文件 —— 标准输出重定向

命令 >> 文件 —— 追加重定向

命令 2> 文件 —— 标准错误输出

命令 2>> 文件 —— 追加标准错误输出

命令 >> 文件 2>&1 —— 追加错误或者正确的命令

命令 &> /dev/null —— 放弃查看命令执行结果

命令 >> success.log 2 >> error.log —— 分别保存这两个正确和错误的信息
```

#### 输入重定向

```
wc 选项 文件名 —— 统计（ctl+d结束）

- c 统计字节数。

- l 统计行数。

- w 统计字数。
```


#### 多命令顺序执行

```
命令1; 命令2 —— 多个命令顺序执行，命令之间没有任何逻辑关系

命令1 && 命令2 —— 逻辑与关系

命令1 || 命令2 —— 逻辑或关系 
```

### 管道符

```
命令1 | 命令2 —— 命令1的正确输出结果作为命令2的操作对象

eg:

netstat -an | grep "ESTABLISHED"
```

### 通配符

```
? —— 匹配任意字符

* —— 匹配0个或多个任意字符

[] —— 匹配中括号中任意一个字符

"" —— 可以调用变量的值

'' —— 所有特殊符号如 $ 都没有特殊含义

` ` —— 反引号可以执行命令

$(命令) —— 执行命令
```

### head tail cat awk grep vim 

```
dmi 查看cpu信息

chmod +x filename.sh

chown —— 改变文件所属

/etc/rc.local —— 开机启动配置

cron —— 定时器相关
```



















