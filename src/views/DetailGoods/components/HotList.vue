//24小时热榜
<script setup lang="ts">
import HotListItem from "./HotListItem.vue";
</script>

<template>
  <div>
    <HotListItem title="24小时热力榜" :typeHot="1"></HotListItem>
    <HotListItem title="周热榜" :typeHot="2"></HotListItem>
  </div>
</template>

<style scoped lang="scss">
div {
  float: left;
  width: 280px;
}
</style>
