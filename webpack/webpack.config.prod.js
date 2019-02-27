const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HashAllModulesPlugin = require("hash-all-modules-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin
const webpack = require("webpack")
const path = require("path")

const config = require("./webpack.config.js")

module.exports = Object.assign({}, config, {
  mode: "production",
  stats: require("./webpack.stats.config.js"),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name]-[contenthash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[chunkhash].css",
      chunkFilename: "[chunkhash].css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HashAllModulesPlugin()
  ]
})
