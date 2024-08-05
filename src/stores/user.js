import { ref } from "vue";
import { defineStore } from "pinia";

import { getLoginAPI } from "@/apis/user.js";

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref();

    // 获取用户信息
    const getUserInfo = async (account, password) => {
      const res = await getLoginAPI(account, password);
      userInfo.value = res.data.result;
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
