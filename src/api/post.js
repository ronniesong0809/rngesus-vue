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

export function createPost(post) {
  return request({
    url: "/post/create",
    method: "post",
    data: post
  });
}

export function editPost(post) {
  return request({
    url: "/post/edit",
    method: "post",
    data: post
  });
}
