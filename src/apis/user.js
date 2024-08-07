import http from "@/utils/http.js";

//登录
export function getLoginAPI(account, password) {
  return http({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
}

//添加商品到购物车
export function getAddGood(skuId, count) {
  return http({
    url: "/member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    },
  });
}

//获取购物车列表
export function getCartList() {
  return http({
    url: "/member/cart",
  });
}

//修改购物车商品
export function getAlterCart(skuId, selected, count) {
  return http({
    url: "/member/cart",
    method: "PUT",
    param: {
      skuId,
    },
    data: {
      selected,
      count,
    },
  });
}

//删除购物车商品
export function getDelGood(ids) {
  return http({
    url: "/member/cart",
    method: "DELETE",
    data: {
      ids,
    },
  });
}

//合并购物车商品
export function mergeCart(data) {
  return http({
    url: "/member/cart/merge",
    method: "POST",
    data,
  });
}
