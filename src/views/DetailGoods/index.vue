//商品详情页
<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

import BriefIntroduction from "./components/BriefIntroduction.vue";
import Detail from "./components/Detail.vue";
import HotList from "./components/HotList.vue";
import { getGoodDetailAPI } from "@/apis/goods.js";
import Nav from "./components/Nav.vue";

//获取商品详情数据
const goodData = ref<any>();
const route = useRoute();
onBeforeMount(async () => {
  const res = await getGoodDetailAPI(route.params.id);
  goodData.value = res.data.result;
  console.log(goodData.value);
});
</script>

<template>
  <div class="container">
    <Nav :goodData="goodData"></Nav>
    <BriefIntroduction :goodData="goodData"></BriefIntroduction>
    <div class="clearfix">
      <Detail :goodData="goodData"></Detail>
      <HotList :id="goodData?.id"></HotList>
    </div>
  </div>
</template>

<style scoped lang="scss">
.clearfix {
  margin-bottom: 20px;
}
</style>
