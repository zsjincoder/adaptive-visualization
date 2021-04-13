<template>
  <div>
    <label class="form-radio-label box-l" v-for="(val,key) in radioList" :key="key">
      <input class="form-radio" @change="changeType" type="radio" :name="nameType" :value="val.value" :checked="value === val.value">{{ val.name }}
    </label>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Radio } from '@/assets/interface/radio/radio'

@Component
export default class RadioGroup extends Vue {
  protected name = RadioGroup
  @Prop() radioList!:Array<Radio>
  @Prop() value!:any
  @Prop() nameType!:string
  private changeType (val:Event) {
    this.$emit('input', (val.target as any)._value)
  }
}

</script>
<style scoped
       lang="less">
.form-radio-label{
  color: #ffffff;
  line-height: 30px;
  padding: 0 5px;
  box-sizing: border-box;
}
.form-radio{
  color: #ffffff;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 5px;
}
</style>
