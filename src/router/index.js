import Vue from 'vue'
import Router from 'vue-router'
/* layout */
// import Layout from '@/components/layout/Layout'
Vue.use(Router)

/**
* icon : 对应的sidebar icon图标
* hidden : 如果 `hidden:true` 将不显示在siderbar中
* redirect : 重定向
* noDropdown : 如果 `noDropdown:true` 将没有子菜单
**/
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/components/home.vue'),
    name: '登陆',
    noDropdown: true,
    hidden: true,
    meta: {
      title: '登录'
    }
  },
  {
    path: '*',
    redirect: '/404',
    // component: () => import('@/components/platform/approval-flow/table-manage/table-show'),
    name: '404',
    noDropdown: true,
    hidden: true
  }
]
