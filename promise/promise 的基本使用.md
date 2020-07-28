# promise基本使用

```js
   const pro=new Promise( (resolve,reject)=>{
        // 未决阶段的处理
        /*
           通过调用resolve函数将promise 推向已决阶段的resolved状态， 通过调用reject 函数将promise 退浆已决阶段的rejected状态， resolve和reject均可以传递最多一个参数，表示推向状态的数据

        */
       pro.then( data=>{
            /*这是thenabel函数，如果当前的Promise已经是resolved状态，该函数会立即执行。
            如果当前是未决阶段，则会加入到作业队列中，等待到达resolved 状态后执行

            */
       }，err =>{
            /*
             这是catchable 函数，如果当前Promise已经是rejected 状态，该函数会立即执行。
             如果当前是未决阶段，则会加入作业队列，等待到底rejected 状态后执行。
            */
       })
   } )
```
**细节**
1. 未决阶段的处理函数是同步的，会立即执行
2. thenable 和catchable是异步的， 就算是立即执行，也会加入到事件队列中等待执行，加入的队列是微队列。
3. pro.then 可以只添加thenable函数，pro.catch 可以单独添加catchable 函数
4. 在未决阶段的处理函数中，如果发生未捕获的错误，会将状态推向rejected，并被catchable 捕获
5. 一旦状态推向了已决状态，无法再对状态做任何更改。
6.  primise并没有消除回调，只是让回调变得可控制
