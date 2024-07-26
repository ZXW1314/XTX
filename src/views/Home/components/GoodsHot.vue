//新鲜好物和人气推荐
<script setup lang="ts">
defineProps({
  title: String,
  subTitle: String,
});
</script>
<template>
  <div style="background-color: #fff">
    <div class="container">
      <h3>
        {{ title }}<span>{{ subTitle }}</span>
      </h3>
      <div>
        <slot></slot>
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
</style>
