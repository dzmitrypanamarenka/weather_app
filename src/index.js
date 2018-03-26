import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';
import App from './components/App';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
