// people类
// 静态特征 [属性] name age address
// 动态特征 [方法] doEat doStep

// 在类中定义属性，需要给它赋值。
class People {
  name: string;
  age: number;
  address: string;
  static count: number=0;
  constructor(_name: string, _age: number, _address: string) {
    this.name = _name
    this.age = _age
    this.address = _address
    People.count++
  }
  doEat() {
    console.log("吃吃吃")
  }
  doStep() {
    console.log("走走走")
  }
}
// 不想赋值

class People2 {
  name?: string;
  age?: number;
  address?: string;
}
class People3 {
  name!: string;
  age!: number;
  address!: string;
}

const people = new People("张三", 18, "地址")

// 配置项target 决定编译成哪一种写法 

export {}