# Promise的其他API

## 原型成员 （实例成员）

- then 注册一个后续处理函数，当Promise为resolved状态运行该函数。
- catch 注册一个后续处理函数，当Promise为rejected状态运行该函数。
- finally: [ES2018] 注册一个后续处理函数（无参),无论是resolved rejected 都会运行该函数。

## 静态成员，构造函数成员
Promise.resolve 
```js
  const pro=new Promise( (resolve,reject)=>{
       resolve(1)
  } )
  等同于
    Promise.resolve(1)
```
Promise.rejected

Promise.all()

Promise.race()