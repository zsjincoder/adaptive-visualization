// 自定义组件
const Table = () => import('@/components/table/Table.vue')
const BaseContainer = () => import('@/components/baseContainer/BaseContainer.vue')
const RadioGroup = () => import('@/components/radio-group/RadioGroup.vue')

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install: (Vue: any) => {
    Vue.component('Table', Table)
    Vue.component('BaseContainer', BaseContainer)
    Vue.component('RadioGroup', RadioGroup)
  }
}
