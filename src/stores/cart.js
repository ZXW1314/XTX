import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);

    //good:{id,name,mainPicture,price,count,value,skuID,specsText,selected,}
    const addCart = (good) => {
      const index = cartList.value.findIndex(
        (item) => item.skuId === good.skuId
      );
      if (index === -1) cartList.value.push(good);
      else cartList.value[index].count += good.count;
    };

    return {
      cartList,
      addCart,
    };
  },
  {
    persist: true,
  }
);
