<template>
    <VueEcharts :option="option" :ei.sync="ei"/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ECharts } from 'echarts'
@Component
export default class DashboardC extends Vue {
  protected name = DashboardC
  private option = {
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
          valueAnimation: true,
          formatter: '理论值：{value}%',
          color: 'auto',
          fontSize: 16,
          offsetCenter: [0, '95%']
        },
        data: [
          {
            value: 70
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
