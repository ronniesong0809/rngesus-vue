import request from "@/utils/request";

export function userSignup(data) {
  return request({
    url: "/ums/user/signup",
    method: "post",
    data
  });
}

export function userLogin(data) {
  return request({
    url: "/ums/user/login",
    method: "post",
    data
  });
}

export function getUserInfo() {
  return request({
    url: "/ums/user/info",
    method: "get"
  });
}

export function userLogout() {
  return request({
    url: "/ums/user/logout",
    method: "get"
  });
}
