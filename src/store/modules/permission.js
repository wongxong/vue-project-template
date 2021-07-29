import CONSTANT_ROUTES from "@/router/constant-routes";
import { get_async_routes_api } from '@/api/login';
import { transformRoutes } from "@/router/routes-helper";
import router from "@/router";

export const permission = {
  state: {
    asyncRoutes: [],
    routes: CONSTANT_ROUTES
  },
  mutations: {
    SET_ASYNC_ROUTES(state, routes) {
      state.routes = [].concat(state.routes, routes);
      state.asyncRoutes = transformRoutes(routes);
      state.asyncRoutes.forEach(route => {
        router.addRoute(route);
      });
    }
  },
  actions: {
    getAsyncRoutes({commit}) {
      return get_async_routes_api().then(routes => {
        commit('SET_ASYNC_ROUTES', routes);
      });
    }
  }
};
