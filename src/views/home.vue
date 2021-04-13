<template>
  <div class="intermediate-content">
<!--    <div class="head-line"></div>-->
<!--    <div class="head-line"></div>-->
    <div class="intermediate-content box-clear">
      <!-- 左边  -->
      <div class="box-left box-l">
        <div class="modular-A">
          <FileManagement/>
        </div>
        <div class="modular-B">
          <MeasurementHistory/>
        </div>
      </div>
      <!-- 中间  -->
      <div class="box-center box-l">
        <div class="modular-C">
          <FormModule v-show="$store.getters.getModeType === 0"/>
          <FormModule2 v-show="$store.getters.getModeType === 1"/>
        </div>
        <div class="modular-D">
          <ControlStrategyAnalysis/>
        </div>
      </div>
      <!-- 右边  -->
      <div class="box-right box-l">
        <div class="modular-E">
          <PreRealDataAnalysis/>
        </div>
        <div class="modular-F">
          <ModelReliabilityAnalysis/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FileManagement from '@/views/componets/file-management/FileManagement.vue'
import MeasurementHistory from '@/views/componets/measurement-history/MeasurementHistory.vue'
import ControlStrategyAnalysis from '@/views/componets/control-strategy-analysis/ControlStrategyAnalysis.vue'
import ModelReliabilityAnalysis from '@/views/componets/model-reliability-analysis/ModelReliabilityAnalysis.vue'
import PreRealDataAnalysis from '@/views/componets/pre-real-data-analysis/PreRealDataAnalysis.vue'
import FormModule from '@/views/componets/form-module/FormModule.vue'
import FormModule2 from '@/views/componets/form-module/FormModule2.vue'
  @Component({
    components: {
      FileManagement,
      MeasurementHistory,
      ControlStrategyAnalysis,
      ModelReliabilityAnalysis,
      PreRealDataAnalysis,
      FormModule,
      FormModule2
    }
  })
export default class home extends Vue {
    private name = 'home'
}
</script>

<style scoped lang="less">
  .intermediate-content {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .box-left{
    width: 25%;
    height: 100%;
    .modular-A{
      width: 100%;
      height: 49.215%;
      background: url("../assets/images/right_min.png") no-repeat;
      background-size: 100% 100%  ;
    }
    .modular-B{
      width: 100%;
      height: 49.215%;
      margin-top: 15px;
      background: url("../assets/images/right_min.png") no-repeat;
      background-size: 100% 100%  ;
    }
  }
  .box-right {
    width: 28%;
    height: 100%;
    .modular-E{
      width: 100%;
      height: 49.215%;
      //border: 1px solid #eec600;
      background: url("../assets/images/right_min.png") no-repeat;
      background-size: 100% 100%  ;
    }
    .modular-F{
      width: 100%;
      height: 49.215%;
      margin-top: 15px;
      background: url("../assets/images/right_min.png") no-repeat;
      background-size: 100% 100%  ;
    }
  }
  .box-center{
    width: calc(46% - 20px);
    height: 100%;
    margin: 0 1%;
    .modular-C{
      width: 100%;
      height: 49.215%;
      //background: url("../assets/images/right_min.png") no-repeat;
      background-size: 100% 100%  ;
      background: rgba(11, 22, 49, 0.56);
      border-radius: 10px;
    }
    .modular-D{
      width: 100%;
      height: 49.215%;
      margin-top: 15px;
      background: url("../assets/images/right_min.png") no-repeat;
      background-size: 100% 100%  ;
    }
  }
  .head-line{
    width: 100%;
    height: 44px;
    background: #ffffff;
    margin-top: 15px;
  }
</style>
