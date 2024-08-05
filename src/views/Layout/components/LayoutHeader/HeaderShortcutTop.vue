<script setup lang="ts">
import { useCategoryStore } from "@/stores/category.js";

const categoryStore = useCategoryStore();
</script>

<template>
  <div class="shortcut-top">
    <div class="container">
      <div class="logo">
        <a href="#"></a>
      </div>

      <div class="shortcut">
        <ul>
          <li><RouterLink to="/">首页</RouterLink></li>
          <li v-for="item in categoryStore.categoryList" :key="item.id">
            <RouterLink :to="`/category/${item.id}`">{{
              item.name
            }}</RouterLink>
          </li>
        </ul>
      </div>

      <span></span>
      <p>品牌</p>
      <p>专题</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shortcut-top {
  position: fixed;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  opacity: 1;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: -1;
}
// logo
.logo {
  float: left;
  width: 200px;
  padding-left: 40px;
  margin-right: 40px;
}

.logo a {
  float: left;
  width: 100%;
  height: 79px;
  background: url("@/assets/images/logo.png") no-repeat center 5px / contain;
}

//导航栏
ul li,
p {
  float: left;
  width: 78px;
  height: 79px;
  line-height: 79px;
  font-size: 16px;
  color: #121426;
}

ul a:hover {
  color: $xtxColor;
  padding-bottom: 5px;
  border-bottom: 1px solid $xtxColor;
}

span {
  float: left;
  height: 16px;
  margin-top: 32px;
  margin-right: 32px;
  border-left: 1px solid $xtxColor;
}

p:hover {
  color: $xtxColor;
}
</style>
