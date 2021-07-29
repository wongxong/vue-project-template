import Vue from 'vue';
import VueRouter from 'vue-router';
import CONSTANT_ROUTES from "./constant-routes";
// import ASYNC_ROUTES from './async-routes';
import { transformRoutes } from "./routes-helper";

const isProduction = process.env.NODE_ENV === "production";
const original_push = VueRouter.prototype.push;

VueRouter.prototype.push = function (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return original_push.apply(this, arguments);
  }
  return original_push.apply(this, arguments).catch(err => err);
};

Vue.use(VueRouter);

const routes = transformRoutes(CONSTANT_ROUTES);

let scrollBehaviorTimer;

const router = new VueRouter({
  mode: isProduction ? "history" : "hash",
  baseURL: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (scrollBehaviorTimer) {
        clearTimeout(scrollBehaviorTimer);
        scrollBehaviorTimer = null;
      }
      scrollBehaviorTimer = setTimeout(() => {
        scrollBehaviorTimer = null;
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ x: 0, y: 0 });
        }
      }, 200);
    })
  }
});

export default router;