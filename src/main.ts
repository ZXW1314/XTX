import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

//自定义指令，懒加载图片
app.directive("img-lazy", {
  mounted(el, binding) {
    console.log(el, binding.value);
  },
});

app.mount("#app");
