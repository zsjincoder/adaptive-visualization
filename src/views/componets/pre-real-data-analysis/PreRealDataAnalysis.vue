<template>
  <base-container title='预实数据分析'>
    <div class="echarts-box">
      <div class="echarts-box-top box-clear">
        <div class="echarts-item box-l">
          <DashboardA/>
        </div>
        <div class="echarts-item box-l">
          <DashboardB/>
        </div>
        <div class="echarts-item box-l">
          <DashboardC/>
        </div>
      </div>
      <div class="echarts-box-bottom">
        <DashboardD/>
      </div>
    </div>
  </base-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DashboardA from '@/views/componets/pre-real-data-analysis/DashboardA.vue'
import DashboardD from '@/views/componets/pre-real-data-analysis/DashboardD.vue'
import DashboardB from '@/views/componets/pre-real-data-analysis/DashboardB.vue'
import DashboardC from '@/views/componets/pre-real-data-analysis/DashboardC.vue'

@Component({
  components: { DashboardD, DashboardA, DashboardB, DashboardC }
})
export default class PreRealDataAnalysis extends Vue {
  protected name = 'PreRealDataAnalysis'
}
</script>

<style scoped
       lang="less">
.echarts-box{
  width: 100%;
  height: 100%;
}
.echarts-box-top{
  width: 100%;
  height: 45%;
  .echarts-item{
    width: 33.33%;
    height: 100%;
  }
}
.echarts-box-bottom{
  width: 100%;
  height: 50%;
}
</style>
