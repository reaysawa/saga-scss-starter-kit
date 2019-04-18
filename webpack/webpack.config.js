/* eslint-disable */
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const getLocalIdent = require("css-loader/dist/utils").getLocalIdent
const isDev = process.env.NODE_ENV === "development"
const isProd = process.env.NODE_ENV === "production"
const context = path.resolve(__dirname, "../")

let config = {
  entry: "./src/index",
  context,
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  resolve: {
    modules: [
      context,
      path.join(context, "node_modules"),
      path.join(context, "packages")
    ],
    extensions: [".js", ".jsx", ".bundle.js", ".bundle.jsx", ".scss"]
  },
  resolveLoader: {
    modules: [path.join(context, "node_modules")]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ],
        exclude: function(path) {
          if (path.match(/node_modules/)) {
            return !path.match(/rudy/)
          }
          return false
        }
      },
      {
        test: /\.bundle\.jsx?$/,
        use: [
          {
            loader: "bundle-loader",
            options: {
              lazy: true
            }
          },
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.scss|\.css$/,
        use: [
          isProd
            ? MiniCssExtractPlugin.loader
            : {
                loader: "style-loader",
                query: {
                  sourceMap: isDev
                }
              },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDev,
              getLocalIdent: (
                loaderContext,
                localIdentName,
                localName,
                options
              ) => {
                return loaderContext.resourcePath.includes("node_modules")
                  ? localName
                  : getLocalIdent(
                      loaderContext,
                      localIdentName,
                      localName,
                      options
                    )
              },
              localIdentName: "[folder]-[local]-[hash:6]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: isDev
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
