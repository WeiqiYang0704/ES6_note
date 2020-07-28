// const obj={
//     a:1,
//     get name(){
//         return 'ywq'
//     }
// }
// Object.defineProperty(obj,"a",{
//         writable:false
// })
const obj={
    a:1,
    b:2
}
//proxy 第二个参数 里 是reflect 里的===  不太会表达
/*
  let a=2;
  if(a==3&&a==4){
      ...
  }
*/
let a=1;
const proxy=new Proxy(obj,{
    get (target,props,value){
      //  console.log(11)
        if(a==1){
            console.log(target,props)
            Reflect.set(target,props,3);
            a++;
            return Reflect.get(target,props)
           
        }else {
            Reflect.set(target,props,4)
            return Reflect.get(target,props)
        }
     
    }
})
    if(proxy.a==3&&proxy.a==4){
        alert(2)
    }
//console.log(proxy.a)
//结果 是 观察者，和被观察者 都会被更改
