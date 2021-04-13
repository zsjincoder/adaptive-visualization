<template>
  <Container :dom-option="{width:1920,height:1080}">
    <template>
      <Headers/>
      <div class="main">
        <router-view/>
      </div>
    </template>
  </Container>
  </template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Container from '@/components/layout/Container.vue'
import Headers from '@/components/layout/Headers.vue'

@Component({
  components: {
    Container,
    Headers
  }
})
export default class Default extends Vue {
  private name = 'Default'
}
</script>

<style scoped
       lang="less">
.main {
  overflow: hidden;
  height: calc(100% - 80px);
}
</style>
