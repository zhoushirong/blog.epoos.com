---
layout: default
title: javascript循环效率对比
category: 前端
tag: js
---

关于javascript遍历数组是非常常见的，但是到底哪一种效率更高呢？

测试代码如下：

``` javasccript
testCirculation(10);
testCirculation(100);
testCirculation(1000);
testCirculation(10000);
testCirculation(100000);
testCirculation(1000000);
testCirculation(10000000);
```

``` javascript
function testCirculation(num) {
	var arr = [];
	(function(){for(var i=0;i<num;i++){arr[i]=null;}})();
	console.log('arr.length = ',arr.length);

	console.time("time1")
	for(var j=0;j<num;j++) {
		if(arr[j]){ };
	}
	console.timeEnd("time1")

	console.time("time2")
	arr.forEach(function(a){
		if (a) { }
	});
	console.timeEnd("time2")

	console.time("time3")
	arr.map(function(a) {
		if (a){ }
	});
	console.timeEnd("time3")

	console.time("time4")
	for(var j in arr) {
		if(arr[j]){ };
	}
	console.timeEnd("time4")
}
```
