// 提交 mutations是更改vuex状态的唯一合法方法
export const modifyAName = (state,name) => {
  // A组件点击更改餐厅名称为 A餐厅
  state.resturantName = name  
}

export const modifyBName = (state,name) => {
  // A组件点击更改餐厅名称为 A餐厅
  state.resturantName = name  
}