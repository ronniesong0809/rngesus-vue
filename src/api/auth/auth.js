import request from "@/utils/request";

export function userSignup(userDTO) {
  return request({
    url: "/ums/user/signup",
    method: "post",
    data: userDTO,
  });
}
