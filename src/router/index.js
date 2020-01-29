import Vue from 'vue'
import Router from 'vue-router'
/* layout */
// import Layout from '@/components/layout/Layout'
// import Home from '@/components/home.vue'
Vue.use(Router)

/**
* icon : 对应的sidebar icon图标
* hidden : 如果 `hidden:true` 将不显示在siderbar中
* redirect : 重定向
* noDropdown : 如果 `noDropdown:true` 将没有子菜单
**/
export const constantRouterMap = [
  {
    path: '/index',
    component: () => import("@/components/home"),
    name: 'home',
    noDropdown: true,
    hidden: false,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    // redirect: '/index',
    component: () => import("@/components/home"),
    name: 'home',
    noDropdown: true,
    hidden: false,
    meta: {
      title: '首页'
    }
  },
  {
    path: '*',
    redirect: '/404',
    component: () => import("@/components/home"),
    name: '404',
    noDropdown: true,
    hidden: false,
    meta: {
      title: 'error'
    }
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
