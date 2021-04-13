<template>
  <VueEcharts :option="options" :ei.sync="ei"/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ECharts } from 'echarts'
const colors = ['#f39f9f', '#66eea1']

@Component
export default class DashboardD extends Vue {
  protected name = DashboardD
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
      show: false
    },
    grid: {
      top: 50,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: false
        },
        data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
        splitLine: {
          show: false
        },

        axisLine: {
          lineStyle: {
            color: '#a3cbea'
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
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#a3cbea'
          }
        }
      }
    ],
    series: [
      {
        name: '酒店',
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
        name: '办公楼',
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
      }
    ]
  }

  private ei: any | ECharts = {};
}

</script>
<style scoped
       lang="less">
</style>
