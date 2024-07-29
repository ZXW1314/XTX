//二级导航
<script setup lang="ts">
import { useRoute } from "vue-router";
import { getSubCategoryAPI, getSubGoodsAPI } from "@/apis/category.js";
import { onMounted, ref } from "vue";
import GoodsItem from "@/components/GoodsItem.vue";
import type { TabsPaneContext } from "element-plus";

//获取sub导航数据
const route = useRoute();
const subCategoryData = ref<any>({});
onMounted(async () => {
  const res = await getSubCategoryAPI(route.params.id);
  subCategoryData.value = res.data.result;
});

//获取商品数据
const dataParam = ref<any>({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const goodsList = ref<any>({});
const getGoodsList = async () => {
  const res = await getSubGoodsAPI(dataParam.value);
  goodsList.value = res.data.result.items;
  console.log(goodsList.value);
};
onMounted(() => getGoodsList());

//商品导航切换
const activeName = ref("first");
const goodsChange = (name: any) => {
  dataParam.value.page = 1;
  if (name === "first") dataParam.value.sortField = "publishTime";
  else if (name === "second") dataParam.value.sortField = "orderNum";
  else dataParam.value.sortField = "evaluateNum";
  getGoodsList();
};

//无限滚动加载
const addGoodsList = async () => {
  const res = await getSubGoodsAPI(dataParam.value);
  goodsList.value = goodsList.value.concat(res.data.result.items);
};
const load = () => {
  dataParam.value.page += 1;
  addGoodsList();
};
</script>

<template>
  <div class="container">
    <!-- 面包屑导航 -->
    <div class="nav">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: `/category/${subCategoryData.parentId}` }"
        >
          {{ subCategoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 商品列表 -->
    <div class="goods">
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        @tab-change="goodsChange(activeName)"
      >
        <el-tab-pane label="最新商品" name="first"></el-tab-pane>
        <el-tab-pane label="最高人气" name="second"></el-tab-pane>
        <el-tab-pane label="评论最多" name="third"></el-tab-pane>
      </el-tabs>
      <ul class="clearfix" v-infinite-scroll="load">
        <li v-for="item in goodsList" :key="item.id">
          <GoodsItem :good="item"></GoodsItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  height: 64px;
  padding: 25px 0;
  font-size: 14px;
  color: #666;
}

.goods {
  background-color: #fff;
  padding: 20px 10px;
  margin-bottom: 10px;

  p {
    display: block;
    height: 42px;
    line-height: 40px;
    font-size: 16px;
    border-bottom: 2px solid #e4e7ed;

    .publishTime {
      padding-right: 20px;
    }

    .orderNum {
      padding: 0 20px;
    }

    .evaluateNum {
      padding-left: 20px;
    }

    i {
      display: inline-block;
      height: 42px;
    }

    span:hover {
      i {
        color: $xtxColor;
      }
    }
  }

  ul {
    padding: 20px 10px 0;

    li {
      float: left;
      margin: 0 10px;
    }
  }
}
</style>
