// 元组
const arr1: [number, string, string, number, number] = [1, '2', '3', 4, 5]

// 可变元组
const arr2: [number, string, string, ...any[]] = [1, '2', '3', '4', '5', 6]

// arr2[3] = 4 不报错

const info: [string, number, string, ...any[]] = ["张三", 18, "桓公铺路", 1, 2, 3]
// 可变元组结构
const [name, age, addr, ...rest] = ["张三", 18, "桓公铺路", 1, 2, 3]
console.log("rest", rest)
export { }