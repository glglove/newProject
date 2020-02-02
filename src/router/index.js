import Vue from 'vue'
import Router from 'vue-router'
/* layout */
import Layout from '@/components/common/Layout'
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
    path: '/',
    component: Layout,
    name: '',
    redirect: '/index',
    noDropdown: true,
    hidden: false,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'index',
        component: () => import("@/components/home"),
        name: "首页-首页",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '首页-首页'
        }
      },      
      {
        path: 'login',
        component: () => import("@/components/login"),
        name: "首页-登陆",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '首页-登陆'
        }
      },   
      {
        path: 'register',
        component: () => import("@/components/register"),
        name: "首页-注册",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '首页-注册'
        }
      },    
      {
        path: 'forgetPassWord',
        component: () => import("@/components/forgetPassWord"),
        name: "首页-忘记密码",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '首页-忘记密码'
        }
      },            
    ]
  },
  {
    path: '*',
    component: () => import("@/components/404"),
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
