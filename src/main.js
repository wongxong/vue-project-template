import "minireset.css";
import './assets/css/index.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './global-component';
import './permissions';

if (process.env.NODE_ENV !== 'production') {
  import('./mock');
}

Vue.config.productionTip = false;

createApp();

function createApp() {
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');

  if (process.env.NODE_ENV !== "production") {
    window.app = app;
  }
}
