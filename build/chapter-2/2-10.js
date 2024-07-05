"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 枚举既是数据类型，又是变量。
// 数字枚举 
var Week;
(function (Week) {
    Week[Week["Monday"] = -1] = "Monday";
    Week[Week["TuesDay"] = 0] = "TuesDay";
    Week[Week["WensDay"] = 1] = "WensDay";
    Week[Week["ThursDay"] = 2] = "ThursDay";
    Week[Week["FriDay"] = 3] = "FriDay";
    Week[Week["SaturDay"] = 4] = "SaturDay";
    Week[Week["Sunday"] = 5] = "Sunday";
})(Week || (Week = {}));
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
console.log(Week.Monday);
console.log(Week[-1]);
// 字符串枚举 
var WeekStr;
(function (WeekStr) {
    WeekStr["Monday"] = "\u5468\u4E00";
    WeekStr["TuesDay"] = "\u5468\u4E8C";
    WeekStr["WensDay"] = "\u5468\u4E09";
    WeekStr["ThursDay"] = "\u5468\u56DB";
    WeekStr["FriDay"] = "\u5468\u4E94";
    WeekStr["SaturDay"] = "\u5468\u516D";
    WeekStr["Sunday"] = "\u5468\u65E5";
})(WeekStr || (WeekStr = {}));
WeekStr.Monday; // 周一
