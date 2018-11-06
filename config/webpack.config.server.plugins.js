const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const stringify = obj => {
  const stringified = {}
  Object.entries(obj).forEach(([key, value]) => {
    stringified[key] = JSON.stringify(value)
  })
  return stringified
}

module.exports = [
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve('app/assets/index.html'),
  }),

  // 전역에서 process.env객체로 접근 가능
  new webpack.DefinePlugin({
    'process.env': stringify({
      BUILD_DATE: new Date(),
      BUILD_NUMBER: process.env.BUILD_NUMBER || 0,
      BUILD_BRANCH: process.env.BRANCH || 'local',
      DEVELOPMENT: process.env.DEVELOPMENT || false,
      TARGET: 'server',
    }),
  }),

  // 자동 import
  new webpack.ProvidePlugin({
    React: 'react',
    PropTypes: 'prop-types',
    cx: 'classnames',
  }),

  new webpack.HotModuleReplacementPlugin(),
].filter(Boolean)
