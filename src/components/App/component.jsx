import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import store from "../../redux/store";
import browserHistory from 'history/createBrowserHistory';
import { MapContainer, Weather } from "../../containers";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import '../../assets/font_styles.css';

const history = browserHistory();

export default () => <Provider store={store}>
  <Router history={ history }>
    <div className="router-wrap">
      <Route exact path="/" component={ MapContainer }/>
      <Route path="/weather" component={ Weather }/>
    </div>
  </Router>
</Provider>