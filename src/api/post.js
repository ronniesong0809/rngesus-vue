import request from "@/utils/request";

export function getList(current, size, tab) {
  return request({
    url: "/post/list",
    method: "get",
    params: { current: current, size: size, tab: tab }
  });
}
