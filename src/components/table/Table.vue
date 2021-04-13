<template>
  <div class="table-con">
    <table ref="tableBody"
           class="table-box">
      <thead>
      <tr class="table-header">
        <th v-for="(th, index) in column"
            :key="index">
          {{ th.label }}
        </th>
      </tr>
      </thead>
      <div ref="innerTable"
           class="inner-table"
           :style="{
            maxHeight: height !== -1 ? `${height}px` : 'auto'}">
        <table v-if="tableInit"
               class="table-box">
          <tbody>
          <tr class="table-row"
              v-for="(tr, index) in data"
              :key="index"
              :class="{
            'table-row-select': select === index,
            'table-row-choose': select !== -1
          }"
              @click="rowClick(tr, index)">
            <th v-for="(th, index) in column"
                :key="index"
                :title="!!th.ellipsis ? tr[th.prop] : ''"
                :class="{
              'text-ellipsis': !!th.ellipsis
            }">
              <template v-if="th.prop">
                {{ tr[th.prop] }}
              </template>
              <template v-else>
                <slot :name="th.slot"></slot>
              </template>
            </th>
          </tr>
          </tbody>
        </table>
      </div>

    </table>
  </div>

</template>

<script lang="ts" src="./Table.ts">

</script>

<style scoped
       lang="less" src="./Table.less">
</style>
