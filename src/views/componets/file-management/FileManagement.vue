<template>
  <base-container title='文件管理'
                  right-text="更多"
                  :rightTextFunc="goto">
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
export default class FileManagement extends Vue {
  protected name = FileManagement
  private column = [
    {
      prop: 'Month',
      label: '名称',
      ellipsis: true,
      width: 120
    },
    {
      prop: 'Savings',
      label: '类别'
    },
    {
      prop: 'Savings',
      label: '测算方式'
    },
    {
      prop: 'Savings',
      label: '测算结果'
    },
    {
      slot: 'active',
      label: '操作'
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

  private goto () {
    console.log('跳转')
  }
}

</script>
<style scoped
       lang="less">
</style>
