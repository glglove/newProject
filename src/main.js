import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index.js' // vue-router 路由
import store from './store/index.js' // vuex状态管理
import './icons/index.js' // 字体图标
// import './permission.js' // 权限

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$bus = new Vue()
new Vue({
  // el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App },
  render: h => h(App)
}).$mount("#app")
