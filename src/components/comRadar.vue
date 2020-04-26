<template>
  <div class="fd-content-left-content fd-row ">
    <div class="fd-item" ref="radar"></div>
  </div>
</template>
<script>
import chartsFun from '@/assets/js/chartsFun.js'
export default {
  props: ['datas'],
  data () {
    return {
    }
  },
  watch: {
    datas: {
      handler (n, o) {
        if (n) {
          this.$nextTick(() => {
            setTimeout(() => {
              this.initChart(n)
            }, 10)
          })
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    initChart (jsonData) {
      this.radar = this.$echarts.init(this.$refs.radar)
      this.radar.setOption(chartsFun.radarCustom(jsonData))
      this.radar.on('click', (params) => {
        this.$emit('chartClick', params)
      })
      // echarts自适应
      this.$(window).resize(() => {
        this.radar.resize()
      })
    }
  },
  beforeDestroy () {
    if (this.radar) {
      this.radar.dispose()
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
.fd-item >>> canvas {
  cursor: default;
}
</style>
