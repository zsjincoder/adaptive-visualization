<template>
  <base-container title='控制策略分析'
                  right-text="更多"
                  :rightTextFunc="()=>{}">
    <Table :data="tableData"
           :column="column" :selectIndex="2">
      <template slot="active">
        <a>查看明细</a>
      </template>
    </Table>
  </base-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ControlStrategyAnalysis extends Vue {
  protected name = 'ControlStrategyAnalysis'
  private column = [
    {
      prop: 'Month',
      label: '时间',
      ellipsis: true,
      width: 120
    },
    {
      prop: 'Savings',
      label: '用户'
    },
    {
      prop: 'Savings',
      label: '名称'
    },
    {
      prop: 'Savings',
      label: '测试模型'
    },
    {
      prop: 'Savings',
      label: '测算方式'
    },
    {
      prop: 'Savings',
      label: '分析结果'
    }
  ]

  private tableData = [
    { Month: 'tes2', Savings: '123' },
    { Month: 'January', Savings: '123' },
    { Month: 'te212', Savings: '123' },
    { Month: '412122', Savings: '123' },
    { Month: '是符合实际的很费时间的环节都是', Savings: '121113' },
    { Month: 'Janua45ry', Savings: '121113' },
    { Month: 'Janua45ry', Savings: '121113' },
    { Month: 'Janua45ry', Savings: '121113' },
    { Month: 'Janua45ry', Savings: '121113' },
    { Month: 'Janua45ry', Savings: '121113' },
    { Month: 'Janua45ry', Savings: '121113' }
  ]
}
</script>

<style scoped
       lang="less">

</style>
