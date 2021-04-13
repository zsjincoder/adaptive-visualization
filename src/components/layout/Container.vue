<template>
  <div class="box" ref="box">
    <div id="container" ref="container">
      <template v-if="ready">
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ContainerOption } from '@/assets/interface/layout/layout'
import debounce from 'lodash/debounce'

@Component
export default class Container extends Vue {
  private name = 'Container'
  @Prop({
    required: true
  }) domOption!: ContainerOption

  // 容器 ref
  // eslint-disable-next-line
  private dom: any = document
  // eslint-disable-next-line
  private domA: any = document

  // 容器的宽
  private width = 0
  // 容器的高
  private height = 0
  // 屏幕的宽
  private originalWidth = 0
  // 屏幕的高
  private originalHeight = 0
  // 是否已经准备好
  private ready = false

  // 监听窗口变化
  private get _onResize () {
    return debounce(this.onResize, 300)
  }

  private async mounted () {
    this.ready = false
    await this.init()
    this.updateStyle()
    this.updateScale()
    window.addEventListener('resize', this._onResize)
    const observer = new MutationObserver(this.onResize)
    observer.observe(this.dom, {
      attributes: true,
      attributeFilter: ['style'],
      attributeOldValue: true
    })
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this._onResize)
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
      }
    })
    this.ready = true
    console.log(this.ready)
  }

  private async onResize () {
    await this.init()
    this.updateScale()
  }

  /***
   * 初始化数据
   * @private
   */
  private async init () {
    await this.$nextTick()
    this.dom = this.$refs.container
    this.domA = this.$refs.box
    const {
      width,
      height
    } = this.domOption
    if (width && height) {
      this.width = width
      this.height = height
    } else {
      this.width = this.dom.clientWidth
      this.height = this.dom.clientHeight
    }
    if (!this.originalWidth || !this.originalHeight) {
      this.originalWidth = window.screen.width
      this.originalHeight = window.screen.height
    }
  }

  /***
   * 更新样式
   * @private
   */
  private updateStyle () {
    const {
      width,
      height,
      originalWidth,
      originalHeight
    } = this
    let domWith, domHeight
    if (width && height) {
      domWith = width + 'px'
      domHeight = height + 'px'
    } else {
      domWith = originalWidth + 'px'
      domHeight = originalHeight + 'px'
    }
    this.dom.style.width = domWith
    this.dom.style.height = domHeight
  }

  /***
   * 更新缩放
   * @private
   */
  private updateScale () {
    const {
      width,
      height,
      originalWidth,
      originalHeight
    } = this
    const viewportWidth = document.body.clientWidth
    const viewportHeight = document.body.clientHeight
    const realWidth = width || originalWidth
    const realHeight = height || originalHeight
    const widthProportion = viewportWidth / realWidth
    const heightProportion = viewportHeight / realHeight
    const Proportion = widthProportion > heightProportion ? heightProportion : widthProportion
    this.dom.style.transform = `scale(${Proportion}, ${Proportion})`
    const containerRealWidth = (this.domOption.width * Proportion)
    const marginWidth = (viewportWidth - containerRealWidth) / 2 + 'px'
    this.domA.style.paddingLeft = `${marginWidth}`
  }
}
</script>

<style scoped>
.box{
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: url("../../assets/images/bg.gif") no-repeat;
  background-size: 100% 100%;
}

.video-ctr {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}

#container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9999;
  transform-origin: 0 0;
  transition: all 0.3s;
  border: 1px rgba(33, 65, 224, 0.3) solid;
  box-shadow: rgb(69, 110, 211) 0 0 18px inset;
}
</style>
