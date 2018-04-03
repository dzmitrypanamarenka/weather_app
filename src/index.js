import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route } from 'react-router-dom';
import browserHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';
import './styles/fonts.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';
import Weather from './containers/Weather';
import MapContainer from './containers/MapContainer';

const history = browserHistory();
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);


render(
    <Provider store={store}>
      <Router history={ history }>
        <div className="router-wrap">
          <Route exact path="/" component={ MapContainer }/>
          <Route path="/weather" component={ Weather }/>
        </div>
      </Router>
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
