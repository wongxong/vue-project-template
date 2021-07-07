import { post } from "@/utils/request";

export function login_api(data) {
  return post("/login", data)
}

export function logout_api(data) {
  return post("/logout", data)
}

export function get_async_routes_api() {
  return import("@/router/async-routes.js").then(res => res["default"]);
}