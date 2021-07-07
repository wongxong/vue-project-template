/**
 * 所有的 mock 文件都放在 当前目录的 modules 文件夹下
 * mock 文件 导出格式: { a: {}, b: {}, c: {}, default: {} }
 * {
 *    baseURL, --- url 前缀, 不传递默认取 process.env.VUE_APP_BASE_URL, 若不需要，设置为 false
 *    url, --- 需要拦截的请求的 url, String | RegExp
 *    method, --- 需要拦截的请求 method, 默认为 GET, GET | POST | PUT | UPDATE | DESTROY
 *    template --- mock 的模板, Object | String | Function
 * }
 *
 * 如果是 /article/1 类似的 url, 需要转换成 /article/:id 这种 vue-router 的路由形式
 */

import Mock from "mockjs";

// 设置 mockjs 请求 timeout
Mock.setup({
  timeout: "500-2500"
});

// 自动加载 module 文件夹下的所有 mock 文件
const context = require.context("./modules", true, /\.js$/);

context.keys().forEach(key => {
  Object.keys(context(key)).forEach(paramsKey => {
    let {
      baseURL = process.env.VUE_APP_BASE_URL,
      url,
      method = "get",
      template
    } = context(key)[paramsKey];
    if (baseURL !== false && typeof baseURL !== 'undefined') {
      url = baseURL + url;
    }
    if (url.match(/(:\w+)/)) {
      url = url.replace(/(:\w+)/g, "\\w+");
      url = new RegExp(url);
    }
    Mock.mock(url, method, template);
  });
});
