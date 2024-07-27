//热门推荐
<script setup lang="ts">
import NewHot from "./NewHot.vue";

import { ref, onMounted } from "vue";
import { getHotAPI } from "@/apis/home.js";

//人气推荐
const hotList = ref<any>([]);
onMounted(async () => {
  const res = await getHotAPI();
  hotList.value = res.data.result;
});
</script>

<template>
  <NewHot title="人气推荐" subTitle="人气爆款 不容错过">
    <ul>
      <li v-for="item in hotList" :key="item.id">
        <img v-img-lazy="item.picture" alt="" />
        <p class="title ellipsis">{{ item.title }}</p>
        <p class="alt">{{ item.alt }}</p>
      </li>
    </ul>
  </NewHot>
  <span></span>
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
      text-align: center;
    }

    .title {
      font-size: 22px;
    }

    .alt {
      font-size: 18px;
      color: #999;
    }
  }
}

span {
  display: block;
  height: 20px;
}
</style>
