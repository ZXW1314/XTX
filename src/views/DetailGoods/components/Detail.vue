//商品详情
<script setup lang="ts">
defineProps({
  goodData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="detail">
    <h3>商品详情</h3>
    <div class="line"></div>
    <div class="content">
      <ul class="properties clearfix">
        <li v-for="item in goodData.details?.properties" :key="item.name">
          <span>{{ item.name }}</span>
          <i>{{ item.value }}</i>
        </li>
      </ul>
      <img
        v-for="item in goodData.details?.pictures"
        :key="item"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail {
  float: left;
  width: 940px;
  margin-right: 20px;
  background-color: #fff;

  h3 {
    height: 70px;
    line-height: 70px;
    padding-left: 40px;
    font-size: 18px;
    font-weight: 400;
  }

  .line {
    width: 100%;
    border-bottom: 1px solid #eee;
  }

  .content {
    width: 100%;
    padding: 40px;
  }

  .properties {
    padding-bottom: 30px;

    li {
      float: left;
      width: 50%;
      height: 30px;

      span {
        display: inline-block;
        width: 100px;
        color: #999;
      }

      i {
        color: #666;
      }
    }
  }

  img {
    width: 100%;
  }
}
</style>
