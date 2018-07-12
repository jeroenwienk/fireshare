import dotenv from 'dotenv';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

dotenv.config();

const config = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: {
    bundle: [path.resolve(__dirname, 'src/index.js')]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devServer: {
    publicPath: '/',
    host: '127.0.0.1',
    port: process.env.PORT || 3000,
    hot: true,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'FB_API_KEY',
      'FB_AUTH_DOMAIN',
      'FB_PROJECT_ID',
      'FB_STORAGE_BUCKET'
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

export default config;
