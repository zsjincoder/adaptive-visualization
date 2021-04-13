<template>
    <VueEcharts :option="option" :ei.sync="ei"/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ECharts } from 'echarts'
@Component
export default class DashboardA extends Vue {
  protected name = DashboardA
  private option = {
    tooltip: {
      formatter: (params:any) => {
        return `${params.data.name}-${params.data.value}`
      }
    },
    series: [
      {
        type: 'gauge',
        radius: '90%',
        axisLine: {
          lineStyle: {
            width: 14,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
          width: 5,
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: -14,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -14,
          length: 12,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        axisLabel: {
          color: 'auto',
          distance: 20,
          fontSize: 13
        },
        detail: {
          show: true,
          valueAnimation: true,
          formatter: '{value}%',
          color: 'auto',
          fontSize: 16,
          offsetCenter: [0, '75%']
        },
        title: {
          show: false
        },
        data: [
          {
            value: 20,
            name: 'Good',
            detail: {
              offsetCenter: ['-60%', '95%']
            }
          },
          {
            value: 40,
            name: 'Better',
            detail: {
              offsetCenter: ['0%', '95%']
            }
          },
          {
            value: 80,
            name: 'Perfect',
            detail: {
              offsetCenter: ['60%', '95%']
            }
          }
        ]
      }
    ]
  }

  private ei: any | ECharts= {}
}

</script>
<style scoped
       lang="less">
</style>
