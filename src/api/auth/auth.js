import request from "@/utils/request";

export function userSignup(data) {
  return request({
    url: "/user/signup",
    method: "post",
    data
  });
}

export function userLogin(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}

export function getUserInfo() {
  return request({
    url: "/user/info",
    method: "get"
  });
}

export function userLogout() {
  return request({
    url: "/user/logout",
    method: "get"
  });
}
