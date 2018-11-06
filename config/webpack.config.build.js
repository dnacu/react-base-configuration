const path = require('path')

module.exports = {
  cache: true,
  // 개발자도구에서 웹팩이 돌면서 난독화된 파일을
  // 원래 파일과 맵핑시켜줌으로써 좀 더 정확한 정보를 얻을 수 있음.
  devtool: 'cheap-module-inline-source-map',
  mode: 'production',
  entry: ['@babel/polyfill', path.resolve('app/src/index.js')],
  performance: { hints: false },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules', path.resolve('app/src')],
  },
  output: {
    path: path.resolve('build'),
    filename: 'build.[name].js',
    publicPath: '/',
  },
  devServer: require('./webpack.devServer.js'),
  module: require('./webpack.config.build.module.js'),
  plugins: require('./webpack.config.build.plugins.js'),
  optimization: {
    namedModules: true, // NamedModulesPlugin()
  },
}
