---
layout: default
title: es6LLearn
date: 2016-08-29
---

## {{page.title}}

``` html
babel -es6.js -o es5.js 将es6转换为es5

babel -d build-dir source-dir -s 将source-dir整个目录编译 -s表示生成map文件

npm install babel-core@5 这个版本有浏览器支持的browser.js

browserify -d test5.js -o bundle.js  将es6转化为可以在浏览器跑的代码 -d生成map文件
```





