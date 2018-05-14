import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware';
import noopServiceWorkerMiddleware from 'react-dev-utils/noopServiceWorkerMiddleware';

import { srcPath, publicPath } from './paths';

export default {
  publicPath,
  host: '0.0.0.0',
  hot: true,
  contentBase: srcPath,
  compress: true,
  overlay: false,
  quiet: true,
  watchContentBase: true,
  before (app) {
    app.use(errorOverlayMiddleware());
    app.use(noopServiceWorkerMiddleware());
  },
};
