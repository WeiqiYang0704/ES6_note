# 数组新增的API

## 静态方法  
--  Array.of ()  使用指定的数组项创建一个新数组
--  Array.from() 通过给定的类数组或可迭代的对象 创建一个新的数组。

## 实例方法

-- find(callback):用于查找满足条件的第一个元素。 找到了，返回该元素，否则返回 undefined
-- findIndex(callback): 用于查找满足条件的第一个元素的下标,如果找到返回 下标，否则返回 -1
-- fill(data):用指定的数据填充数组所有的内容。
-- copyWithin(target,start?,end?) 在数组内完成复制
-- includes(data) 判断数组中是否包含某个值，使用object.is 匹配， 如果找到了，返回true,否则false