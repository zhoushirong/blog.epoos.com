---
layout: default
title: js数据类型常见坑
date: 2017/09/27 00:00:00
category: 前端
tag: js 基础
---

是时候来整理下js的基础知识了。

ECMAScript的五种简单数据类型：Undefined、Null、Boolean、Number、String

一种复杂数据类型： Object

### 检测方法用typeof，打印出来分别是：

undefined、boolean、string、number、object、function


### 一些特殊的类型比较

``` javascript
typeof null // object ，特殊值null会被认为是空对象的引用

typeof NaN // number ，NaN是属于number类型的

Boolean(NaN) // false

null == undefined // true，ECMAScript 规范认为，既然 null 和  undefined 的行为很相似，并且都表示 一个无效的值，那么它们所表示的内容也具有相似性

null === undefined // false

undefined == 0 // false

null == 0 // false

var message;
message === undefined // true;

[] == [] // false，不相等，因为当两个值都是对象（引用值）时，比较的是两个引用值在内存中是否是同一个对象
{} == {} // false，同上

[] == false // true 隐式类型转换，全部转换为了0，0 == 0

NaN == NaN // false
```

### 类型计算

``` javascript 
0.1+0.2 // 0.30000000000000004

var number = Number.MAX_VALUE + Number.MAX_VALUE;
isFinite(number); // false isFinite这个函数在参数位于最小与最大值之间时会返回true
```






