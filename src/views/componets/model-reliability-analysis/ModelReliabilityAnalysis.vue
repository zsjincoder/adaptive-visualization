<template>
  <base-container title='模型可靠性分析'>
    <VueEcharts :option="options" :ei.sync="ei"/>
  </base-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ECharts } from 'echarts'

const colors = ['#f39f9f', '#66eea1', '#b54aea']
@Component
export default class ModelReliabilityAnalysis extends Vue {
  protected name = 'ModelReliabilityAnalysis'

  private options = {
    color: colors,

    tooltip: {
      show: true,
      axisPointer: {
        type: 'cross',
        lineStyle: { color: '#C3CBD6' }
      }
    },
    legend: {
      textStyle: {
        color: '#fff',
        fontSize: 14
      }
    },
    grid: {
      top: 70,
      bottom: 50
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
        splitLine: {
          show: false
        },

        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位%',
        position: 'left',
        nameTextStyle: {
          colors: '#fff'
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      }
    ],
    series: [
      {
        name: '数据1',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          normal: {
            color: colors[0],
            lineStyle: {
              width: 1// 设置线条粗细
            }
          }
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
      },
      {
        name: '数据2',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          normal: {
            color: colors[1],
            lineStyle: {
              width: 1// 设置线条粗细
            },
            textStyle: {
              colors: '#aaaaee'
            }
          }
        },
        data: [
          3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
        ]
      },
      {
        name: '数据3',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          normal: {
            color: colors[2],
            lineStyle: {
              width: 1// 设置线条粗细
            },
            textStyle: {
              colors: '#aaaaee'
            }
          }
        },
        data: [
          9, 22, 44, 18, 57, 62, 55, 15, 99, 135, 23, 88
        ]
      }
    ]
  }

  private ei: any | ECharts = {};
}
</script>

<style scoped
       lang="less">

</style>
