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
      title: '首页',
      x: 0,
      y: 0
    },
    children: [
      {
        path: 'index',
        component: () => import("@/components/home"),
        name: "首页-首页",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '首页-首页',
          x: 0,
          y: 0          
        }
      },   
      {
        path: 'projectList',
        component: () => import("@/components/projectList"),
        name: "项目市场",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '项目市场',
          x: 0,
          y: 0          
        }
      },       
      {
        path: 'selectDemandTypes',
        component: () => import("@/components/selectDemandTypes"),
        name: "需求分类",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '需求类型',
          x: 0,
          y: 0          
        }
      },          
      {
        path: 'releaseDemand',
        component: () => import("@/components/releaseDemand"),
        name: "发布需求",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '发布需求',
          x: 0,
          y: 0          
        }
      },
      {
        path: 'projectDetail',
        component: () => import("@/components/projectDetail"),
        name: "项目详情页",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '项目详情页面',
          x: 0,
          y: 0          
        }
      },             
      {
        path: 'login',
        component: () => import("@/components/login"),
        name: "首页-登陆",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '首页-登陆',
          x: 0,
          y: 0          
        }
      },   
      {
        path: 'register',
        component: () => import("@/components/register"),
        name: "首页-注册",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '首页-注册',
          x: 0,
          y: 0          
        }
      },    
      {
        path: 'forgetPassWord',
        component: () => import("@/components/forgetPassWord"),
        name: "首页-忘记密码",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '首页-忘记密码',
          x: 0,
          y: 0          
        }
      },    
      {
        path: 'personalCenter',
        component: () => import("@/components/personalCenter/personalCenter"),
        redirect: '/personalCenter/myProject',
        name: "首页-个人中心",
        noDropdown: true,
        hidden: false,
        meta: {
          title: '首页-个人中心',
          x: 0,
          y: 0          
        },
        children: [
          {
            path: 'myProject',
            component: () => import("@/components/personalCenter/myProject"),
            name: '个人中心——我的项目',
            noDropdown: true,
            hidden: false,
            meta: {
              title: '个人中心——我的项目',
              x: 0,
              y: 0
            }
          },
          {
            path: 'myRelease',
            component: () => import("@/components/personalCenter/myRelease"),
            name: '个人中心——我的发布',
            noDropdown: true,
            hidden: false,
            meta: {
              title: '个人中心——我的发布',
              x: 0,
              y: 0
            }
          },
          {
            path: 'searchProject',
            component: () => import("@/components/personalCenter/searchProject"),
            name: '个人中心——匹配项目',
            noDropdown: true,
            hidden: false,
            meta: {
              title: '个人中心——匹配项目',
              x: 0,
              y: 0
            }
          },
          {
            path: 'turnVip',
            component: () => import("@/components/personalCenter/turnVip"),
            name: '个人中心——成为vip',
            noDropdown: true,
            hidden: false,
            meta: {
              title: '个人中心——成为vip',
              x: 0,
              y: 0
            }
          },    
          {
            path: 'pay',
            component: () => import("@/components/personalCenter/pay"),
            name: '个人中心——支付',
            noDropdown: true,
            hidden: false,
            meta: {
              title: '个人中心——支付',
              x: 0,
              y: 0
            }
          },                                     
        ]
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
      title: 'error',
      x: 0,
      y: 0      
    }
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
