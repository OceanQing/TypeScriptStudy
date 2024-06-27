let str: string = "abc"
// 报错 字符串类型没有forEach方法 对比js，js会推迟到运行期间报错
// str.forEach(item => {})
// 报错 数字类型的值不能赋给字符串类型
// str = 123


let arr: number[] = [3, 4, 5]

arr.forEach(item => {
  console.log(item)
})
 
export { }