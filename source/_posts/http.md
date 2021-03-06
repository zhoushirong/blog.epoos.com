---
layout: default
title: 超文本传输协议 HTTP
category: 前端
tag: http cache 缓存
date: 2017-2-27
---

超文本传输协议（HyperText Transfer Protocol，缩写：HTTP）是互联网上应用最为广泛的一种网络协议。
设计HTTP最初的目的是为了提供一种发布和接收HTML页面的方法。
通过HTTP或者HTTPS协议请求的资源由统一资源标识符（Uniform Resource Identifiers，URI）来标识。
HTTP是一个客户端终端（用户）和服务器端（网站）请求和应答的标准（TCP）

通常，由HTTP客户端发起一个请求，创建一个到服务器指定端口（默认是80端口）的TCP连接。
HTTP服务器则在那个端口监听客户端的请求。
一旦收到请求，服务器会向客户端返回一个状态，比如"HTTP/1.1 200 OK"，以及返回的内容，如请求的文件、错误消息、或者其它信息

---
### 版本
0.9
HTTP/1.0
HTTP/1.1
HTTP/2

---
### 请求方法
HTTP/1.1协议中共定义了八种方法（也叫“动作”）来以不同方式操作指定的资源

- *OPTIONS：*这个方法可以使服务器传回该资源所支持的所有HTTP请求方法。用'*'来代替资源名称，向Web服务器发送OPTIONS请求，可以测试服务器功能是否正常运作。

- *GET：*向指定的资源发出“显示”请求。使用GET方法应该只用在读取数据，而不应当被用于产生“副作用”的操作中，例如在Web Application中。其中一个原因是GET可能会被网络蜘蛛等随意访问。

- *HEAD：*与GET方法一样，都是向服务器发出指定资源的请求。只不过服务器将不传回资源的本文部分。它的好处在于，使用这个方法可以在不必传输全部内容的情况下，就可以获取其中“关于该资源的信息”（元信息或称元数据）。

- *POST：*向指定资源提交数据，请求服务器进行处理（例如提交表单或者上传文件）。数据被包含在请求本文中。这个请求可能会创建新的资源或修改现有资源，或二者皆有。

- *PUT：*向指定资源位置上传其最新内容。

- *DELETE：*请求服务器删除Request-URI所标识的资源。

- *TRACE：*回显服务器收到的请求，主要用于测试或诊断。

- *CONNECT：*HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。通常用于SSL加密服务器的链接（经由非加密的HTTP代理服务器）。

- *方法名称是区分大小写的。
当某个请求所针对的资源不支持对应的请求方法的时候，服务器应当返回状态码405（Method Not Allowed），当服务器不认识或者不支持对应的请求方法的时候，应当返回状态码501（Not Implemented）。*

---

### TCP三次握手
- 第一次握手：客户端发送syn包(syn=j)到服务器，并进入SYN_SEND状态，等待服务器确认；
- 第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
- 第三次握手：客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=k+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。

---

### 四次挥手



---

### 状态码

1xx：消息——请求已被服务器接收，继续处理
2xx：成功——请求已成功被服务器接收、理解、并接受
3xx：重定向——需要后续操作才能完成这一请求
4xx：请求错误——请求含有词法错误或者无法被执行
5xx：服务器错误——服务器在处理某个正确请求时发生错误

---

### http1.0和http1.1的区别

- 缓存处理：增加缓存头来控制缓存策略。
- 带宽优化及网络连接的使用：支持断点续传以及部分请求
- 错误通知的管理：新增多个错误状态码
- 互联网地址的维护：HTTP1.1的请求消息和响应消息都应支持Host头域
- 长连接：一个tcp可用于多个http

---

### 影响Http网络请求的的主要因素
带宽和延迟
延迟的原因：

``` html
1.浏览器阻塞：浏览器限制请求并发
2.DNS查询：ip查询
3.建立连接：tcp三次握手
```

### http缓存

通过http获取网络数据的成本是非常高的，尤其是当需要大范围获取数据的时候，好在浏览器都有缓存策略

1.使用 ETag 验证缓存的响应：
服务器下发给客户端的时候在ETag头返回一个验证令牌Response Headers（ETag:"58b4e12b-2492d"）
当客户端再次请求的时候讲令牌带上,Request Headers（If-None-Match:W/"58b4e12b-2492d"）
服务端验证令牌如果没有发生改变则返回304


2.Cache-Control：
每个资源都可以通过 Cache-Control HTTP 头来定义自己的缓存策略
Cache-Control 指令控制谁在什么条件下可以缓存响应以及可以缓存多久

``` html
Cache-Control 头在 HTTP/1.1 规范中定义，取代了之前用来定义响应缓存策略的头（例如 Expires）。当前的所有浏览器都支持 Cache-Control，因此，使用它就够了
```
- no-cache 和 no-store
no-cache：表示必须先与服务器确认返回的响应是否被更改，然后通过ETag来判断是否需要下载资源。
no-store：禁止浏览器和所有中继缓存存储返回的任何版本的响应。
例如：一个包含个人隐私数据或银行数据的响应。每次用户请求该资源时，都会向服务器发送一个请求，每次都会下载完整的响应

- public和private
如果响应被标记为public，即使有关联的 HTTP 认证，甚至响应状态码无法正常缓存，响应也可以被缓存。大多数情况下，public不是必须的，因为明确的缓存信息（例如max-age）已表示 响应可以被缓存。
相比之下，浏览器可以缓存private响应，但是通常只为单个用户缓存，因此，不允许任何中继缓存对其进行缓存 - 例如，用户浏览器可以缓存包含用户私人信息的 HTML 网页，但是 CDN 不能缓存。

- max-age
该指令指定从当前请求开始，允许获取的响应被重用的最长时间（单位为秒）

- s-maxage
同max-age，只用于共享缓存（比如CDN缓存）。

- Last-modified（类似于ETag）
服务器端文件的最后修改时间，需要和cache-control共同使用，是检查服务器端资源是否更新的一种方式
当浏览器再次进行请求时，会向服务器传送If-Modified-Since报头，询问Last-Modified时间点之后资源是否被修改过。如果没有修改，则返回码为304，使用缓存；如果修改过，则再次去服务器请求资源，返回码和首次请求相同为200，资源为服务器最新资源。


3.expires：
Expires 头指定了一个日期/时间， 在这个日期/时间之后，HTTP响应被认为是过时的
如果还有一个 设置了 "max-age" 或者 "s-max-age" 指令的Cache-Control响应头，那么  Expires 头就会被忽略。


---

## 相关链接

### 维基百科（需代理方能打开）
https://zh.wikipedia.org/wiki/超文本传输协议

### http1.0和http1.1的区别

http://blog.csdn.net/forgotaboutgirl/article/details/6936982

### http、socket、tcp/ip的区别

http://jingyan.baidu.com/article/08b6a591e07ecc14a80922f1.html

### http缓存

https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn

http://www.alloyteam.com/2016/03/discussion-on-web-caching/