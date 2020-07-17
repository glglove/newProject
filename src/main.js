import 'babel-polyfill'
import Vue from 'vue'
import ElementUI, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index.js' // vue-router 路由
import store from './store/index.js' // vuex状态管理
import 'lib-flexible'  // 移动端适配  不同的手机设备尺寸，控制 html 标签 font-size 的变化。
// import { setRemFn } from './rem.js'
// setRemFn()
import {publicObj} from './utils/public.js' // 公用方法
import './icons/index.js' // svg 
// import './permission.js' // 权限

// import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// Vue.use(VueQuillEditor)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$bus = new Vue()

Vue.prototype.$hasLogin = publicObj.hasLogin
Vue.prototype.$checkNetWork_mobile = publicObj._checkNetWork_mobile

console.log("----",publicObj)

const scrollBehavior = function (to, from, savedPosition) {
  debugger
  if(savedPosition){
    return savedPosition
  }else {
    return to.meta
    // return {
    //   x:0,
    //   y:0
    // }
  }
}

new Vue({
  // el: '#app',
  router,
  store,
  scrollBehavior,
  linkExactActiveClass: 'current',
  data(){
    return {
      timerId: ''
    }
  },
  mounted() {
    // 监测网络(pc端)
    window.addEventListener('online',  this.updateOnlineStatus)
    window.addEventListener('offline', this.updateOnlineStatus)
    // window.addEventListener('scroll', this.justifyPos)
    setTimeout(() => {
      // var appWrapper = document.getElementsByClassName("app-wrapper")[0]
      // var appWrapper = document.getElementById("app")
      // console.log(appWrapper)
      // console.log(appWrapper.offset().top)
      // appWrapper.addEventListener('scroll', this.justifyPos,false)
      document.getElementById("app").addEventListener('scroll', this.justifyPos,false)
      // document.getElementById("app").addEventListener('resize', this.resizeScreen,false)
    },1000)
  },
  destroyed () {
    // 当组件销毁的时候，移除滚动行为监听, 清空定时器；
    // 该方法是绑定到 window 身上，即使跳转到其他组件，仍然会监听页面的滚动行为
    // window.removeEventListener('scroll', this.justifyPos)
    clearTimeout(this.timerId)
    // document.getElementById("app").removeEventListener("resize")
  },  
  methods: {
    resizeScreen () {
      // location.reload()
    },
    justifyPos () {
      console.log(window.scrollY)
      console.log(document.getElementById("app").scrollTop)
      // document.getElementById("app").scrollTop = 0
      console.log(window)
      // console.log(document.getElementsByClassName("app-wrapper")[0].scrollTop)
      if (this.timerId) clearTimeout(this.timerId)
      this.timerId = setTimeout(() => {
        // this.$route.meta.y = window.scrollY
        // this.$route.meta.y = document.getElementsByClassName("app-wrapper")[0].scrollTop
        // this.$route.meta.y = window.pageYOffset
        this.$route.meta.y = document.getElementById("app").scrollTop
        // this.$route.meta.y = 0
        console.log(this.$route.meta)
      }, 300)
    },
    // 网络变化
    updateOnlineStatus(e){
      const { type } = e;  // type 有两个值：offline 和 online
      console.log("----网络状态---", type) 
      if(type === 'offline'){
        // 离线
        Message.warning("网络走神了，请检查网络")
      }else if(type === 'online'){
        // 在线
        Message.success("网络恢复正常")
      }
      // 将网络状态存在全局中
      store.dispatch("netWorkChangeStatus", type)
    }   
  },
  // template: '<App/>',
  // components: { App },
  render: h => h(App)
}).$mount("#app")



