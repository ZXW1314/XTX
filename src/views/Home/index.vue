//首页
<script setup lang="ts">
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeGoods from "./components/HomeGoods.vue";
</script>
<template>
  <HomeCategory></HomeCategory>
  <HomeBanner></HomeBanner>
  <HomeNew> </HomeNew>
  <HomeHot></HomeHot>
  <HomeGoods></HomeGoods>
</template>

<style scoped lang="scss"></style>
