const path = require('path');
const http = require('http');
const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './ux'
    : '/swagger-stats/ux',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/swagger-stats/ux/stats': {
        target: 'http://localhost:3040/swagger-stats/stats',
        // This enables keepalive via proxy
        // See https://github.com/http-party/node-http-proxy/issues/767
        agent: http.globalAgent
      }
    }
  },

  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'manual',
      rtlSupport: false,
      treeShake: true
    }
  },

  transpileDependencies: ['quasar']

};
