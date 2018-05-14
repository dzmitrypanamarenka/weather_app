/* eslint-disable */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import chalk from 'chalk';
import openBrowser from 'react-dev-utils/openBrowser';

import config from './webpack.config.dev';
import devServerConfig from './devServer.config';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const compiler = webpack(config);
const appUrl = 'http://localhost:3000';
const host = '0.0.0.0';

const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(3000, host, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(chalk.cyan(
    `Starting the development server...\nAt address - ${appUrl}\n`
  ));
  openBrowser(appUrl);
});




