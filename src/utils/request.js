import axios from "axios";
import { Message, MessageBox } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 5000
});

service.defaults.withCredentials = false;

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.code !== 200) {
      if (res.code === 401) {
        MessageBox.confirm("Error, please login!", "Error!", {
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
          type: "warning",
          center: true
        }).then(() => {
          window.location.href = "#/login";
        });
      } else {
        Message({
          showClose: true,
          message: res.message || "Error",
          type: "error",
          duration: 3000
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    Message({
      showClose: true,
      message: error.message,
      type: "error",
      duration: 5000
    });
    return Promise.reject(error);
  }
);

export default service;
