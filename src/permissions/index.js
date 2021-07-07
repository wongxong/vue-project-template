import router from '@/router';
import store from '@/store';
import { getAuth } from '@/utils/auth';
import { Message } from 'element-ui';

const LOGIN_PATH = '/sign_in';
const ROOT_PATH = '/';

router.beforeEach((to, from, next) => {
  if (getAuth()) {
    if (to.path === LOGIN_PATH) {
      next(ROOT_PATH);
    } else if (!store.getters.asyncRoutes.length) {
      store.dispatch('getAsyncRoutes')
        .then(_ => {
          next({ ...to, replace: true });
        })
        .catch(err => {
          store.dispatch("logout");

          Message.error(err || 'Verification failed, please try again');
        });
    } else {
      next();
    }
  } else {
    if (to.path === LOGIN_PATH) {
      next();
    } else {
      next({
        path: LOGIN_PATH,
        query: {
          redirect_url: to.fullPath
        }
      });
    }
  }
});