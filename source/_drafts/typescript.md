---
layout: default
title: TypeScript入门
date: 2017/02/28
category: 前端
tag: typescript
---

### 安装
``` shell
npm install -g typescript
```

### 编译
``` shell
tsc helloworld.ts
```

### helloworld

``` typescript
class Greeter {
	greeting: string,
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return 'Hello, ' + this.this.greeting;
	}
}

let greeter = new Greeter('world');
```

### 相关链接

https://www.tslang.cn/docs/tutorial.html


