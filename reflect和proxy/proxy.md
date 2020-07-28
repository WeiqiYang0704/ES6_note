# proxy 代理
代理：提供了修改底层实现的方式

```js
   //代理一个目标对象
   // target 目标对象  handler 是一个普通对象，其中可以重写底层实现 可以配置，(就是reflect 的API )
   //返回一个代理对象
   new Proxy(target,handler)
   const prox=new Proxy(obj,{
      set (target,props,value){
         Reflect.set(target,props,value)
      }
   })
```
## 应用 观察者模式