//全局注册组件
import GoodsItem from "@/components/GoodsItem.vue";

export const componentsPlugin = {
  install(app) {
    app.component(GoodsItem, GoodsItem);
  },
};
