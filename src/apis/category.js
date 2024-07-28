import http from "@/utils/http.js";

//二级列表
export function getCategorySecondAPI(id) {
  return http({
    url: "/category",
    methods: "get",
    params: {
      id,
    },
  });
}
