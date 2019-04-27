// 给action注册事件处理函数，当中函数被触发的时候，将状态提交到mutations中处理
export function modifyAName({commit},name){
  // commit 提交，name即为点击后传递过来的参数
  return commit('modifyAName',name)
}

export function modifyBName({commit},name){
  return commit("modifyBName",name)
}

// export const modifyAName = ({commit},name) => commit("modifyAName",name)

