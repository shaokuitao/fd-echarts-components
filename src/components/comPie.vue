<!--
 * @Author: your name
 * @Date: 2020-04-16 13:13:11
 * @LastEditTime: 2020-04-26 16:07:20
 * @LastEditors: shaokuitao
 * @Description: In User Settings Edit
 * @FilePath: \display_msg\src\components\publicComponents\comPie.vue
 -->
<template>
  <div class="fd-content-left-content fd-row ">
    <div class="fd-item" ref="pie"></div>
  </div>
</template>
<script>

import echarts from 'echarts'
import chartsFun from '@/assets/js/chartsFun.js'
export default {
  props: ['jsonData', 'type'],
  data () {
    return {
    }
  },
  mounted () {
    // echart 自适应
    window.addEventListener('resize', this.resize, false)
    if (this.jsonData) {
      this.initChart(this.jsonData)
    }
  },
  watch: {
    jsonData: {
      handler (n, o) {
        if (n && n.datas && n.datas.length > 0) {
          setTimeout(() => {
            this.initChart(n)
          }, 0)
        }
      },
      deep: true
    }
  },
  methods: {
    initChart (jsonData) {
      this.pie = echarts.init(this.$refs.pie)
      this.pie.setOption(chartsFun.pieCustom(jsonData))
      this.pie.on('click', (params) => {
        this.$emit('chartClick', params, (this.type || 'J'))
      })
    },
    resize () {
      console.log(123)
      if (this.pie) {
        this.pie.resize()
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize, false)
    if (this.pie) {
      this.pie.dispose()
    }
  }

}
</script>
<style scoped>
.fd-content-left-content {
  height: 100%;
  width: 100%;
}
.fd-item {
  width: 100%;
  height: 100%;
}
</style>
