// 枚举既是数据类型，又是变量。
// 数字枚举 
enum Week {
  Monday = -1, //第一项设置常量值，后面几项会默认递增
  TuesDay,
  WensDay,
  ThursDay,
  FriDay,
  SaturDay,
  Sunday
}
// 双向映射
// const Week = {
//   Monday: -1,
//   TuesDay: 0,
//   WensDay: 1,
//   ThursDay: 2,
//   FriDay: 3,
//   SaturDay: 4,
//   Sunday: 5,
//   "-1": "Monday",
//   0: "TuesDay",
//   1: "WensDay",
//   2: "ThursDay",
//   3: "FriDay",
//   4: "SaturDay",
//   5: "Sunday",
// }

console.log(Week.Monday)
console.log(Week[-1])


// 字符串枚举 
enum WeekStr {
  Monday = "周一",
  TuesDay = "周二",
  WensDay = "周三",
  ThursDay = "周四",
  FriDay = "周五",
  SaturDay = "周六",
  Sunday = "周日"
}

WeekStr.Monday // 周一
// WeekStr["周一"]  报错

// 单向映射
// const WeekStr = {
//   Monday: "周一",
//   TuesDay: "周二",
//   WensDay: "周三",
//   ThursDay: "周四",
//   FriDay: "周五",
//   SaturDay: "周六",
//   Sunday: "周日"
// }

// 【面试题】枚举的底层逻辑？

export { }