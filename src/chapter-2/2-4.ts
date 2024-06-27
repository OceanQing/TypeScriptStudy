interface Student {
  name: String;
  age: number;
}

// 类型注解
let data: number = 1;

let student: Student = {
  name: "张三",
  age: 18,
};

// 类型推导
let money = 30;
let student2 = {
  name: '张三',
  age: 18
}

// 类型推导和类型注解的区别？类型注解定义时刻就固化，类型推导定义时刻可以随便赋值
export { };
