import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Center from '@/views/Center'
import Cinema from '@/views/Cinema'
import Nowplaying from '@/views/film/nowplaying'
import Comingsoon from '@/views/film/comingsoon'

Vue.use(VueRouter) // 注册路由模块

const routes = [
  {
    path: '/film',
    component: Film,
    // 嵌套路由
    children: [
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '/film',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '*',
    redirect: '/film'
  }
] // 路由配置表

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
