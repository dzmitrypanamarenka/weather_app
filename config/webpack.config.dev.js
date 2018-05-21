/* eslint-disable */
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');

const {
  publicPath,
  appPath,
  srcPath,
  indexHtmlPath,
} = require('./paths');

dotenv.config();

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'react-dev-utils/webpackHotDevClient',
    appPath
  ],
  output: {
    pathinfo: true,
    filename: 'static/js/main.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath,
  },
  resolve: {
    alias: {
      config$: './jest.config.js',
      react: require.resolve('react'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
            },
            loader: 'eslint-loader',
          },
        ],
        include: srcPath,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx)$/,
            include: srcPath,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                'es2015',
                ['env', {
                  targets: {
                    node: 'current'
                  }
                }],
                'stage-0',
                'react'
              ],
            },
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9',
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new HtmlWebpackPlugin({
      inject: true,
      template: indexHtmlPath,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'APPID': JSON.stringify(process.env.APPID),
        'APIKEY': JSON.stringify(process.env.APIKEY),
      }
    }),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
  devServer: {
    publicPath,
    open: true,
    port: 3000,
    hot: true,
    contentBase: srcPath,
    compress: true,
    overlay: false,
    quiet: true,
    watchContentBase: true,
    historyApiFallback: true,
    before (app) {
      app.use(errorOverlayMiddleware());
      app.use(noopServiceWorkerMiddleware());
    },
  },
};
