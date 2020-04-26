/*
 * @Descripttion:
 * @version:
 * @Author: shaokuitao <76320025@qq.com>
 * @Date: 2020-04-26 17:27:05
 * @LastEditors: shaokuitao
 * @LastEditTime: 2020-04-26 17:32:44
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demo',
    component: () => import('@/views/Demo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
