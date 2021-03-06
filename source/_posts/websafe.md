---
layout: default
title: Web安全问题
category: 前端
tag: js cors web安全
date: 2016/12/25
---

基于Web环境的互联网应用有着其它平台没有的优势，易于维护、更新迭代更快、使用方便、跨平台等。
而缺点也同样明显，那就是性能远远没有桌面应用好，使得相对没那么受欢迎。
随着科技的发展，尤其是近几年来设备的更新换代以及新型浏览器的出现，Web应用的性能有了极大的提升。
基于web环境的互联网应用越来越多，而与之伴随的Web安全问题也更加凸显。
本人对web安全也了解不多，趁此摸鱼的时间，查一查相关资料，在此记录一下。


### 攻击方式

1.资源枚举
枚举url获取网站文件、枚举错误信息获取网站信息

2.参数操纵
包括了SQL注入、XPath注入、cgi命令执行，还有XXS和会话劫持等，前三个的攻击主要是在服务端触发的，后二者的攻击则是侧重于客户端。

3.会话劫持

4.XSS 全称(Cross Site Scripting) 跨站脚本攻击， 是Web程序中最常见的漏洞
XSS指攻击者在网页中嵌入客户端脚本（js/css），
当用户浏览此网页时，脚本就会在用户客户端上执行，从而达到攻击目的，比如获取用户cookie,导航到恶意网站，携带木马等。
1)反射型XSS，又称非持久型XSS
	攻击者通过电子邮件等方式将包含注入脚本的恶意链接发送给受害者，当受害者点击该链接时，注 入脚本被传输到目标服务器上，然后服务器将注入脚本“反射”到受害者的浏览器上，从而在该浏览器上执行了这段脚本。
2)存储型XSS
3)DOM XSS	
4)XSS payload



5.CSRF（cross-site request forgery），翻译为跨站请求伪造
与XSS非常相似，但XSS是利用用户对当前网站的信任来发起攻击，而CSRF是利用网站对用户的信任来发起攻击。

对于CSRF攻击，我们所能做的可以有：
1). 检查报头中的Referer参数确保请求发自正确的网站（但XHR请求可调用setRequestHeader方法来修改Referer报头）；
2). 对于任何重要的请求都需要重新验证用户的身份；
3). 创建一个唯一的令牌（Token），将其存在服务端的session中及客户端的cookie中，对任何请求，都检查二者是否一致。



6.钓鱼攻击 指的是网站的伪造，比如ta0bao.com，然后在其中应用XSS等方式发起攻击。

7.拒绝服务（DoS）指的是向网站发起洪水一样的请求（Traffic Floor），导致服务器超负荷并关闭.
处理方法常规是采用QoS（Quality of Service）的软硬件解决方案。

### 攻击层面

攻击层面指的是有恶意的人可能会从哪些地方来入手制造麻烦，常见的攻击层面有三种：
一. 传统WEB应用程序
1. 表单输入（甚至包括hidden控件的内容）；
2. cookie（通过修改cookie内容也可以达到SQL注入攻击的目的）；
3. 报头（有时候为了方便统计来源数据，服务器会把客户端发来报头的Referer、User-Agent信息存到数据库中，那么通过修改报头信息也可以起到SQL注入工具目的）
4. 请求参数
5. 上传文件（在文件内携带恶意代码）

二. Web服务
1. 上述“传统WEB服务”的全部方法；
2. WSDL文档（暴露了服务端的每个方法及其使用方式）

三. AJAX应用程序
即上述的“一”和“二”的合集

### 解决方案
综上所述，我们可以这样审视我们的WEB站点：

1. 永远不要相信客户端传来的任何信息，对这些信息都应先进行编码或过滤处理；
2. 谨慎返回用户输入的信息；
3. 使用黑名单和白名单处理（即“不允许哪些敏感信息”或“只允许哪些信息”，白名单的效果更好但局限性高）；
4. 检查、验证请求来源，对每一个重要的操作都进行重新验证；
5. 使用SSL防止第三方监听通信（但无法阻止XSS、CSRF、SQL注入攻击）；
6. 不要将重要文件、备份文件存放在公众可访问到的地方；
7. 会话ID无序化；
8. 对用户上传的文件进行验证（不单单是格式验证，比方一张gif图片还应将其转为二进制并验证其每帧颜色值<无符号8位>和宽高值<无符号16位>）；
9. WSDL文档应当要求用户注册后才能获取；
10. 在报头定义CSP（Content Security Policy）；
11. 。。。

虽然我们有一些必要的手段来防止WEB攻击，但永远不会有一枚silver bullet来彻底解决问题，先不谈那些数不胜数的已知的、可被攻击的漏洞，对于谜一样的0-day漏洞，我们所能做的只是提前发现并及时修补它们。


### 参考链接

http://www.cnblogs.com/vajoy/p/4176908.html
http://imweb.io/topic/568958714c44bcc56092e409
