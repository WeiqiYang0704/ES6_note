class  Test{
    //存取器 属性
    get name(){
        return this.ywqName
    }
    set name(val){
        this.ywqName=val
    }
    ywqName='ywq'
    age=18;
    //原型上的方法
    getData(){
        console.log("function")
    }
    getDataInClass=()=>{
        console.log(this.name)
    }
    static  getStaticFn(){
        
    }
}
const  test=new Test();
console.log(test)