<script setup lang="ts">
import HeaderShortcut from "@/views/Layout/components/LayoutHeader/HeaderShortcut.vue";
import HeaderShortcutTop from "@/views/Layout/components/LayoutHeader/HeaderShortcutTop.vue";
import HeaderCart from "@/views/Layout/components/LayoutHeader/HeaderCart.vue";
import { ref } from "vue";
import { useCartStore } from "@/stores/cart.js";

const cartStore = useCartStore();

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
        <i class="iconfont icon-gouwuchekong"> </i>
        <span>{{ cartStore.countGood }}</span>
        <HeaderCart class="cart-list"></HeaderCart>
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
  position: relative;
  float: right;
  margin: 50px 0;

  &:hover {
    .cart-list {
      opacity: 1;
      z-index: 1;
    }
  }

  .cart-list {
    opacity: 0;
  }

  i {
    display: block;
    width: 50px;
    font-size: 22px;
    text-align: center;
  }

  span {
    position: absolute;
    left: 30px;
    top: -5px;
    padding: 0 8px;
    color: #fff;
    font-size: 12px;
    border-radius: 8px;
    background-color: #e26237;
  }
}

.shopping-cart i {
  font-size: 22px;
}

.show {
  opacity: 1;
  transition: all 0.4s linear;
  z-index: 3;
}
</style>
