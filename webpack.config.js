const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const srcDirectory = path.resolve(__dirname, "src");
const outDirectory = path.resolve(__dirname, "www");


const config = {
  entry: srcDirectory + "/index.tsx",
  output: {
    path: outDirectory,
    publicPath: "",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", options: {importLoaders: 1},
          },
          "postcss-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".css", ".scss"],
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: outDirectory,
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: "assets/*"},
      {from: "src/index.html"},
    ]),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = config;
