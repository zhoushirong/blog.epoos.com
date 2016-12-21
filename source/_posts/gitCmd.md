---
layout: default
title: 常用的git操作命令
date: 2016-04-03
---

## {{page.title}}

### 配置git用户名和邮箱

```

git config user.username "用户名" 

git config user.email "邮箱"

```

### 生成ssh-key

```

ssh-keygen -t rsa -C "邮箱"

```

然后根据提示连续回车即可在~/ .ssh 目录下得到id_rsa 和id_rsa.pub 两个文件，id_rsa.pub文件里面存放的就是我们要使用的key。

### 生成多个ssh-key

```

ssh-keygen -t rsa  -f ~/.ssh/id_rsa.xxx -C "邮箱"

```

### git branch

```

git branch —— 列出本地分支

git branch -r —— 列出远程分支

git branch -a —— 列出本地和远程分支

git branch 分支名 —— 创建一个分支（*只是创建，不切换）

git branch -d | -D 分支名 —— 删除本地分支

git branch -d | -D  -r 分支名 —— 删除远程分支


```

### git拉取远程分支到本地

```

git branch -b 远程分支名 origin/远程分支名

git pull origin 远程分支名

```

### git 切换分支

```

git chechout 分支名 —— git切换分支

```

### git commit

```

git commit —— 提交缓存区里面的文件

git commit -m "提交描述信息"

```

### git push

```

git push —— 将本地仓库修改推送到服务器上的仓库

git push origin develop —— 将新分支push到远程分成

git push --set-upstream origin develop —— 将新分支push到远程分支并与之关联起来


```

### git 合并a 分支到 b分支

step1:

```

git checkout b

```

step2:

```

git merge a

```

### git查看log

```

step1:

git log —— 按提交时间列出所有的更新

git log --pretty

git log --pretty=oneline 

git log --pretty=oneline 文件名

git log -p -2 —— -p 选项展开显示每次提交的内容差异，用 -2 则仅显示最近的两次更新：

step2:

找到对应的hash

git show hash串

```

### gitignore

有时候会遇到加入.gitignore文件的时候无效的问题，这个是因为某些文件已经被纳入了版本库

```
//.gitignore

*.log

staticPub/

```

解决办法：

```
git rm -r --cached .

git add .

git commit -m 'updata .gitignore'

```

### git放弃本地修改

```

git reset --hard ORIGIN/BRANCH

```











