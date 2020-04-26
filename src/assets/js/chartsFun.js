/*
 * @Descripttion:
 * @version:
 * @Author: shaokuitao
 * @Date: 2020-04-26 15:30:11
 * @LastEditors: shaokuitao
 * @LastEditTime: 2020-04-26 17:34:59
 */
import echarts from 'echarts'
const ynameColor = '#4c758a'
const gridn = {
  left: '30',
  right: '30',
  bottom: '20',
  top: '50',
  containLabel: true
}
const chartsFun = {
  // lxx 案件折线图
  lineTrend2: function (trendJson, unit, flagSD) {
    let name = ''
    if (trendJson.name) {
      name = trendJson.name
    }
    let grid = gridn
    if (trendJson.grid) {
      grid = trendJson.grid
    }
    const unit2 = trendJson.unit || '件'
    const option = {
      tooltip: {
        trigger: 'axis',
        // position: function (p) { // 其中p为当前鼠标的位置
        //   return [p[0] + 20, p[1] - 10];
        // },
        axisPointer: {
          lineStyle: {
            type: 'solid'
          }
        },
        textStyle: {
          align: 'left'
        },
        confine: true,
        borderRadius: 6,
        formatter: function (params) {
          if (params.length > 0) {
            const arrs = [params[0].name]
            params.map(item => {
              arrs.push(item.marker + item.seriesName + '：' + item.value + unit2)
            })
            return arrs.join('<br/>')
          } else {
            return ''
          }
          // return params[0].name + '：<br/>' + params[0].marker + params[0].seriesName + ':' + params[0].value + unit2 + '<br/>' + params[1].marker + params[1].seriesName + ':' + params[1].value + unit2 + '<br/>' + params[2].marker + params[2].seriesName + ':' + params[2].value + unit2 + '<br/>'
        }
      },
      legend: {
        show: trendJson.legendShow,
        rient: 'horizontal',
        top: '10',
        align: 'left',
        icon: 'circle',
        itemWidth: 7,
        itemHeight: 7,
        itemGap: 20,
        textStyle: {
          color: '#adcbdc',
          fontSize: 16
        },
        right: trendJson.legendRight || 'auto',
        data: trendJson.legendData
      },
      grid: grid,
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          show: true,
          // interval: 0,
          textStyle: {
            fontSize: '12',
            color: trendJson.xAxisColor.textColor
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: trendJson.xAxisColor.xAxisLineColor,
            type: 'dotted'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: trendJson.xAxisColor.lineColor,
            type: 'solid'
          }
        },
        data: trendJson.xAxis
      }],
      yAxis: [{
        name: name,
        nameTextStyle: {
          fontSize: 16,
          color: ynameColor // trendJson.yAxisColor.textColor
        },
        type: 'value',
        axisLine: {
          show: false
        },
        splitNumber: 5,
        splitLine: {
          show: true,
          lineStyle: {
            color: trendJson.yAxisColor.lineColor,
            type: 'dotted'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: '12',
            color: trendJson.yAxisColor.textColor
          }
        }

      }],
      series: trendJson.seriesData
    }
    return option
  },
  lineCustom: function (jsonData) {
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#b1d6f6',
            type: 'dashed'
          }
        },
        formatter: `{b}：{c}${jsonData.unit ? jsonData.unit : '件'}`,
        appendToBody: true
      },
      color: ['#26c6da'],
      xAxis: {
        boundaryGap: false,
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#54a1f8'
          }
        },
        axisTick: {
          show: false
        },
        data: jsonData.xAxis
      },
      yAxis: {
        name: '单位：' + `${jsonData.yName ? jsonData.yName : '件'}`,
        nameTextStyle: {
          fontSize: 14
        },
        splitLine: {
          lineStyle: {
            color: '#cbd3d9',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        type: 'value'
      },
      series: [{
        data: jsonData.datas,
        type: 'line',
        smooth: true,
        areaStyle: {
          normal: { // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#248be6' // 0% 处的颜色
            }, {
              offset: 0.5,
              color: '#8cc3f2' // 100% 处的颜色
            }, {
              offset: 1,
              color: '#eff8fe' // 100% 处的颜色
            }]), // 背景渐变色
            lineStyle: { // 系列级个性化折线样式
              width: 3,
              type: 'solid',
              color: '#3399ff'
            }
          }
        }
      }]
    }
    // console.log(JSON.stringify(option))
    return option
  },
  pieCustom: function (jsonData) {
    const colors = ['#26c6da', '#1e88e5', '#9785f1', '#ff6182', '#ffd36b', '#70d4a9', '#7eb5ff', '#f85fbd', '#9c67fd', '#92d542', '#ffd861', '#e33a3a', '#3c64f9', '#ab82ff', '#f38bff', '#65fec2', '#87d0ff', '#c6835f', '#b1b257', '#feffb6']
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: jsonData.itemFormat ? jsonData.itemFormat : `{b}：{c}${jsonData.unit ? jsonData.unit : '件'}`,
        appendToBody: true,
        confine: true,
        rich: {
          a: {
            color: '#1e88e5',
            fontSize: 18,
            fontWeight: 'bold'
          },
          b: {
            color: '#4f3f36',
            fontSize: 16,
            padding: [4, 0]
          },
          number: {
            fontSize: 16,
            padding: [4, 0],
            color: '#ffcc66'
          },
          percent: {
            color: '#ffcc66',
            fontSize: 16,
            padding: [4, 0]
          },
          up: {
            fontSize: 16,
            padding: [4, 0],
            color: 'red'
          },
          down: {
            fontSize: 16,
            padding: [4, 0],
            borderColor: 'green'
          }
        }
      },
      // title: {
      //   show: true,
      //   text: jsonData.title || '',
      //   textStyle: {
      //     fontSize: 14,
      //   },
      //   left: jsonData.titleLeft || 'center',
      //   top: jsonData.titleTop || ((jsonData.title && jsonData.title.indexOf('\n') > 0) ? '33%' : '36%')
      // },
      legend: {
        show: true,
        textStyle: {
          fontSize: 14
        },
        itemGap: 10,
        itemWidth: 5,
        padding: 5,
        selectedMode: true,
        orient: jsonData.orient || 'vertical',
        top: jsonData.legendTop || '70%',
        icon: 'circle',
        left: jsonData.legendLeft || 'center',
        data: jsonData.legend || jsonData.datas
      },
      series: [{
        name: '',
        type: 'pie',
        radius: jsonData.radius || [50, 70],
        center: jsonData.center || ['50%', '40%'],
        label: {
          normal: {
            color: '#333',
            fontSize: 15,
            show: jsonData.showLine || false
          }
        },
        itemStyle: {
          normal: {
            color: function (params) {
              // if (jsonData && jsonData.colors.length > 0) {
              //   return jsonData.colors[params.dataIndex]
              // } else {
              return colors[params.dataIndex]
              // }
            }
          }
        },
        data: jsonData.datas
      }]
    }
    if (jsonData.formatterLabel) {
      option.series[0].label.normal.formatter = jsonData.formatterLabel
    }
    if (jsonData.titleFormatter) {
      option.series.push({
        tooltip: {
          show: false
        },
        selectedMode: false,
        cursor: 'default',
        name: '',
        type: 'pie',
        hoverAnimation: false,
        radius: jsonData.radius ? [jsonData.radius[0], jsonData.radius[0]] : [50, 50],
        center: jsonData.center || ['50%', '40%'],
        label: {
          normal: {
            selectedMode: false,
            cursor: 'default',
            show: true,
            position: 'center',
            formatter: '{p| }' + jsonData.titleFormatter.join('\n'), // rich 里是文本片段的样式设置：
            rich: {
              p: {
                padding: [4, 0, 20, 0]
              },
              a: {
                color: '#1e88e5',
                fontSize: 18,
                padding: [4, 0, 4, 0],
                fontWeight: 'bold'
              },
              b: {
                color: '#4f3f36',
                fontSize: 16,
                padding: [4, 0]
              },
              number: {
                fontSize: 16,
                padding: [4, 0],
                color: '#ffcc66'
              },
              percent: {
                fontSize: 16,
                padding: [4, 0],
                color: '#ffcc66'
              },
              up: {
                fontSize: 16,
                padding: [4, 0],
                color: 'red'
              },
              down: {
                fontSize: 16,
                borderColor: 'green',
                padding: [4, 0],
                borderRadius: 4
              }
            }
          }
        },
        labelLine: {
          show: false
        },
        data: [{
          value: 0,
          name: ''
        }]
      })
    }
    // console.log(JSON.stringify(option))
    return option
  },
  pieCustom1: function (jsonData) {
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: `{b}：{c}${jsonData.unit ? jsonData : '件'}`,
        appendToBody: true
      },
      // title: {
      //   show: true,
      //   text: jsonData.title,
      //   textStyle: {
      //     fontSize: "14",
      //   },
      //   left: jsonData.titleLeft || 'center',
      //   top: jsonData.titleTop || (jsonData.title.indexOf('\n') > 0 ? '33%' : '36%')
      // },
      legend: {
        show: true,
        textStyle: {
          normal: {
            fontSize: '14px'
          }
        },
        itemGap: 10,
        itemWidth: 5,
        padding: 5,
        selectedMode: true,
        orient: jsonData.orient || 'vertical',
        // top: jsonData.legendTop || '70%',
        icon: 'circle',
        // left: jsonData.legendLeft || 'center',
        data: jsonData.datas,
        formatter: function (data) {
          if (data.length > 8) {
            return data.slice(0, 8) + '\n' + data.slice(8)
          } else {
            return data
          }
        },
        ...jsonData.legend
      },
      series: [{
        name: '1',
        type: 'pie',
        radius: jsonData.radius || [50, 70],
        center: jsonData.center || ['50%', '40%'],
        label: {
          normal: {
            show: jsonData.showLine || false
          }
        },
        // labelLine: {
        //   normal: {
        //     show: false
        //   },
        //   emphasis: {
        //     show: false
        //   }
        // },
        itemStyle: {
          normal: {
            color: function (params) {
              if (jsonData.colors.length > 0) {
                return jsonData.colors[params.dataIndex]
              }
            },
            borderWidth: 1,
            borderColor: '#fff'
          }
        },
        z: 1,
        data: jsonData.datas
      },
      {
        name: '2',
        type: 'pie',
        radius: jsonData.radius || [50, 70],
        center: jsonData.center || ['50%', '40%'],
        label: {
          normal: {
            show: true,
            position: 'center',
            textStyle: {
              fontSize: jsonData.tfontSize,
              color: '#455a64',
              fontWeight: 'bold'
            }
          }
        },
        // labelLine: {
        //   normal: {
        //     show: false
        //   },
        //   emphasis: {
        //     show: false
        //   }
        // },
        color: ['#fff'],
        z: 0,
        data: [{
          value: 100,
          name: jsonData.title
        }]
      }
      ]
    }
    if (jsonData.titleFormatter) {
      option.series.push({
        name: 'titleFormatter',
        type: 'pie',
        radius: jsonData.radius ? [jsonData.radius[0], jsonData.radius[0]] : [50, 50],
        center: jsonData.center || ['50%', '40%'],
        label: {
          normal: {
            show: true,
            position: 'center',
            formatter: jsonData.titleFormatter.join('\n'), // rich 里是文本片段的样式设置：
            rich: {
              a: {
                color: 'blue',
                fontSize: 18,
                fontWeight: 'bold'
              },
              b: {
                color: 'blue',
                fontSize: 16,
                fontWeight: 'bold'
              },
              number: {
                fontSize: 18,
                color: 'blue'
              },
              percent: {
                fontSize: 18,
                color: 'blue'
              },
              up: {
                fontSize: 18,
                color: 'red'
              },
              down: {
                fontSize: 18,
                borderColor: 'green',
                borderRadius: 4
              }
            }
          }
        },
        labelLine: {
          show: false
        },
        data: [{
          value: 100,
          name: ''
        }]
      })
    }
    return option
  },
  barCustom: function (jsonData) {
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: `{b}：{c}${jsonData.unit ? jsonData.unit : '件'}`,
        appendToBody: true,
        confine: true
      },
      color: jsonData.color || ['#26c6da'],
      grid: {
        top: 25,
        bottom: 5,
        left: 50,
        right: 50,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: jsonData.xAxis,
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: '14',
            // color: '#add0ff',
            color: '#99abb4',
            fontFamily: 'Arial'
          }
        }
      },
      yAxis: {
        // name: jsonData.yName || '单位：件',
        splitLine: {
          lineStyle: {
            color: '#cbd3d9',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        type: 'value',
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: '16',
            // color: '#add0ff',
            color: '#99abb4',
            fontFamily: 'Arial'
          }
        }
      },
      series: [{
        data: jsonData.datas,
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            label: {
              show: true, // 开启显示
              formatter: function (params) {
                return `${params.data.value} 件`
              },
              position: 'top', // 在上方显示
              textStyle: { // 数值样式
                fontSize: 14,
                color: '#99abb4'
              }
            }
          }
        }
      }]
    }
    if (jsonData.showAverage) {
      option.series[0].markLine = {
        data: [{
          type: 'average',
          name: '平均值'
        }]
      }
    }
    // console.log(JSON.stringify(option))
    return option
  },
  radarCustom (jsonData) {
    const formatter = []
    jsonData.indicator.map((item, index) => {
      formatter.push(item.name + '：' + jsonData.datas[0].value[index] + `${jsonData.unit ? jsonData.unit : '件'}`)
    })
    const option = {
      tooltip: {
        show: true,
        formatter: function (item) {
          return item.seriesName + '：<br/>' + formatter.join('<br/>')
        },
        confine: true
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: jsonData.nameColor || '#fff',
            backgroundColor: jsonData.nameBgColor || '#50b1fa',
            fontSize: jsonData.nameFontSize || 13,
            borderRadius: 10,
            padding: [5, 5, 5, 5]
          }
        },
        axisLine: {
          show: false
        },
        splitArea: {
          areaStyle: {
            color: jsonData.splitAreaColor || '#fff'
          }
        },
        indicator: jsonData.indicator
      },
      series: [{
        name: jsonData.name || '',
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: jsonData.itemStyleColor || '#b7efdb', // 图表中各个图区域的边框线拐点颜色
            lineStyle: {
              color: jsonData.itemStyleLineStyleColor || '#7be6c9' // 图表中各个图区域的边框线颜色
            },
            areaStyle: {
              type: 'default'
            }
          }
        },
        type: 'radar',
        data: jsonData.datas
      }]
    }
    console.log(JSON.stringify(option))
    return option
  },
  funnelChart (jsonData) {
    const option = {
      color: jsonData.colors,
      grid: {
        top: 20,
        left: '2%',
        right: 20,
        bottom: 30,
        containLabel: true,
        borderWidth: 0.5
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params.marker + params.name + ': ' + params.data.dummyValue + (jsonData.unit ? jsonData.unit : '元')
        }
      },
      series: [{
        name: jsonData.title,
        top: 'center',
        type: 'funnel',
        left: '10%',
        width: '80%',
        height: '90%',
        gap: 6,
        minSize: 150,
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: function (data) {
              return '{a|' + data.name + '}' + '\n' + '{b|' + data.data.dummyValue + (jsonData.unit ? jsonData.unit : '') + '}'
            },
            rich: {
              a: {
                fontSize: 14,
                fontWeight: 'normal',
                padding: [3, 0, 3, 0],
                color: '#fff'
              },
              b: {
                fontSize: 14,
                fontWeight: 'normal',
                padding: [3, 0, 3, 0],
                color: '#fff'
              }
            }
          }

        },
        itemStyle: {
          normal: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        data: jsonData.datas
      }]
    }
    // console.log(JSON.stringify(option))
    return option
  }
}

export default chartsFun
