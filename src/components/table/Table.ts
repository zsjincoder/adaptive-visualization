import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { TableColumn, TableData } from '@/assets/interface/table/tableInterface'

@Component
export default class Table extends Vue {
  protected name = 'Table'
  $refs!: {
    tableBody:any
    innerTable:any
  }

  @Prop({
    required: true,
    validator (value: any): boolean {
      const result = !(!(value instanceof Array) && !value.length)
      if (!result) {
        console.error('请检查属性有效性！')
      }
      return result
    }
  }) column!:TableColumn[]

  @Prop({
    required: true,
    validator (value: any): boolean {
      const result = !(!(value instanceof Array) && !value.length)
      if (!result) {
        console.error('请检查属性有效性！')
      }
      return result
    }
  }) data!:TableData[]

  @Prop({ default: -1 }) height?:number
  @Prop({ default: -1 }) selectIndex?:number

  private select = -1
  // 外层表格是否已加载
  private tableInit = false

  /**
   * 监听是否传入selectIndex,如果有说明有选中数据需求
   * @param num
   * @private
   */
  @Watch('selectIndex', { immediate: true })
  private selectIndexChange (num:number) {
    if (num !== -1) this.select = num
  }

  private mounted () {
    this.tableInit = false
    this.$nextTick(() => {
      const outTable = this.$refs.tableBody
      const innerTable = this.$refs.innerTable
      innerTable.style.width = outTable.offsetWidth + 'px'
      this.tableInit = true
    })
  }

  private rowClick (record:TableData, index:number) {
    if (this.select !== -1) {
      this.select = index
      this.$emit('rowChick', record)
    }
  }
}
