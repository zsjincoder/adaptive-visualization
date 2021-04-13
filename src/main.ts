import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入公共样式文件
import '@/assets/css/common.less'

/**
 * 引入公共组件
 */
import commonComponents from '@/components'
/**
 * echarts
 */
import VueEcharts from 'vue-echarts-ts'

Vue.use(commonComponents)
Vue.use(VueEcharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
