import { ref } from "vue";
import { defineStore } from "pinia";
import { getLoginAPI } from "@/apis/user.js";
import { useCartStore } from "@/stores/cart.js";
import { mergeCart } from "@/apis/user.js";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();

    const userInfo = ref();

    // 获取用户信息
    const getUserInfo = async (account, password) => {
      const res = await getLoginAPI(account, password);
      userInfo.value = res.data.result;
      //合并购物车商品
      const data = cartStore.cartList.map((item) => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count,
        };
      });
      mergeCart(data);
      cartStore.updataCartList();
    };

    //清除用户信息
    const clearUserInfo = () => (userInfo.value = {});

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  }
);
