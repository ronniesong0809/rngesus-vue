import { userLogin, userLogout, getUserInfo } from "@/api/auth/auth";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken(),
  userinfo: ""
};

const mutations = {
  SET_TOKEN_STATE: (state, token) => {
    state.token = token;
  },
  SET_USERINFO_STATE: (state, userinfo) => {
    state.userinfo = userinfo;
  }
};

const actions = {
  Login({ commit }, userLoginInfo) {
    const { username, password, rememberMe } = userLoginInfo;

    return new Promise((resolve, reject) => {
      userLogin({
        username: username.trim(),
        password: password,
        rememberMe: rememberMe
      })
        .then(response => {
          const { data } = response;

          commit("SET_TOKEN_STATE", data.token);
          setToken(data.token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  Logout({ commit }) {
    return new Promise((resolve, reject) => {
      userLogout(state.token)
        .then(response => {
          console.log(response);
          commit("SET_TOKEN_STATE", "");
          commit("SET_USERINFO_STATE", "");
          removeToken();
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then(response => {
          const { data } = response;

          if (!data) {
            commit("SET_TOKEN_STATE", "");
            commit("SET_USERINFO_STATE", "");
            removeToken();
            resolve();
            reject("Authorization Failed! Please Login again!");
          }
          commit("SET_USERINFO_STATE", data);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
