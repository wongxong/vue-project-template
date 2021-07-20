// gzip 压缩 plugin
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 7777
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/css/variable";
        `
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"));

    config.plugin("html").tap(args => {
      args[0].title = "xxx";
      return args;
    });

    // 移除 prefetch 插件
    config.plugins.delete('prefetch');

    config.module.rule("svg").exclude.add(resolve("src/icons/svg"));

    config.module
      .rule("icons")
      .test(/\.(svg)(\?.*)?$/)
      .include.add(resolve("src/icons/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();

    if (isProduction) {
      config.plugin("webpack-dll-plugin").use(webpack.DllPlugin, [
        {
          path: './manifest.json',
          name: '[name]_library'
        }
      ]);
      
      config.plugin("compression").use(CompressionPlugin, [
        {
          test: /\.(js|css|html|json)$/,
          threshold: 1024 * 10
        }
      ]);
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.optimization = {
        splitChunks: {
          chunks: "all",
          minSize: 30 * 1024,
          maxSize: 200 * 1024,
          automaticNameDelimiter: "-",
          cacheGroups: {
            lib: {
              test: /[\\/]node_modules[\\/]/,
              priority: 100,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `chunk.${packageName.replace("@", "")}`;
              }
            }
          }
        }
      };
    }
  }
}
