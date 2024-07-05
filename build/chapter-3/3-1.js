"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function info(obj) {
    console.log("name", obj.name, "age", obj.age);
}
const obj = { name: '张三', age: 55, phone: "151" };
info(obj);
// 函数解构
function subInfo({ name, age }) {
    console.log("name", name, "age", age);
}
subInfo(obj);
