---
layout: default
title: nodeMongodb入门
date: 2016/04/30
category: 服务端
tag: mongodb 数据库
---

## {{page.title}}

#### Schema

一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力

#### Model

由Schema发布生成的模型，具有抽象属性和行为的数据库操作对

#### entity

由Model创建的实体，它的操作会影响数据库



#### mongodb安装

```
brew update —— 更新homebrew的package数据库

brew install mongodb —— 安装mongodb

mongod --config /usr/local/etc/mongod.conf —— 启动mongodb

mongo
```


#### mongodb启动失败处理

<a href="http://stackoverflow.com/questions/23418134/cannot-connect-to-mongodb-errno61-connection-refused" target="_blank">http://stackoverflow.com/questions/23418134/cannot-connect-to-mongodb-errno61-connection-refused</a>


```
brew services start mongodb
```







