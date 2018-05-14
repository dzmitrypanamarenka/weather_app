import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const publicPath = '/';
const appPath = path.join(appDirectory, 'src/index.js');
const srcPath = path.join(appDirectory, 'src');
const indexHtmlPath = path.join(appDirectory, 'public/index.html');
const buildPath = path.join(appDirectory, 'build');

export {
  publicPath,
  appPath,
  srcPath,
  indexHtmlPath,
  buildPath,
};
