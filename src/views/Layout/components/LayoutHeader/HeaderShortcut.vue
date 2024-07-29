<script setup lang="ts">
import { useCategoryStore } from "@/stores/category.js";

//获取header商品分类
const categoryStore = useCategoryStore();
</script>

<template>
  <div class="shortcut">
    <ul>
      <li><RouterLink to="/">首页</RouterLink></li>
      <li v-for="item in categoryStore.categoryList" :key="item.id">
        <RouterLink active-class="active" :to="`/category/${item.id}`">{{
          item.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
//导航栏
ul {
  float: left;
  margin-left: 40px;
  font-size: 16px;
}

ul li {
  float: left;
  width: 78px;
  height: 132px;
  line-height: 132px;
  font-size: 16px;
  color: #121426;
}

ul a:hover {
  color: $xtxColor;
  padding-bottom: 5px;
  border-bottom: 1px solid $xtxColor;
}

.active {
  color: $xtxColor;
  padding-bottom: 5px;
  border-bottom: 1px solid $xtxColor;
}
</style>
