<template>
  <div class="form-box box-clear">
    <div class="form-left box-l">
      <div class="form-line box-clear" v-for="(i,k) in hotelDta1" :key="k +'a'">
        <div class="form-label form-left-label-width box-l">{{i.label}}：</div>
        <input class="form-input form-left-width box-l" placeholder="请输入" type="number" />
        <span class="form-unit box-l">{{ i.unit || '' }}</span>
      </div>
    </div>
    <div class="form-right box-r">
      <div class="form-line box-clear" v-for="(i,k) in hotelDta2" :key="k +'b'">
        <div class="form-label form-right-label-width box-l">{{i.label}}：</div>
        <input class="form-input form-right-width box-l" placeholder="请输入" type="number" />
        <span class="form-unit box-l">{{ i.unit || '' }}</span>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">绿化：</div>
        <RadioGroup :radioList="radioList3" :nameType="'radioList3'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">餐厅：</div>
        <RadioGroup :radioList="radioList4" :nameType="'radioList4'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">供水方式：</div>
        <RadioGroup :radioList="radioList6" :nameType="'radioList6'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">水龙头热水：</div>
        <RadioGroup :radioList="radioList7" :nameType="'radioList7'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">空调系统：</div>
        <RadioGroup :radioList="radioList8" :nameType="'radioList8'"/>
      </div>

      <div class="form-line box-clear">
        <div class="form-right-label box-l">节水宣传：</div>
        <RadioGroup :radioList="radioList11" :nameType="'radioList11'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">洗手池水龙头类型：</div>
        <RadioGroup :radioList="radioList12" :nameType="'radioList12'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">大便器类型：</div>
        <RadioGroup :radioList="radioList13" :nameType="'radioList13'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">小便器类型：</div>
        <RadioGroup :radioList="radioList10" :nameType="'radioList14'"/>
      </div>
      <div class="form-submit-box">立即测算</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Radio } from '@/assets/interface/radio/radio'

@Component
export default class FormModule2 extends Vue {
  protected name = FormModule2
  private radioList3:Array<Radio> = [
    { name: '无绿化', value: 0 },
    { name: '有绿化', value: 1 }
  ]

  private radioList4:Array<Radio> = [
    { name: '无餐厅', value: 0 },
    { name: '有餐厅', value: 1 }
  ]

  private radioList6:Array<Radio> = [
    { name: '市政供水', value: 0 },
    { name: '市政与变频泵组合供水', value: 1 },
    { name: '市政与恒速泵-屋顶水箱组合供水', value: 1 }
  ]

  private radioList7:Array<Radio> = [
    { name: '无热水', value: 0 },
    { name: '部分楼层有', value: 1 },
    { name: '全部楼层有', value: 2 }
  ]

  private radioList8:Array<Radio> = [
    { name: '单体空调系统', value: 0 },
    { name: '中央空调系统', value: 1 }
  ]

  private radioList10:Array<Radio> = [
    { name: '延迟自闭式', value: 0 },
    { name: '感应式', value: 1 }
  ]

  private radioList11:Array<Radio> = [
    { name: '未张贴节水宣传标语', value: 0 },
    { name: '张贴节水宣传标语', value: 1 }
  ]

  private radioList12:Array<Radio> = [
    { name: '快开式', value: 0 },
    { name: '感应式', value: 1 }
  ]

  private radioList13:Array<Radio> = [
    { name: '水箱式', value: 0 },
    { name: '延迟自闭式', value: 1 },
    { name: '感应式', value: 2 },
    { name: '手动式', value: 3 }
  ]

  // 酒店数据
  private hotelDta1 = [
    { label: '平均日用水量', prop: 't1', unit: 'm³/d' },
    { label: '人均日用水量', prop: 't1', unit: 'm³/d/人' },
    { label: '单位面积平均用水量', prop: 't2', unit: 'm³/m²/d' },
    { label: '用水人数', prop: 't3', unit: '人' },
    { label: '建筑年份', prop: 't3', unit: '年' },
    { label: '建筑面积', prop: 't3', unit: 'm²' },
    { label: '建筑层数', prop: 't3', unit: '层' },
    { label: '绿化面积', prop: 't3', unit: 'm²' },
    { label: '用水器具总数', prop: 't3', unit: '个' },
    { label: '洗水池水龙头数量', prop: 't3', unit: '个' },
    { label: '大便器数量', prop: 't3', unit: '个' },
    { label: '小便器数量', prop: 't3', unit: '个' }
  ]

  private hotelDta2 = [
    { label: '拖把池水龙头数量', prop: 't3', unit: '个' },
    { label: '节水器具使用率', prop: 't3', unit: '%' }
  ]
}

</script>
<style scoped
       lang="less" src="./FormModule.less">
</style>
