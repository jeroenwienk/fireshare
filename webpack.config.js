import dotenv from 'dotenv';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

dotenv.config();

const config = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false,
  target: 'web',
  entry: {
    bundle: [path.resolve(__dirname, 'src/index.js')]
  },
  output: {
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
    },
    runtimeChunk: true,
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

        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            loader: 'file-loader',
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          }
        ],


      },


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
    ])
  ]
};

switch (process.env.NODE_ENV) {
  case 'development':
    config.plugins = config.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]);
    break;
  case 'production':
    config.plugins = config.plugins.concat([]);
    break;
  default:
    config.plugins = config.plugins.concat([]);
}

export default config;
