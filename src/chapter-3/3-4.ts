// const 约束数组无法改变，无法约束数组的元素无法改变
// as const
// 约束数组的每个元素为只读

const arr = [1, 2, 3] as const
// arr[0] = 2 报错


export { }