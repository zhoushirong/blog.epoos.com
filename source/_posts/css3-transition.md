---
layout: default
title: css3Transition
category: 前端
tag: css3 transition
date: 2016/04/07
---

## {{page.title}}


### 一、Chrome渲染Transition时页面闪动Bug

#### 对于chrome执行动画的时候回出现闪动，重现代码如下：

```css
.className{
    -webkit-transition: -webkit-transform .2s ease-in;
}
 
 or 

.className{
   -webkit-transition: all .2s ease-in-out;	
}
```


#### 解决办法：

```css
.className{
    -webkit-backface-visibility: hidden; /* （设置进行转换的元素的背面在面对用户时是否可见：隐藏） */
    -webkit-transform-style: preserve-3d; /*（设置内嵌的元素在 3D 空间如何呈现：保留 3D ）*/
}
```


参考原文：

[http://ued.taobao.org/blog/2012/01/chrome渲染transition时页面闪动bug/](http://ued.taobao.org/blog/2012/01/chrome渲染transition时页面闪动bug/){:target="_blank"}  










