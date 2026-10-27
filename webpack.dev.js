const { merge } = require('webpack-merge');
const common = require('./webpack.common');
 
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    proxy: {
      '/api/catalog': {
        target: 'https://api.tenrai.org',
        changeOrigin: true,
        pathRewrite: { '^/api/catalog': '/v1' },
        proxyTimeout: 15000,
        timeout: 20000,
      },
    },
  },
});
