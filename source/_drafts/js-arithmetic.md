---
layout: default
title: 关于本站
date: 2017/2/7
category: 算法
tag: javascript 算法
---

算法是编程的基础，排序是算法中比较常见的一种。
前端开发如果是只需要切图布局，那么这些东西确实用不到，但是如果需要写javascript，那么了解一下基本的算法是非常必要的。
最近需要用到这些东西，因此将这些翻出来，在此记录一下。
这里将javascript常用算法列将出来，方便需要用到的时候能够快速查阅。

### 费不拉切数列

``` javascript
function fib(n) {
	var fib_n = function(curr, next, n) {
    if (n == 0) {
       return curr;
    } else {
       return fib_n(next, curr + next, n - 1);
    }
  }
  return fib_n(0, 1, n);
}
console.log(fib(40));
```

### 冒泡排序

``` javascript
function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  };
	return arr;
}
console.log(bubbleSort([85,24,63,17,31,17,86,50]));
```

### 插入排序



``` javascript
function insertSort(arr) {
  let len = arr.length;
  if (len <= 1) {
    return arr;
  }

  for (let i = 1; i < len; i++) {
    let tmp = arr[i];
    let j = i;
    for (j = i; j > 0 && arr[j - 1] > tmp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = tmp;
  }
  return arr;
}
console.log(insertSort([20, 26, 12, 28, 51, 64, 19, 57, 89]));
```

### 快速排序

1.在数组中任意选择一个数作为基准数
2.小于这个基准的数放到左边、大于基准的放到右边
3.对左右两边的数重复以上步骤

常用版本

``` javascript
function quickSort(arr) {　　
  if (arr.length <= 1) {
      return arr;
  }　　
  var pivotIndex = Math.floor(arr.length / 2);　　
  var pivot = arr.splice(pivotIndex, 1)[0];　　
  var left = [];　　
  var right = [];　　
  for (var i = 0; i < arr.length; i++) {　　　　
    if (arr[i] < pivot) {　　　　　　
       left.push(arr[i]);　　　　
    } else {　　　　　　
       right.push(arr[i]);　　　　
    }　　
  }　　
  return quickSort(left).concat([pivot], quickSort(right));
}
console.log(quickSort([20, 26, 12, 28, 51, 64, 19, 57, 89]));
```

维基百科版本

``` javascript
function quickSort(array) {
	// 交换元素位置
	function swap(array, i, k) {
		var temp = array[i];
		array[i] = array[k];
		array[k] = temp;
	}
	// 数组分区，左小右大
	function partition(array, left, right) {
		var storeIndex = left;        
		var pivot = array[right]; // 直接选最右边的元素为基准元素
		for (var i = left; i < right; i++) {
			if (array[i] < pivot) {
				swap(array, storeIndex, i);
				storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
			}
		}
		swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
		return storeIndex;
	}
	function sort(array, left, right) {
		if (left > right) {
			return;
		}
		var storeIndex = partition(array, left, right);
		sort(array, left, storeIndex - 1);
		sort(array, storeIndex + 1, right);
	}
	sort(array, 0, array.length - 1);
	return array;
}
```

## 参考链接

http://bubkoo.com/2014/01/12/sort-algorithm/quick-sort/






