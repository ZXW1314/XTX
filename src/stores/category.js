import { ref } from "vue";
import { defineStore } from "pinia";

import { getCategoryAPI } from "@/apis/layout.js";

export const useCategoryStore = defineStore("category", () => {
  //获取header商品分类
  const categoryList = ref([]);

  const getCategory = async () => {
    const categoryTem = await getCategoryAPI();
    categoryList.value = categoryTem.data.result;
  };

  return {
    categoryList,
    getCategory,
  };
});
