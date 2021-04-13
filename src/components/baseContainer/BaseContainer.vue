<template>
  <div class="base-container">
    <div class="con-title">
      <div class="left-title">
        <span class="c-t-name">{{ title }}</span>
        <img src="../../assets/images/bg_fig.gif" alt="">
      </div>

      <a v-if="rightText"
         class="left-right-text"
         @click="rightTextFunc"> {{ rightText }} </a>
    </div>
    <div class="con-table">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseContainer extends Vue {
  protected name = 'BaseContainer'
  @Prop({ default: 'Title' }) title?: string
  @Prop() rightText?: string
  @Prop() rightTextFunc?: () => any
}
</script>

<style scoped
       lang="less">
.base-container {
  width: 100%;
  height: 100%;
  padding: 20px 15px;
  box-sizing: border-box;

  .con-title {
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: white;

    .left-title {
      display: flex;
      align-items: center;

      img {
        width: 110px;
        margin-left: 10px;
      }

      .c-t-name {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .left-right-text {
      color: #3990ec;
      cursor: pointer;
      font-size: 14px;
    }
  }

  .con-table {
    width: 100%;
    height: calc(100% - 35px);
  }
}
</style>
