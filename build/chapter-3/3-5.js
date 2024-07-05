"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 元组
const arr1 = [1, '2', '3', 4, 5];
// 可变元组
const arr2 = [1, '2', '3', '4', '5', 6];
// arr2[3] = 4 不报错
const info = ["张三", 18, "桓公铺路", 1, 2, 3];
// 可变元组结构
const [name, age, addr, ...rest] = ["张三", 18, "桓公铺路", 1, 2, 3];
console.log("rest", rest);
