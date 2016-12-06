// 路由初始化
import Vue from 'vue'
import VueRouter from 'vue-router'

import routesMap from './map/' // 路由映射
Vue.use(VueRouter)

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: routesMap
})

// 中间件

export default router
