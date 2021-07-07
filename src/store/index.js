/**
 * 所有的 store 文件都放在 当前目录的 modules 文件夹下
 * store 文件 导出格式: 
 * export const moduleName = { 
 *   namespaced: true,
 *   state: {}, 
 *   mutations: {}, 
 *   actions: {}, 
 *   modules: {} 
 * }
 * 
 * 内置了一些全局状态, loading 等信息, 
 * 用户自定义添加 store 时，尽量开启 namespaced: true
 */

import Vue from 'vue';
import Vuex from 'vuex';
import getters from "./getters";

Vue.use(Vuex);

const modules = {};

// 自动加载 modules 文件夹下的所有 store 文件
const context = require.context("./modules", false, /\.js$/);

context.keys().forEach(key => {
  Object.keys(context(key)).forEach(name => {
    modules[name] = context(key)[name];
  });
});

export default new Vuex.Store({
  modules,
  getters
});