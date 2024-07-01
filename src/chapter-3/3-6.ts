// 可变元组标签
const [name, age, addr, ...rest]: [name_: string, age_: number, addr_: string, ...rest_: any[]] = ['张三', 18, "黄河路", 1, 2, 3]
console.log('name', name, 'age', age, 'addr', addr, 'rest', rest)
export { }