<template>
  <div class="form-box box-clear">
    <div class="form-left box-l">
      <div class="form-line box-clear" v-for="(i,k) in hotelDta1" :key="k +'a'">
        <div class="form-label form-left-label-width box-l">{{i.label}}：</div>
        <input class="form-input form-left-width box-l" placeholder="请输入" type="number" />
        <span class="form-unit box-l">{{ i.unit || '' }}</span>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">用水计量详细程度：</div>
        <RadioGroup :radioList="radioList1" :nameType="'radioList1'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">酒店星级：</div>
        <RadioGroup :radioList="radioList2" :nameType="'radioList2'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">绿化：</div>
        <RadioGroup :radioList="radioList3" :nameType="'radioList3'"/>
      </div>
    </div>
    <div class="form-right box-r">

      <div class="form-line box-clear">
        <div class="form-right-label box-l">餐饮：</div>
        <RadioGroup :radioList="radioList4" :nameType="'radioList4'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">会议：</div>
        <RadioGroup :radioList="radioList5" :nameType="'radioList5'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">供水方式：</div>
        <RadioGroup :radioList="radioList6" :nameType="'radioList6'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">热水系统：</div>
        <RadioGroup :radioList="radioList7" :nameType="'radioList7'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">空调系统：</div>
        <RadioGroup :radioList="radioList8" :nameType="'radioList8'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">其他大规模用水：</div>
        <RadioGroup :radioList="radioList9" :nameType="'radioList9'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">浴缸设置：</div>
        <RadioGroup :radioList="radioList10" :nameType="'radioList10'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">节水宣传：</div>
        <RadioGroup :radioList="radioList11" :nameType="'radioList11'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">非传统水源利用：</div>
        <RadioGroup :radioList="radioList12" :nameType="'radioList12'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">地理位置：</div>
        <RadioGroup :radioList="radioList13" :nameType="'radioList13'"/>
      </div>
      <div class="form-line box-clear">
        <div class="form-right-label box-l">洗衣房：</div>
        <RadioGroup :radioList="radioList9" :nameType="'radioList14'"/>
      </div>
      <div class="form-submit-box">立即测算</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Radio } from '@/assets/interface/radio/radio'

@Component
export default class FormModule extends Vue {
  protected name = FormModule
  private radioList1:Array<Radio> = [
    { name: '未计量', value: 0 },
    { name: '较详细', value: 1 },
    { name: '详细', value: 3 }
  ]

  private radioList2:Array<Radio> = [
    { name: '普通', value: 0 },
    { name: '三星', value: 1 },
    { name: '四星', value: 2 },
    { name: '五星', value: 3 }
  ]

  private radioList3:Array<Radio> = [
    { name: '无绿化', value: 0 },
    { name: '有绿化', value: 1 }
  ]

  private radioList4:Array<Radio> = [
    { name: '无餐饮服务', value: 0 },
    { name: '提供餐饮服务', value: 1 }
  ]

  private radioList5:Array<Radio> = [
    { name: '无会议服务', value: 0 },
    { name: '提供会议服务', value: 1 }
  ]

  private radioList6:Array<Radio> = [
    { name: '市政供水', value: 0 },
    { name: '市政与变频泵组合供水', value: 1 },
    { name: '市政与恒速泵-屋顶水箱组合供水', value: 1 }
  ]

  private radioList7:Array<Radio> = [
    { name: '立管循环', value: 0 },
    { name: '支管循环', value: 1 }
  ]

  private radioList8:Array<Radio> = [
    { name: '单体空调系统', value: 0 },
    { name: '中央空调系统', value: 1 }
  ]

  private radioList9:Array<Radio> = [
    { name: '无', value: 0 },
    { name: '有', value: 1 }
  ]

  private radioList10:Array<Radio> = [
    { name: '无', value: 0 },
    { name: '部分房间有浴缸', value: 1 },
    { name: '全部房间有浴缸', value: 2 }
  ]

  private radioList11:Array<Radio> = [
    { name: '未张贴节水宣传标语', value: 0 },
    { name: '张贴节水宣传标语', value: 1 }
  ]

  private radioList12:Array<Radio> = [
    { name: '未使用中水和雨水', value: 0 },
    { name: '使用中水和雨水', value: 1 }
  ]

  private radioList13:Array<Radio> = [
    { name: '否', value: 0 },
    { name: '是', value: 1 }
  ]

  // 酒店数据
  private hotelDta1 = [
    { label: '平均日用水量', prop: 't1', unit: 'm³/d' },
    { label: '单位面积平均用水量', prop: 't2', unit: 'm³/m²/d' },
    { label: '床位数', prop: 't3', unit: '床' },
    { label: '入住率', prop: 't3', unit: '%' },
    { label: '客人数', prop: 't3', unit: '人' },
    { label: '员工数', prop: 't3', unit: '人' },
    { label: '建筑年份', prop: 't3', unit: '年' },
    { label: '建筑面积', prop: 't3', unit: 'm²' },
    { label: '建筑层数', prop: 't3', unit: '层' }
  ]
}

</script>
<style scoped
       lang="less" src="./FormModule.less">
</style>
