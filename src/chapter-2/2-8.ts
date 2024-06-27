// never 什么都没有的数据类型
// 【面试题】什么场景never能被直接推导出来而不用定义？
type DataFlow = string | number
function dataFlowAnalysisWithNever(dataFlow: DataFlow) {
  if (typeof dataFlow === "string") {
    // 范围缩小
    console.log("字符串类型：", dataFlow.length)
  } else if (typeof dataFlow === "number") {
    console.log("数字类型", dataFlow.toFixed(3))
  } else {
    // data 被推导出是never类型
    let data = dataFlow
  }
}
dataFlowAnalysisWithNever("免税店")
dataFlowAnalysisWithNever(3.1415926)
// dataFlowAnalysisWithNever(true) 报错