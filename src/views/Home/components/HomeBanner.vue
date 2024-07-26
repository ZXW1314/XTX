//轮播图
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getBannerAPI } from "@/apis/home.js";

const bannerList = ref<any>([]);
onMounted(async () => {
  const res = await getBannerAPI();
  bannerList.value = res.data.result;
});
</script>

<template>
  <div class="container block text-center">
    <el-carousel height="500px" motion-blur>
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.img {
  opacity: 0.75;
  width: 100%;
}
</style>
