<template>
  <div class="head box-clear">
    <div class="logo-box box-l">
      <img src="../../assets/images/test.png" alt="logo">
      <div class="time">
        <p class="date">{{ nowDate.year }}年{{ nowDate.mouth }}月{{ nowDate.date }}日</p>
        <p class="date-time">
          <span>{{nowDate.week}}</span>
          <span>{{ nowDate.hour }}:{{ nowDate.minutes }}:{{ nowDate.seconds }}</span>
        </p>
      </div>
    </div>
    <h1 class="title box-l">公共用水模拟平台</h1>
    <div class="date-info box-l">
      <div v-for="item in btn"
           :key="item.value"
           :class="$store.getters.getModeType === item.value ? 'sys-ctr-active' : 'sys-ctr'"
           @click="$store.commit('setModeType', item.value)">
        <div>{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Headers extends Vue {
  private name = 'Headers'

  private btn = [
    { label: '酒 店', value: 0 },
    { label: '办公楼', value: 1 }
  ]

  private timer:any = null
  private nowDate:any = {}

  private date () {
    const now = new Date()
    const week = ['周日', '星期一', '星期二', '星期三', '星期四', '星期五', '周六']
    const add = (num: number) => {
      return num < 10 ? '0' + num : num
    }
    return {
      year: now.getFullYear(),
      mouth: add(now.getMonth() + 1),
      date: add(now.getDate()),
      hour: add(now.getHours()),
      minutes: add(now.getMinutes()),
      seconds: add(now.getSeconds()),
      week: week[now.getDay()]
    }
  }

  private setTimer () {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }
    this.timer = setInterval(() => {
      this.nowDate = this.date()
    }, 1000)
  }

  private created () {
    this.setTimer()
  }

  private destroy () {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style scoped
       lang="less">
.head {
  width: 100%;
  height: 80px;
  background: url("../../assets/images/head_icon1.png") no-repeat;
  background-size: 100% 100%;
}
  .logo-box{
    width: 30%;
    height: 60px;
    margin-top: 10px;
    position: relative;
    img{
      width: auto;
      height: 90%;
      margin-left: 40px;
      margin-top: 12px;
    }
    .time{
      height: 100%;
      padding-top: 22px;
      box-sizing: border-box;
      position: absolute;
      right: 0;
      bottom: 0;
      display: inline-block;
      color: #c4c4c4;
      font-weight: bold;
      .date {
        font-size: 20px;

      }
      .date-time {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        text-align: right;
      }
    }
  }
  .title{
    width: 40%;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    line-height: 90px;
    height: 100%;
  }
  .date-info{
    width: 30%;
    height: 100%;
    padding-left: 30px;
    box-sizing: border-box;
    .sys-ctr {
      width: 220px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin-top: 20px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      color: white;
      font-size: 18px;
      display: inline-block;
    }
    .sys-ctr::after{
      position: absolute;
      left: 50px;
      top: 0;
      width: 120px;
      height: 60px;
      background-image: linear-gradient(-45deg, #043448, #2339d9, #5b71ff);
      transform: rotateZ(40deg)skew(0deg,320deg);
      content: '';
      z-index: -1;
    }

    .sys-ctr-active {
      width: 220px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin-top: 20px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      color: #edfffd;
      font-size: 18px;
      display: inline-block;
    }
    .sys-ctr-active::after{
      position: absolute;
      left: 50px;
      top: 0;
      width: 120px;
      height: 60px;
      //background-image: linear-gradient(-45deg, #5c86ec, #92dcec);
      background-image: linear-gradient(-45deg, #2f6c81, #6877dc, #5e6fde);
      //border: 1px saddlebrown solid;
      box-shadow: rgb(69, 110, 211) 10px 10px 18px;
      border-radius:3px;
      transform: rotateZ(40deg)skew(0deg,320deg);
      content: '';
      z-index: -1;
    }
  }
</style>
