const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      scriptLoading: 'defer',
      inject: 'head'
      // favicon: './public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: 'styles/[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        sideEffects: true
      },
      {
        test: /\.(webp|jpe?g|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name].[ext]'
        }
      },
      {
        test: /\.ico$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|ttf)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[ext]'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
