import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    //自定义指令，图片懒加载
    app.directive("img-lazy", {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
