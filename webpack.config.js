const path = require("path");

module.exports = {
  entry: "./client/index.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
              "babel-preset-airbnb",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js",
  },
};
