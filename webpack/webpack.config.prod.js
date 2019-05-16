const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin
const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

const config = require("./webpack.config.js")

module.exports = Object.assign({}, config, {
  mode: "production",
  stats: require("./webpack.stats.config.js"),
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "[name]-[contenthash].js",
    chunkFilename: "[name]-[contenthash].js"
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 30000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]
            return `npm.${packageName.replace("@", "")}`
          }
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
      chunkFilename: "[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new CopyPlugin([
      { context: config.context, from: "assets" }
    ]),
    new BundleAnalyzerPlugin()
  ]
})
