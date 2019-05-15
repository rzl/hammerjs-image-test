module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main2.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    port: 8087
  } 
}