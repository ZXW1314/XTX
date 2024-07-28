import http from "@/utils/http.js";

//banner轮播图
export function getBannerAPI(distributionSite = "1") {
  return http({
    url: "/home/banner",
    params: {
      distributionSite,
    },
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

//首页商品
export function getGoods() {
  return http({
    url: "/home/goods",
  });
}
