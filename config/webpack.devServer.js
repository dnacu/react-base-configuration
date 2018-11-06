'use strict'

const proxyTarget = ''

module.exports = {
  compress: true,
  disableHostCheck: true,
  publicPath: '/',
  https: process.env.HTTPS || false,
  host: '0.0.0.0',
  port: process.env.PORT || null,
  hot: true,
  historyApiFallback: {
    disableDotRule: true,
  },
  proxy: {
    '/api/': {
      target: proxyTarget,
      secure: false,
      changeOrigin: true,
    },
  },
}
