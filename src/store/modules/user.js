import { getAuth, setAuth, removeAuth } from '@/utils/auth';
import { login_api, logout_api } from '@/api/login';

export const user = {
  state: {
    token: getAuth()
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },
  actions: {
    login({ commit }, data) {
      return login_api(data).then(({ data }) => {
        setAuth(data.token);
        commit("SET_TOKEN", data.token);
      });
    },
    logout({ state, commit }) {
      removeAuth();
      commit("SET_TOKEN", '');
      logout_api();
      return Promise.resolve();
    }
  }
};
