// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const vueConfig = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  devServer: {
    host: '0.0.0.0',
    port: '',
    open: true
  },
  configureWebpack: {
    plugins: []
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 引入全局主题，这样就不用每个页面都引入了
        path.resolve(__dirname, './src/assets/css/common.less')
      ]
    }
  },
  chainWebpack: (config) => {
    // 移除 prefetch 插件，否则懒加载路由无效
    config.plugins.delete('prefetch')
    config.plugin('html').tap(args => {
      args[0].title = '智慧平台'
      return args
    })
  },
  productionSourceMap: false
}

module.exports = vueConfig
