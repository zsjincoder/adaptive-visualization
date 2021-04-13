<template>
  <div class="head">
    <span>头部</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Headers extends Vue {
  private name = 'Headers'
}
</script>

<style scoped
       lang="less">
.head {
  width: 100%;
  height: 90px;
  border: 1px saddlebrown solid;
}
</style>
