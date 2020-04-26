<!--
 * @Descripttion:
 * @version:
 * @Author: shaokuitao
 * @Date: 2020-04-26 15:02:47
 * @LastEditors: shaokuitao
 * @LastEditTime: 2020-04-26 17:33:41
 -->
<template>
  <div class="fd-demo">
    <div class="fd-item">
      <com-pie :jsonData="jsonData" v-if="jsonData"></com-pie>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  components: {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      jsonData: {
        titleFormatter: [
          '{a|纠正违法案件}',
          '{b|总计：}{number| 1000 件}',
          '{b|同比：}{number| 98.00%}{up| ↑}'
        ],
        itemFormat: function (params) {
          return (
            params.marker +
            params.name +
            ':' + (params.data.value || '0') + '件<br/>同比：98.00% <span style="color: red">↑</span>}'
          )
        },
        colors: [],
        datas: [{
          name: 'test1',
          value: '111'
        }, {
          name: 'test2',
          value: '222'
        }, {
          name: 'test3',
          value: '333'
        }, {
          name: 'test4',
          value: '444'
        }],
        legendTop: '80%',
        legendLeft: 'center',
        radius: [70, 90],
        center: ['50%', '50%'],
        orient: 'horizontal',
        defaultSelected: 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fd-demo {
  width: 100%;
  height: 100%;
}
.fd-item {
  width: 33%;
  height: 400px;
  margin: auto;
}
</style>
