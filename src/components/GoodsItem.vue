//商品通用组件
<script setup lang="ts">
defineProps({
  good: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div>
    <RouterLink :to="`/detail/${good.id}`">
      <img v-img-lazy="good.picture" alt="" />
      <p class="name ellipsis">{{ good.name }}</p>
      <p class="desc ellipsis">{{ good.desc }}</p>
      <p class="price"><i>¥</i>{{ good.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
div {
  width: 220px;
  height: 300px;
  padding: 20px 30px;
  transition: all 0.5s;
  border-radius: 4px;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 0.2);
  }
}

img {
  width: 160px;
  height: 160px;
}

p {
  text-align: center;
}

.name {
  font-size: 16px;
}

.desc {
  color: #999;
  height: 29px;
}

.price {
  color: $priceColor;
  font-size: 20px;
}
</style>
