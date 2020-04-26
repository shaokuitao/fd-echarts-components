<template>
  <div class="fd-content-left-content fd-row ">
    <div class="fd-item" ref="line"></div>
  </div>
</template>
<script>
import chartsFun from '@/assets/js/chartsFun.js'
export default {
  props: ['jsonData'],
  data () {
    return {
    }
  },
  watch: {
    jsonData: {
      handler (n, o) {
        if (n && n.datas.length > 0) {
          setTimeout(() => {
            this.initChart(n)
          }, 0)
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    initChart (jsonData) {
      this.line = this.$echarts.init(this.$refs.line)
      this.line.setOption(chartsFun.lineCustom(jsonData))
      if (jsonData.defaultSelected) {
        this.line.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: jsonData.defaultSelected
        })
        this.line.on('mouseover', (e) => {
          // 当检测到鼠标悬停事件，取消默认选中高亮
          this.line.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: jsonData.defaultSelected
          })
          // 高亮显示悬停的那块
          this.line.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex
          })
          jsonData.defaultSelected = e.dataIndex
        })
        this.line.on('mouseout', (e) => {
          this.line.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: jsonData.defaultSelected
          })
        })
      }

      this.line.on('click', (params) => {
        this.$emit('chartClick', params)
      })
      // echarts自适应
      this.$(window).resize(() => {
        this.line.resize()
      })
    }
  },
  beforeDestroy () {
    if (this.line) {
      this.line.dispose()
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
