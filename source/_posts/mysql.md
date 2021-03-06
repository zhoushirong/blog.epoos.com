---
layout: default
title: Mysql入门
category: 服务端
tag: mysql 数据库
date: 2016/12/25
---

Mysql是最流行的关系型数据库管理系统，尤其是在Web应用方面。
Mysql是一个关系型数据库管理系统，由瑞典MySQL AB公司开发，目前属于Oracle公司。MySQL是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。
Mysql是开源的、免费的、支持大型的数据库
Mysql使用标准的SQL数据语言形式。
下面是Mysql的基本使用。

ps: ${xxx}表示xxx是变量

### mysql安装

用brew安装mysql

安装mysql
``` html
$ brew install mysql
```

设置 MySQL 用户以及数据存放地址
``` html
$ unset TMPDIR

$ mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp
```

忘记mysql数据库密码
``` sql
update user set authentication_string=password('my_password') where user='root';
```

遇到的问题

错误码：ERROR 1045 (28000)
``` html
cd /etc

sudo vim my.cnf

编辑如下代码到my.cnf文件,保存成功应该就可以了
[mysqld]
skip-grant-tables
lower_case_table_names=1
```

权限不足的时候可以创建一个账号
``` sql
CREATE USER 'golden'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON * . * TO 'golden'@'localhost';
FLUSH PRIVILEGES;
```

---

启动mysql
``` html
$ mysql.server start
```

开机启动mysql
``` html
/etc/init.d/mysqld start
```

通过sql文件执行脚本
``` sql
source  /Users/zsr/learn/crawler/sql/createtable.sql;

or

mysql -D samp_db -u root -p < createtable.sql
```

登录mysql
``` sql
mysql -u root -p

输入mysql密码
```

---

创建一个数据库，设置character是为了兼容汉字
``` sql
create database ${newdatabasename} character set gbk;
```

查看所有的数据库
``` sql
show databases;
```

删除数据库
``` sql
drop database ${databasename};
```

选中testdb数据库
``` sql
use testdb;
```

---

创建一张表
``` sql
use ${databasename}

create table students
（
    id int unsigned not null auto_increment primary key,
    name char(8) not null,
    sex char(4) not null,
    age tinyint unsigned not null,
    tel char(13) null default "-"
);
```

修改表名
``` sql
alter table ${oldtablename} rename to ${newtablename};
```

查看所有表
``` sql
show tables;
```

删除表
``` sql
drop table ${tabename};
```

显示数据表的属性，属性类型，主键信息
``` sql
show columns from students
```

---

查看列
``` sql
desc ${tablename};
```

添加列
``` sql
alter table ${tablename} add column ${newcolumnname} verchar(30);
```

删除列
``` sql
alter table ${tablename} drop column;

alter table ${tablename} drop column ${columnname};
```

修改列
``` sql
alter table ${tablename} change ${ondcolumnname} ${newcolumnname} int; 
```

修改列属性
``` sql
alter table ${tablename} modify ${oldattr} char(80);
```

---

增加数据
``` sql 
insert into ${tablename} values (${column1}, ${column2}); /*如果自增id，则column1为0*/
```

修改数据
``` sql
update ${tablename} set ${attr}=${newAttr} where ${id=3}; /*id=3代表查询条件*/
```

查询数据
``` sql
select * from ${tablename} where ${id=3};
```

删除数据
``` sql
delete from ${tablename} where ${id=3};
```

---

详细的常用查询操作
1.查询从第n条开始的m条数据

``` sql
select * from test_table limit n,m;
```

查看数据库编码
``` sql
show variables like 'character%'; 
```

查看数据库位置
``` sql
show variables like 'datadir%'
```

备份数据
``` html
mysqldump -udbusername -pdbpwd dbname > ./epoos.sql
scp -r root@xxx.193.173.xx:/xxx/xxx/xxx/epoos.sql /Users/zsr/epoos 
```

还原数据
``` sql
mysql -h127.0.0.1 -uroot -p123456 epoos < epoos.sql
```

如果上面的还原功能不好使，可以
``` html
1.创建新数据库 newdb
2.use newdb
3.执行备份的sql文件
```


