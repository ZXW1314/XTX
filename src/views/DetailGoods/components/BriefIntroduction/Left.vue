//商品基本介绍左边部分
<script setup lang="ts">
import { ref, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";

const props = defineProps({
  goodData: {
    type: Object,
    default: () => ({}),
  },
});

//商品样式切换
const middlePicture = ref<any>("");
watch(
  () => props.goodData,
  (newValue) => (middlePicture.value = newValue.mainPictures[0]),
  {
    once: true,
  }
);
const changePicture = (item: any) => (middlePicture.value = item);

//放大镜效果
const target = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(target);
const topWindow = ref(0);
const leftWindow = ref(0);
watch([elementX, elementY], () => {
  if (!isOutside.value) {
    if (elementX.value < 100) leftWindow.value = 0;
    else if (elementX.value > 300) leftWindow.value = 200;
    else leftWindow.value = elementX.value - 100;

    if (elementY.value < 100) topWindow.value = 0;
    else if (elementY.value > 300) topWindow.value = 200;
    else topWindow.value = elementY.value - 100;
  }
});
</script>

<template>
  <div class="left">
    <div>
      <!-- 左侧大图-->
      <div ref="target" class="middle">
        <img :src="middlePicture" alt="" />
        <div
          class="window-slide"
          v-show="!isOutside"
          :style="{ top: `${topWindow}px`, left: `${leftWindow}px` }"
        ></div>
      </div>

      <!-- 右侧小图 -->
      <ul class="small">
        <li
          v-for="item in goodData.mainPictures"
          :key="item"
          @mouseenter="changePicture(item)"
        >
          <img :class="{ active: item === middlePicture }" :src="item" alt="" />
        </li>
      </ul>
    </div>

    <!-- 放大镜 -->
    <div
      v-show="!isOutside"
      class="large"
      :style="{
        background: `url(${middlePicture})`,
        backgroundPosition: `${-leftWindow * 2}px ${-topWindow * 2}px`,
      }"
    ></div>

    <!-- 大图下方基础信息 -->
    <ul class="basic-information clearfix">
      <li>
        <p class="first">销量人气</p>
        <p class="second">{{ goodData.salesCount }}+</p>
        <p class="thrid"><i class="iconfont icon-xiaoqi"></i>销量人气</p>
      </li>
      <li>
        <p class="first">商品评价</p>
        <p class="second">{{ goodData.commentCount }}+</p>
        <p class="thrid"><i class="iconfont icon-pingjia"></i>查看评价</p>
      </li>
      <li>
        <p class="first">收藏人气</p>
        <p class="second">{{ goodData.collectCount }}+</p>
        <p class="thrid">
          <i class="iconfont icon-31shoucangxuanzhong"></i>收藏商品
        </p>
      </li>
      <li>
        <p class="first">品牌信息</p>
        <p class="second">{{ goodData.brand?.name }}</p>
        <p class="thrid"><i class="iconfont icon-windmill"></i>品牌主页</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.left {
  position: relative;
  float: left;
  padding: 30px 50px;

  .middle {
    position: relative;
    float: left;

    img {
      width: 400px;
      height: 400px;
    }

    .window-slide {
      position: absolute;
      width: 200px;
      height: 200px;
      background-color: #999;
      opacity: 0.3;
    }
  }

  .large {
    position: absolute;
    top: 30px;
    left: 460px;
    width: 400px;
    height: 400px;
    opacity: 1;
    z-index: 1;
  }

  .small {
    float: left;
    display: flex;
    width: 80px;
    height: 400px;
    padding-left: 12px;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 64px;
      height: 64px;
    }

    .active {
      border: 2px solid $xtxColor;
    }
  }

  .basic-information {
    width: 400px;

    li {
      position: relative;
      float: left;
      width: 100px;
      height: 140px;
      padding: 30px 0;
      text-align: center;

      ~ li::after {
        position: absolute;
        top: 40px;
        left: 0;
        content: "";
        height: 60px;
        border-left: 1px solid #e4e4e4;
      }

      p {
        font-size: 14px;
      }

      .first {
        color: #999;
      }

      .second {
        margin: 10px 0;
        color: $priceColor;
      }

      .thrid {
        i {
          margin-right: 3px;
          color: $xtxColor;

          &:nth-child(1) {
            font-size: 13px;
          }
        }

        &:hover {
          color: $xtxColor;
        }
      }
    }
  }
}
</style>
