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
