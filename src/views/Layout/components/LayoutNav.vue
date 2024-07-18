<script setup lang="ts">
</script>

<template>
  <nav class="nav">
    <div class="container">
      <ul>
        <li><a href="#" @click="$router.push('/login')">请先登录</a></li>
        <li></li>
        <li><a href="#">帮助中心</a></li>
        <li></li>
        <li><a href="#">关于我们</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  .nav{
    height: 52px;
    background-color: #333333;
  }

  ul{
    float: right
  }

  li{
    float: left;
  }

  li:nth-child(even){
    height: 16px;
    margin: 18px 16px;
    border-left: 1px solid #666;
  }

  a{
    height: 52px;
    line-height: 52px;
    font-size: 14px;
    color: #cdcdcd;
  }

  a:hover{
    color: $xtxColor;
  }
</style>