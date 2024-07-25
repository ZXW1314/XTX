//新鲜好物
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getGoodsAPI } from "@/apis/home.js";

const goodsList = ref<any>([]);
onMounted(async () => {
  const res = await getGoodsAPI();
  goodsList.value = res.data.result;
  console.log(1111);
  console.log(goodsList.value);
});
</script>

<template>
  <div style="background-color: #fff">
    <div class="container">
      <h3>新鲜好物<span>新鲜出炉 品质靠谱</span></h3>
      <div>
        <ul>
          <li v-for="item in goodsList" :key="item.id">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price"><i>¥</i>{{ item.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h3 {
  line-height: 115px;
  font-size: 32px;
  font-weight: 400;
  color: #333;

  span {
    padding-left: 20px;
    font-size: 16px;
    color: #999;
  }
}

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
