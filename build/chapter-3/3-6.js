"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 可变元组标签
const [name, age, addr, ...rest] = ['张三', 18, "黄河路", 1, 2, 3];
console.log('name', name, 'age', age, 'addr', addr, 'rest', rest);
