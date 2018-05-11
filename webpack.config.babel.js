import autoprefixer from 'autoprefixer';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import eslintFormatter from 'react-dev-utils/eslintFormatter';
import dotenv from 'dotenv';
// import devServerClient from 'webpack-dev-server/client';
// import devServerHot from 'webpack/hot/dev-server';

// import paths from './config/paths';
const publicPath = '/';
const envs = dotenv.config();
// const client = devServerClient();
// const hot = devServerHot();

// console.log(devServerClient);
// console.log(devServerHot);

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  entry: [
    // `${client}?/`,
    // hot,
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.web.jsx', '.jsx'],
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
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.join(__dirname, 'src'),
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: path.join(__dirname, 'src'),
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
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
            loader: require.resolve('file-loader'),
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
      template: path.join(__dirname, 'public/index.html'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(envs),
    new webpack.HotModuleReplacementPlugin(),
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
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3000,
    hot: true,
  },
};
