import request from "@/utils/request";

export function getList(current, size, tab) {
  return request({
    url: "/post/list",
    method: "get",
    params: {
      current: current,
      size: size,
      tab: tab
    }
  });
}

export function getPost(id) {
  return request({
    url: "/post/detail",
    method: "get",
    params: {
      id: id
    }
  });
}

export function createPost(topic) {
  return request({
    url: "/post/create",
    method: "post",
    data: topic
  });
}
