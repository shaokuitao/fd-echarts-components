/*
 * @Descripttion:
 * @version:
 * @Author: shaokuitao <76320025@qq.com>
 * @Date: 2020-04-26 16:18:21
 * @LastEditors: shaokuitao
 * @LastEditTime: 2020-04-26 16:18:42
 */
// src/components/index.js

import Vue from 'vue'
import comPie from './comPie.vue'

const Components = {
  comPie
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
