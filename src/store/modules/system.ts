type State = {[key in string]: any}

export default {
  state: {
    // 模型类型 0:酒店 1：办公楼
    modeType: 0
  },
  getters: {
    getModeType (state:State) {
      return state.modeType
    }
  },
  mutations: {
    setModeType (state:State, data:number) {
      state.modeType = data
    }
  }
}
