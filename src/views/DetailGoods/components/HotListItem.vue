//榜组件
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getHotGoodsAPI } from "@/apis/goods.js";
import { useRoute } from "vue-router";

const props = defineProps({
  title: {
    type: String,
    default: () => "",
  },
  typeHot: {
    type: Number,
    default: () => 0,
  },
});
const route = useRoute();

//获取榜数据
const hotGoodsList = ref<any>();
onMounted(async () => {
  const res = await getHotGoodsAPI(route.params.id, props.typeHot);
  hotGoodsList.value = res.data.result;
});
</script>

<template>
  <div class="hot-list">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in hotGoodsList" :key="item.id">
        <GoodsItem :good="item"></GoodsItem>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.hot-list {
  width: 280px;

  h3 {
    width: 100%;
    height: 70px;
    line-height: 70px;
    margin-bottom: 10px;
    padding-left: 25px;
    background-color: #e26237;
    font-size: 18px;
    color: #fff;
    font-weight: 400;
  }

  li {
    padding: 0 30px;
    background-color: #fff;
  }
}
</style>
