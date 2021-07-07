import CONSTANT_ROUTES from "@/router/constant-routes";
import { get_async_routes_api } from '@/api/login';

export const permission = {
  state: {
    asyncRoutes: [],
    routes: CONSTANT_ROUTES
  },
  mutations: {
    SET_ASYNC_ROUTES(state, routes) {
      state.routes = [].concat(state.routes, routes);
      state.asyncRoutes = routes;
    }
  },
  actions: {
    getAsyncRoutes({commit}) {
      get_async_routes_api().then(routes => {
        commit('SET_ASYNC_ROUTES', routes);
      });
    }
  }
};
