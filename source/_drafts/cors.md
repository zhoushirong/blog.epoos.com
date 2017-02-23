---
layout: default
title: 跨域资源共享 CORS
category: 前端
tag: js ajax cors 跨域请求
---

CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
跨域请求是非常常见的操作，尤其是在web应用上面，但是由于历史原因，跨域请求的实现是坎坷的。
下面是常用的几种跨域请求数据的实现。

### Ajax的实现原理


### jQuery中Ajax的实现原理


### Ajax的跨域

1.设置 document.domain
原理：相同主域名不同子域名下的页面，可以设置document.domain让它们同域
限制：同域document提供的是页面间的互操作，需要载入iframe页面

2.有src的标签
原理：所有具有src属性的HTML标签都是可以跨域的，包括 <img>, <script>
限制：需要创建一个DOM对象，只能用于GET方法

其实样式表的<link>标签也是可以跨域的，只要是有src或href的HTML标签都有跨域的能力。
不同的HTML标签发送HTTP请求的时机不同，
<img>在更改src属性时就会发送请求，而script, iframe, link[rel=stylesheet]只有在添加到DOM树之后才会发送HTTP请求：

3.JSONP
原理：<script>是可以跨域的，而且在跨域脚本中可以直接回调当前脚本的函数。
限制：需要创建一个DOM对象并且添加到DOM树，只能用于GET方法

4.navigation 对象(window.name)
原理：iframe之间是共享navigator对象的，用它来传递信息
要求：IE6/7

有些人注意到了IE6/7的一个漏洞：iframe之间的window.navigator对象是共享的。 我们可以把它作为一个Messenger，通过它来传递信息。

5.跨域资源共享（CORS）
原理：服务器设置Access-Control-Allow-OriginHTTP响应头之后，浏览器将会允许跨域请求
限制：浏览器需要支持HTML5，可以支持POST，PUT等方法

6.window.postMessage
原理：HTML5允许窗口之间发送消息
限制：浏览器需要支持HTML5，获取窗口句柄后才能相互通信

7.flash
利用flash的URLLoader，也可以轻松实现跨域数据交互。
只要站点B的跨域策略文件(crossdomain.xml)中包含了站点A，A站就可以获取B站的数据提交数据给B站.












