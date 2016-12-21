---
layout: default
title: cssDisplay
date: 2016-04-07
---

## {{page.title}}

### display:inline-block

ie6，7对于display:inline-block的兼容性

兼容写法：

```css
.elms {
    display: inline-block; /*现代浏览器+ie6，7inline元素*/
    *display: display:inline; /*ie6,7 block元素*/
    *zoom: 1;
}
```

### 解释

在ie6，7中，display:inline-block是可以出发hasLayout的，触发了hasLayout的元素的表现出来的特征就是一个独立的矩形容器

#### 对于inline元素：

比如：对于a标签、span标签等直接display:inline-block就可以了

#### 对于block元素：

在ie6，7中block元素即使触发了hasLayout也不能具有inline-block元素不换行的特性。想要block元素支持inline-block元素的特性，我们可以这样做：

```css
.elms {
    display:inine;
    zoom:1;
}
```

首先让block元素转化为inline元素，强制其不换行；然后通过zoom:1触发hasLayout，使其可以设置宽高。

### 什么是inline-block元素

inline-block后的元素就是一个格式化为行内元素的块容器


### inline-block元素空隙去除

```css
.dib-wrap {
    font-size:0;/* 所有浏览器 */
    *word-spacing:-1px;/* IE6、7 */
}
.dib-wrap .dib{
    font-size: 12px;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align:top;
}
@media screen and (-webkit-min-device-pixel-ratio:0){
    /* firefox 中 letter-spacing 会导致脱离普通流的元素水平位移 */
    .dib-wrap{
        letter-spacing:-5px;/* Safari 等不支持字体大小为 0 的浏览器, N 根据父级字体调节*/
    }
}
.dib {
    display: inline-block;
    *display:inline;
    *zoom:1;
}
```


参考原文：

[http://ued.taobao.org/blog/2012/08/inline-block//](http://ued.taobao.org/blog/2012/08/inline-block//){:target="_blank"}  










