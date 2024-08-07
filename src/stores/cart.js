import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user.js";
import { getAddGood, getCartList, getDelGood } from "@/apis/user.js";

export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const TFLogin = computed(() => userStore.userInfo?.token);

    const cartList = ref([]);

    //方法
    //更新商品列表
    const updataCartList = async () => {
      const res = await getCartList();
      cartList.value = res.data.result;
    };

    //添加商品到购物车 good:{id,name,mainPicture,price,count,value,skuId,attrsText,selected,}
    const addCart = async (good) => {
      if (TFLogin.value) {
        await getAddGood(good.skuId, good.count);
        updataCartList();
      } else {
        const index = cartList.value.findIndex(
          (item) => item.skuId === good.skuId
        );
        if (index === -1) cartList.value.push(good);
        else cartList.value[index].count += good.count;
      }
    };

    //删除商品中的某一项
    const delGood = async (skuId) => {
      if (TFLogin.value) {
        await getDelGood([skuId]);
        updataCartList();
      } else {
        const index = cartList.value.findIndex((item) => item.skuId == skuId);
        cartList.value.splice(index, 1);
      }
    };

    //改变商品选择状态
    const changeSeleGood = (index) => {
      cartList.value[index].selected = !cartList.value[index].selected;
    };

    //添加或减少某一件商品
    const changeCountGood = (value, index) =>
      (cartList.value[index].count = value);

    //清楚购物车信息
    const clearCartList = () => (cartList.value = []);

    //计算属性
    //商品数量
    const countGood = computed(() =>
      cartList.value.reduce((count, item) => count + item.count, 0)
    );

    //总价
    const allPrice = computed(() =>
      cartList.value.reduce(
        (count, item) => count + (item.price * 100 * item.count) / 100,
        0
      )
    );

    //已选择商品数量
    const countSele = computed(() =>
      cartList.value.reduce(
        (count, item) => (item.selected ? count + item.count : count),
        0
      )
    );

    //已选择商品总价
    const priceSele = computed(() =>
      cartList.value.reduce(
        (price, item) =>
          item.selected ? price + (item.price * 100 * item.count) / 100 : price,
        0
      )
    );

    return {
      cartList,
      countGood,
      allPrice,
      countSele,
      priceSele,
      addCart,
      delGood,
      changeSeleGood,
      changeCountGood,
      clearCartList,
      updataCartList,
    };
  },
  {
    persist: true,
  }
);
