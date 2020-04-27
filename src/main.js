/*
 * @Descripttion:
 * @version:
 * @Author: shaokuitao <76320025@qq.com>
 * @Date: 2020-04-26 17:27:05
 * @LastEditors: shaokuitao
 * @LastEditTime: 2020-04-27 11:29:45
 */
import Vue from 'vue'
// 引用我们的自定义组件
import '@/components/index.js'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
