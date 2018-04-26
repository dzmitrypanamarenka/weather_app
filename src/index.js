import React from 'react';
import { render } from 'react-dom';
import dotenv from 'dotenv';

import registerServiceWorker from './registerServiceWorker';
import { App } from './components';

dotenv.config();

render(
  <App/>,
  document.getElementById('root'),
);

registerServiceWorker();
