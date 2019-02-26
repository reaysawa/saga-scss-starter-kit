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
    path: path.join(__dirname, '../public'),
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name]-[contenthash].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HashAllModulesPlugin()
  ]
})
