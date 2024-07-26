import http from "@/utils/http.js";

//banner轮播图
export function getBannerAPI() {
  return http({
    url: "/home/banner",
  });
}

//新鲜好物
export function getGoodsAPI() {
  return http({
    url: "/home/new",
  });
}

//人气推荐
export function getHotAPI() {
  return http({
    url: "/home/hot",
  });
}
