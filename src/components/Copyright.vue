//版权组件
<script setup lang="ts"></script>

<template>
  <div class="copyright">
    <div>
      <ul>
        <li>关于我们</li>
        <li></li>
        <li>帮助中心</li>
        <li></li>
        <li>售后服务</li>
        <li></li>
        <li>配送与验收</li>
        <li></li>
        <li>商务合作</li>
        <li></li>
        <li>搜索推荐</li>
        <li></li>
        <li>友情链接</li>
      </ul>
    </div>
    <div>
      <p>CopyRight © 小兔鲜儿</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.copyright {
  height: 170px;
  padding-top: 40px;
  text-align: center;
  font-size: 15px;
  color: #999;

  ul li {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
  }

  li:nth-child(even) {
    border-left: 1px solid #999;
    margin: 0 10px;
  }

  p {
    padding-top: 20px;
  }
}
</style>
