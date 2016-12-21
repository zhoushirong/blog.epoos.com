---
layout: default
title: reactLearn
date: 2016-09-25
---

## {{page.title}}

### Flux

Flux将应用分为4个部分

``` html
View 视图

Action 行为

Dispatcher 分发器

Store 数据层，用于存放应用状态，一旦发生变动，就提醒views更新页面
```

Flux最大的特点就是单项数据流动

``` html
1.用户访问View

2.View发出用户的Action

3.Dispather接收到用户的Action，要求Store进行相应更新

4.Store更新之后，发出一个change事件

5.View接收到change事件之后更新页面
```
如图所示：（图片来源:http://www.ruanyifeng.com/）

<img src="http://www.ruanyifeng.com/blogimg/asset/2016/bg2016011503.png" style="width:100%;border-radius:8px;" alt="">

### Redux

只有遇到React解决不了的问题，你才需要Redux

如果UI层非常简单，没有很多交互，Redux就不是必要的

#### Redux设计思想

``` html
1.web应用是一个状态机，视图与状态是一一对应的

2.所有的状态保存在一个对象里
```

#### 基本概念和API

##### 1.Store

保存数据的地方，可以将其看做是一个容器。整个应用只能有一个Store

``` javascript
import {createStore} from "redux";

const store = createStore(fn);
```

##### 2.State

保存所有的数据，如果想得到某个时点的数据，就要对Store生成快照。这种时点的数据集合就叫做State

``` javascript
import {createStore} from "redux";

const store = createStore(fn);

const state = store.getState();
```

Redux规定，一个State对应一个View。只要State相同，View就相同。知道State就能知道View是什么样，反之亦然。

##### 3.Action

Action为View发出的通知，表示State将要发生变化

Action描述当前发生的事情。改变State的唯一办法就是通过Action将数据运送到Store

``` javascript
const action = {
    type: "ADD_TODO", // Action的名称
    payload: "LEARN Redux" // Action携带的字符串信息
};
```

#### 4.Action Creater

定义一个函数，用来自动生成Action，这个函数就叫做Action Creator

``` javascript
const ADD_TODO = "添加 TODO";

function addToDo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

const action = addToDo(Learn Redux);
```

#### 5.store.dispatch()

store.dispatch()是View唯一发出Action的方法

``` javascript
import {createStore} form "redux";

const store = createStore(fn);

store.dispatch({
    type: "ADD_TODO",
    payload: "Learn Redux",
});
```
store.dispatch接受一个Action对象作为参数，将它发送出去

结合Action Creater

``` javascript
store.dispatch(addToDo("Learn Redux"));
```

#### 6.Reducer

Store收到一个Action之后必须给出一个新的State，这样View才会发生变化。这种State的计算过程就叫做Reducer

Reducer是一个函数，它接受Action和当前的State作为参数，返回一个新的State

``` javascript
const Reducer = function(state, action){
    //...
    return new_state;
}
```

#### 7.纯函数

Reducer最重要的特点是它是一个纯函数

#### 8.store.subscribe()

Store允许使用Store.subscribe方法设置监听函数，一旦State发生变化就自动执行这个函数

``` javascript
import {createStore} from "redux";
const store = createStore(reducer);

store.subscribe(listener);
```

解除监听，store.subscribe方法返回一个函数，调用这个函数即可解除监听

``` javascript
const unsubscribe = store.subscribe(() => 
    console.log(store.getState());
);
unsubscribe();
```

### Store的实现

Store提供了三个方法

``` javascript
store.getState();

store.dispatch();

store.subscribe();
```

``` javascript
import {createStore} from "redux";
let {subscribe, dispatch, getState} = createStore(reducer);
```

### Reducer拆分

Reducer负责生成State，由于一个项目只有一个State，导致这个State会非常庞大，因此需要拆分

Redux提供了一个combineReducers方法。用这个方法可以将各个子Reducer合并成一个大的Reducer

``` javascript
import {combineReducers} form "redux";

const chatReducer = combineReducers(){
    chatLog,
    statusMessage,
    userName
};

export default todoApp;
```

可以将所有的子Reducer放在一个文件里面，然后统一引入

``` javascript
import {combineReducers} form "redux";
import * as reducers from "./reducers";

const reducer = combineReducers(reducers); 
```


### 工作流程

如图所示：（图片来源:http://www.ruanyifeng.com/）

<img src="http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg" style="width:100%;border-radius:8px;" alt="">

首先：用户发出action

``` javascript
store.dispatch(actioin);
```

然后：Store自动调用Reducer，并传入两个参数（当前State和Action）。Reducer会返回新的State

``` javascript
let nextState = todoApp(previousState, action);
```

一旦State出现变化，Store调用监听函数

``` javascript
store.subscribe(listener);
```
listener可以通过store.getState()获取当前状态。

``` javascript
function listener(){
    let newState = store.getState();
    component.setState(newState);
}
```


---------------------------------------

#### babel官网
<a href="https://babeljs.io/" target="_blank">https://babeljs.io/</a>


#### react官网
<a href="https://facebook.github.io/react/" target="_blank">https://facebook.github.io/react/</a>


#### redux中文文档
<a href="http://cn.redux.js.org/" target="_blank">http://cn.redux.js.org/</a>


#### redux介绍（segmentfault）
<a href="https://segmentfault.com/a/1190000003503338?_ea=323420" target="_blank">https://segmentfault.com/a/1190000003503338?_ea=323420</a>


#### react入门实践
<a href="http://www.jianshu.com/p/808bb43b3744" target="_blank">http://www.jianshu.com/p/808bb43b3744</a>


#### 阮一峰react系列教程
<a href="http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html" target="_blank" >http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html</a>



