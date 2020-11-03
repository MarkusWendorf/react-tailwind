/* eslint-disable @typescript-eslint/no-var-requires */
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".css"],
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
    new CopyWebpackPlugin({ patterns: [{ from: "assets" }, { from: "src/index.html" }] }),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = config;
