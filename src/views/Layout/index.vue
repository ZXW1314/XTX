<script setup lang="ts">
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";

import { useCategoryStore } from "@/stores/category.js";
import { onMounted } from "vue";

//获取首页商品分类
onMounted(() => {
  useCategoryStore().getCategory();
});
</script>

<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>

<style scoped lang="scss"></style>
