import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// 公共框架部分
const Default = () => import('@/components/layout/Default.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Default,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
