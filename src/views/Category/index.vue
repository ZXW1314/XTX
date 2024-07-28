//一级分类页，首页header中的导航分类

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCategorySecondAPI } from "@/apis/category.js";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getBannerAPI } from "@/apis/home.js";

//获取分类数据
const categoryData = ref<any>({});
const route = useRoute();
const getCategory = async (id = route.params.id) => {
  const res = await getCategorySecondAPI(id);
  categoryData.value = res.data.result;
  console.log(categoryData.value);
};
onBeforeRouteUpdate((to) => {
  getCategory(to.params.id);
});
onMounted(() => getCategory());

//获取轮播图数据
const bannerList = ref<any>([]);
onMounted(async () => {
  const res = await getBannerAPI("2");
  bannerList.value = res.data.result;
  console.log(bannerList.value);
});
</script>

<template>
  <div class="container">
    <!-- 面包屑导航 -->
    <div class="nav">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 轮播图 -->
    <div class="block text-center">
      <el-carousel height="500px" motion-blur>
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 商品 -->
    <div class="all-category">
      <h3>全部分类</h3>
      <ul class="clearfix">
        <li v-for="item in categoryData.children" :key="item.id">
          <img v-img-lazy="item.picture" alt="" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
  <ul class="category">
    <li v-for="item in categoryData.children" :key="item.id">
      <h3>-{{ item.name }}-</h3>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.nav {
  height: 64px;
  padding: 25px 0;
  font-size: 14px;
}

h3 {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 28px;
  color: #666;
  font-weight: 400;
}

.all-category {
  padding: 0 32px;
  margin: 20px 0;
  background-color: #fff;

  li {
    float: left;
    width: 168px;
    height: 160px;
    text-align: center;

    &:hover {
      p {
        color: $xtxColor;
      }
    }

    img {
      width: 100px;
      height: 100px;
    }

    p {
      height: 40px;
      line-height: 40px;
      color: #333;
      font-size: 16px;
    }
  }
}

.category {
  li {
    margin-bottom: 20px;
    background-color: #fff;
    padding: 0 40px 30px 40px;
  }
}
</style>
