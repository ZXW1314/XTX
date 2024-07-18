<script setup lang="ts"></script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <a href="#"></a>
      </div>

      <div class="shortcut">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">服饰</a></li>
          <li><a href="#">母婴</a></li>
          <li><a href="#">个护</a></li>
          <li><a href="#">严选</a></li>
          <li><a href="#">数码</a></li>
          <li><a href="#">运动</a></li>
          <li><a href="#">杂项</a></li>
        </ul>
      </div>

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
}

.logo a {
  display: block;
  width: 200px;
  height: 132px;
  background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
}

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
</style>
