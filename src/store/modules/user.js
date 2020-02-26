import * as types from '../mutation-types'

const user = {
  state: {
    isLogin: true, 
    token: '7788888',
    userInfo: {
        avator: '',
        name: '',
        sex: '',
        address: "",
    }
  },
  mutations: {
    [types.LOGIN](state, token){
        state.state = token
        state.isLogin = true
    }
  },
  actions: {
    login({commit, state}, token){
        commit(types.LOGIN, token)
    } 
  }
}

export default user
