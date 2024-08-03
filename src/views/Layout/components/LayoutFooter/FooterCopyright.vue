<script setup lang="ts"></script>

<template>
  <div class="module">
    <div class="container">
      <div class="slogan">
        <ul>
          <li>
            <i class="iconfont icon-xiangzi"></i>
            <span>价格亲民</span>
          </li>
          <li>
            <i class="iconfont icon-wwuliu-"></i>
            <span>物流快捷</span>
          </li>
          <li>
            <i class="iconfont icon-like"></i>
            <span>品质新鲜</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.module {
  background-color: #333;
}

.slogan {
  height: 178px;
  line-height: 177px;
  border-bottom: 1px solid #434343;
  text-align: center;
  color: #fff;
}

.slogan li {
  float: left;
  width: 413px;

  span {
    display: inline-block;
    font-size: 28px;
  }

  i {
    display: inline-block;
    font-size: 50px;
    vertical-align: top;
    padding: 4px 15px 0 0;
  }
}
</style>
