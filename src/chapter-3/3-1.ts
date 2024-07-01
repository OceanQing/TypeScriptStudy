type Obj = { name: string, age: number, phone: string }

function info(obj: Obj) {
  console.log("name", obj.name, "age", obj.age)
}
const obj: Obj = { name: '张三', age: 55, phone: "151" }

info(obj)

// 函数解构

function subInfo({ name, age }: Obj) {
  console.log("name", name, "age", age)
}

subInfo(obj)

export { }