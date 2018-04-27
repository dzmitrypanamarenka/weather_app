import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from '../../redux/store';
import { LocationContainer, WeatherContainer } from '../../containers';
import { Location, Weather } from '../../components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import '../../assets/font_styles.css';

export default () => <Provider store={store}>
  <BrowserRouter>
    <div className="router-wrap">
      <Route exact path="/" component={ LocationContainer(Location) }/>
      <Route path="/weather" component={ WeatherContainer(Weather) }/>
    </div>
  </BrowserRouter>
</Provider>;
