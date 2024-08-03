//商品简介
<script setup lang="ts">
import { ref } from "vue";
import Left from "./BriefIntroduction/Left.vue";
import Right from "./BriefIntroduction/Right.vue";

defineProps({
  goodData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <!-- 商品介绍 -->
  <div class="introduction clearfix">
    <Left :goodData="goodData"></Left>
    <Right :goodData="goodData"></Right>
  </div>
</template>

<style scoped lang="scss">
.introduction {
  background-color: #fff;
  margin-bottom: 20px;
}
</style>
