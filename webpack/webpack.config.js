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
  resolveLoader: {
    modules: [path.join(context, "node_modules")]
  },
  resolve: {
    modules: [
      path.join(context, "node_modules"),
      context
    ],
    extensions: ['.scss', '.js']
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
        exclude: /node_modules/
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
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
}

module.exports = config
