/* eslint-disable */
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
  appPath,
  buildPath,
  srcPath,
  indexHtmlPath,
} = require('./paths');

dotenv.config();

module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  entry: {
    main: [ 'babel-polyfill', appPath ]
  },
  output: {
    path: buildPath,
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '',
  },
  resolve: {
    alias: {
      config$: './jest.config.js',
      react: require.resolve('react'),
    },
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
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
            test: /\.(js|jsx|mjs)$/,
            include: srcPath,
            loader: 'babel-loader',
            options: {

              compact: true,
            },
          },
          {
            test: [/\.ejs$/, /\.html$/],
            loader: 'ejs-compiled-loader',
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
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
            loader: 'file-loader',
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: indexHtmlPath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/main.[contenthash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'APPID': JSON.stringify(process.env.APPID),
        'APIKEY': JSON.stringify(process.env.APIKEY),
      }
    }),
    new WebpackMd5Hash(),
  ],
  target: 'web',
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
