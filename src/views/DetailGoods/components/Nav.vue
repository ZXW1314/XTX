//面包屑导航
<script setup lang="ts">
const props = defineProps({
  goodData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <!-- 面包屑导航 -->
  <div class="nav">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="{ path: `/category/${goodData.categories?.[0].id}` }"
      >
        {{ goodData.categories?.[0].name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item
        :to="{ path: `/category/sub/${goodData.categories?.[1].id}` }"
      >
        {{ goodData.categories?.[1].name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ goodData.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.nav {
  height: 64px;
  padding: 25px 0;
  font-size: 14px;
  color: #666;
}
</style>
