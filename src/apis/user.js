import http from "@/utils/http.js";

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
