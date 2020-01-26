import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// import router from './router' // vue-router 路由
import store from './store' // vuex状态管理
import './icons' // 字体图标
import './permission' // 权限

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  el: '#app',
  // router,
  store,
  render: h => h(App)
})
