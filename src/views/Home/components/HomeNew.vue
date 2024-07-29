//新鲜好物
<script setup lang="ts">
import NewHot from "./NewHot.vue";

import { ref, onMounted } from "vue";
import { getGoodsAPI } from "@/apis/home.js";

const goodsList = ref<any>([]);
onMounted(async () => {
  const res = await getGoodsAPI();
  goodsList.value = res.data.result;
});
</script>

<template>
  <NewHot class="goods-hot" title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <ul>
      <li v-for="item in goodsList" :key="item.id">
        <img v-img-lazy="item.picture" alt="" />
        <p class="name ellipsis">{{ item.name }}</p>
        <p class="price"><i>¥</i>{{ item.price }}</p>
      </li>
    </ul>
  </NewHot>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: space-between;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 0.2);
    }

    p {
      padding-top: 12px;
      font-size: 22px;
      text-align: center;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
