import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistense from 'vuex-persistedstate' // vuex 数据持久化，防止刷新后vuex中数据消失
import app from './modules/app'
import user from './modules/user'
import pa from './modules/pa'
import permission from './modules/permission'
import salary from './modules/salary'
import directive from './modules/directive'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistense({
  storage: localStorage,
  reducer: val => {
    return {
      //引入directice模板，对象里面可配置需要持久化的status
      directive: {
        isPublic: val.directive.isPublic,
        tableCodeCustomer: val.directive.tableCodeCustomer,
        flowRuleScanFlag: val.directive.flowRuleScanFlag,
        currentTabStr: val.directive.currentTabStr
      },
      app: {
        activeIndex: val.app.activeIndex
      }
    }
  }
})

const store = new Vuex.Store({
  modules: {
    app,
    user,
    pa,
    permission,
    salary,
    directive
  },
  getters,
  // strict: debug,  // 加了严格模式动态挂载路由会报错，但不影响功能
  plugins: debug ? [createLogger(), vuexLocal] : [vuexLocal]
})

export default store
