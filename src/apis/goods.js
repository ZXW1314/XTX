import http from "@/utils/http.js";

//商品详情
export function getGoodDetailAPI(id) {
  return http({
    url: "/goods",
    method: "get",
    params: {
      id,
    },
  });
}

//热榜商品
export function getHotGoodsAPI(id, type = 1, limit = 3) {
  return http({
    url: "/goods/hot",
    method: "get",
    params: {
      id,
      type,
      limit,
    },
  });
}
