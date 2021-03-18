import { userLogin } from "@/api/auth/auth";
import { getToken, setToken } from "@/utils/auth";

const state = {
  token: getToken(),
  user: ""
};

const mutations = {
  SET_TOKEN_STATE: (state, token) => {
    state.token = token;
  }
};

const actions = {
  Login({ commit }, userInfo) {
    const { username, password, rememberMe } = userInfo;

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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
