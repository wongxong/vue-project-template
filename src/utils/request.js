import axios from 'axios';
import qs from 'qs';
import store from '@/store';
import { getAuth } from './auth';
import { Message } from 'element-ui';

export const CancelToken = axios.CancelToken;

export const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || '',
  timeout: 3 * 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;chartset=utf-8"
  },
  paramsSerializer: params => {
    return params && qs.stringify(params, { arrayFormat: "brackets", skipNulls: true });
  },
  transformRequest: [
    data => data && qs.stringify(data, { arrayFormat: "brackets", skipNulls: true })
  ]
});

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getAuth();
    }
    return config;
  },
  error => {
    console.log('【interceptors.request】', error);
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  ({ data }) => {
    if (process.env.NODE_ENV !== "production") {
      console.log(data);
    }
    // if (data === "Unauthorized") {
    //   store.dispatch("logout").then(() => {
    //     window.location.reload();
    //   });
    //   return Promise.reject("Unauthorized");
    // }
    // if (data.meta) {
    //   if (data.meta.code === 200) {
    //     return data.response;
    //   }

    //   if (data.meta.code === 400) {
    //     globalErrorNotify(data.meta);
    //     return Promise.reject(data.meta);
    //   }
    // }
    return data;
  },
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       // 请自行在引入 MessageBox
  //       // import { Message, MessageBox } from 'element-ui'
  //       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //         confirmButtonText: '重新登录',
  //         cancelButtonText: '取消',
  //         type: 'warning'
  //       }).then(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           location.reload() // 为了重新实例化vue-router对象 避免bug
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  error => {
    console.log("【interceptors.response", error);
    globalErrorNotify(error);
    return Promise.reject(error);
  }
);

export function globalErrorNotify(error) {
  if (typeof error === "string") {
    error = { error };
  }

  Message({
    message: error.message,
    type: "error",
    duration: 5 * 1000
  });
}

export const request = service;

export function get(url, params) {
  return service({
    method: 'get',
    url,
    params
  })
}

export function post(url, data) {
  return service({
    method: 'post',
    url,
    data
  })
}