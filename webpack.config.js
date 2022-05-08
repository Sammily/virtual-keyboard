const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    contentBase: path.join(__dirname),
  }
}
const esLintplugin = (isDev) => isDev ? [] : [new ESLintPlugin({ extensions: ['js']}),]

module.exports = ({develop}) => ({
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  mode: develop ? "development" : "production",
  devtool: develop ? "inline-source-map" : false,
  
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolveLoader: {
    extensions: [".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //template: './src/index.html'
    }),
    ...esLintplugin(develop),
  ],
  ...devServer(develop)
});
