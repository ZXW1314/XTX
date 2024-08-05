// axios基础的封装
import axios from "axios";
import "element-plus/es/components/message/style/css";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user.js";
import router from "@/router";

const http = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 10000,
});

// 拦截器
// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const userStore = useUserStore();
    const token = userStore.userInfo.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    ElMessage({
      message: error.response.data.message,
      type: "warning",
    });

    //401状态
    if (error.response.status === 401) {
      const userStore = useUserStore();
      userStore.clearUserInfo();
      router.push({ path: "/login" });
    }
    return Promise.reject(error);
  }
);

export default http;
