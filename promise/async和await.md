# async  await 基本使用

## async  简化在函数中对promise的创建
 被修饰的函数返回结果一定是promise对象

 ## await
 **await关键字必须出现在async函数中！！！**
  await用在表达式之前，如果是一个promise，则得到的 thenable中的数据,rejected状态的数据不做处理

  如果await 后面不是一个promise，则会使用Promise.resolve().then()
  ```js
   async   function test(){
       console.log(1)
       return 2
   }
   async  function fn(){
       const res=await test();
       console.log(res)
       // 。。。很多代码
   }
   //相当于
    async function fn(){
        return new Promise( (resolve,reject)=>{
            test().then( (data)=>{
            const res=data;
            console.log(res)
            // ... 很多代码
        })
          resolve();
        } )
        
    }
  ```