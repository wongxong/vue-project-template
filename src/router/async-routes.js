/**
 * 所有的 懒加载路由 文件都放在 当前目录的 modules 文件夹下
 * routes 文件 导出格式:
 * export default []
 */

let AsyncRoutes = [];

// 自动加载 module 文件夹下的所有 routes 文件
const context = require.context("./modules", false, /\.js$/);

context.keys().forEach(key => {
  Object.keys(context(key)).forEach(name => {
    AsyncRoutes = AsyncRoutes.concat(context(key)[name]);
  });
});

export default AsyncRoutes;
