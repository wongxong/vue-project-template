import Vue from 'vue';
import VueRouter from 'vue-router';
import CONSTANT_ROUTES from "./constant-routes";
import ASYNC_ROUTES from './async-routes';
import { transformRoutes } from "./routes-helper";

const original_push = VueRouter.prototype.push;

VueRouter.prototype.push = function(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return original_push.apply(this, arguments);
  }
  return original_push.apply(this, arguments).catch(err => err);
};

Vue.use(VueRouter);

const routes = transformRoutes([].concat(CONSTANT_ROUTES, ASYNC_ROUTES));

const router = new VueRouter({
  routes
});

export default router;