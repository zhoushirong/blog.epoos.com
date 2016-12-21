---
layout: default
title: nodeAndPm2
date: 2016-03-29
---

## {{page.title}}

如果是用npm start

切换方式为：

```

set NODE_ENV=production&& npm start

set port=端口号

*linux 使用 export代替set

export -p 列出当前的所有环境变量

```

## pm2

切换方式为：

```

pm2 start app.json --env production

pm2 restart app.json --env production

```

如果使用了pm2，app.json

eg:

```

{
	"apps":[{
		"name":"appName",
		"script":"bin/www",
		"log_date_format":"YYYY-MM-DD HH:mm:SS",
		"merge_logs":true,
		"log_file":"../logpath/file.log",
		"error_file":"../logpath/err.log",
		"out_file":"../logpath/out.log",
		"pid_file":"../logpath/file.pid",
		"exec_mode":"fork_mode",
		"watch":true,
		"env":{
			"NODE_ENV":"development",
			"PORT":80
		},
		"env_test":{
			"NODE_ENV":"test",
		},
		"env_production":{
			"NODE_ENV":"production",
			"PORT":80
		}
	}]
}

```

启动示例为：pm2 start app.json --env test



pm2传送门：

[https://github.com/Unitech/pm2](https://github.com/Unitech/pm2){:target="_blank"}  

nodejs传送门：

[https://nodejs.org/dist/latest-v5.x/docs/api/](https://nodejs.org/dist/latest-v5.x/docs/api/){:target="_blank"}  

nodejs中文传送门：

[http://nodeapi.ucdok.com/#/api/](http://nodeapi.ucdok.com/#/api/){:target="_blank"}  


