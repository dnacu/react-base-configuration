const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // exports를 빼먹었을 때 warning대신 error를 뱉는다.
  strictExportPresence: true,
  rules: [
    {
      test: /\.(js|jsx)$/,
      enforce: 'pre',
      use: require.resolve('eslint-loader'),
      include: path.resolve('app/src'),
      exclude: path.resolve('node_modules'),
    },
    {
      exclude: [
        /\.html$/,
        /\.json$/,
        /\.bmp$/,
        /\.gif$/,
        /\.jpe?g$/,
        /\.png$/,
        /\.woff$/,
        /\.ttf$/,
        /\.eot$/,
        /\.otf$/,
        /\.(js|jsx)$/,
        /\.(ts|tsx)$/,
        /\.css$/,
      ],
      loader: require.resolve('file-loader'),
      options: { name: 'static/[name].[hash:6].[ext]' },
    },
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      include: path.resolve('app/src'),
      exclude: path.resolve('node_modules'),
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
    },
    {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve('file-loader'),
      options: { name: 'images/[name].[hash:6].[ext]' },
    },
    {
      test: [/\.woff$/, /\.ttf$/, /\.eot$/, /\.otf$/],
      loader: require.resolve('file-loader'),
      options: { name: 'fonts/[name].[hash:6].[ext]' },
    },
  ],
}
