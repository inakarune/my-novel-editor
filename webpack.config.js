module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
  
    // 빌드 결과물을 dist/main.js에 위치
    output: {
      filename: "main.js",
      path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", '.js']
    },
  
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            limit: 1024,
            name: '[name].[ext]'
          }
        },
        {
          test: /\.(jpg|png|svg)$/,
          use: {
              loader: 'url-loader',
              options: {
                  limit: 25000
              }
          }
        }
      ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        publicPath: '/dist'
    }
};