import http from "@/utils/http.js";

//二级列表
export function getCategorySecondAPI(id) {
  return http({
    url: "/category",
    method: "get",
    params: {
      id,
    },
  });
}

//sub导航信息
export function getSubCategoryAPI(id) {
  return http({
    url: "/category/sub/filter",
    method: "get",
    params: {
      id,
    },
  });
}

//subCategory商品列表
export function getSubGoodsAPI(data) {
  return http({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
}
