// 根类型
// 除了null、undefined不能赋值给根类型，其他类型的值都能赋值给根类型,根类型简写{}
let data: Object = 123
let data2: {} = 'abc'

// 联合类型
let str: number | string = "abc"
str = 123
// 联合类型在给定具体的值以后，就会被确定成值得类型
console.log(str)

// 交叉类型
// type 定义数据类型
type Obj1 = { username: string }
type Obj2 = { age: number }
let obj1: { username: string } = { username: 'abc' }
let obj2: { age: number } = { age: 18 }

let obj3: Obj1 & Obj2 = { username: "李斯", age: 17 }

// 交叉类型是有条件的，string和number是无法交叉的
// let str2: string: number = 3

// 字面量数据类型

let a: 1 | 2 = 1
// a = 3 报错 只能给1和2，在范围之外的就会报错

function isStartUp(increase: 0 | 1) {
  if (increase) {
    console.log("open")
  } else {
    console.log("close")
  }
}

// isStartUp(2) 报错

