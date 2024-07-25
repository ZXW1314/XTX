<script setup lang="ts">
import HeaderShortcut from "@/views/Layout/components/LayoutHeader/HeaderShortcut.vue";
import HeaderShortcutTop from "@/views/Layout/components/LayoutHeader/HeaderShortcutTop.vue";

import { ref } from "vue";

//吸顶导航
const HeaderTop = ref<number>(0);
window.addEventListener("scroll", function () {
  HeaderTop.value = document.documentElement.scrollTop;
});
</script>

<template>
  <header>
    <HeaderShortcutTop :class="{ show: HeaderTop > 78 }"></HeaderShortcutTop>
    <div class="container">
      <div class="logo">
        <a href="#"></a>
      </div>

      <HeaderShortcut></HeaderShortcut>

      <div class="search">
        <i class="iconfont icon-sousuokuang"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="shopping-cart">
        <i class="iconfont icon-gouwuchekong"></i>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 132px;
  background-color: #fff;
}

// logo
.logo {
  float: left;
  width: 200px;
}

.logo a {
  display: block;
  width: 100%;
  height: 132px;
  background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
}

// 搜索框和购物车
.search {
  float: left;
  width: 170px;
  height: 32px;
  margin: 50px 0;
  border-bottom: 1px solid #e7e7e7;
}

.search i {
  float: left;
  font-size: 20px;
}

input {
  float: left;
  width: 140px;
  margin: 8px 0 0 5px;
  color: #666;
}

.shopping-cart {
  float: right;
  width: 50px;
  height: 132px;
  line-height: 132px;
  text-align: center;
}

.shopping-cart i {
  font-size: 22px;
}

.show {
  opacity: 1;
  transition: all 0.3s linear;
}
</style>
