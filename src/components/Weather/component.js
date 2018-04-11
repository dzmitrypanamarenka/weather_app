import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';
import _ from 'lodash';

import { getIconLink, getRound } from '../../utils';
import './styles.css';

export default class Weather extends Component {
  checkWeather = (coords) => {
    this.props.receiveForecastAsync(coords);
  };

  componentDidMount () {
    this.props.receiveMapCoordsAsync();
    const { coords } = this.props.mapConfig;
    this.checkWeather(coords);
  }

  componentDidUpdate (prevProps, prevState) {
    const newCoords = this.props.mapConfig.coords;
    const actualCoords = prevProps.mapConfig.coords;

    if (!_.isEqual(newCoords, actualCoords)) {
      this.checkWeather(newCoords);
    }
  }

  render () {
    const { forecastData } = this.props.forecast;

    if (!forecastData) {
      return null;
    }
    const iconLink = getIconLink(forecastData.weather);

    return <div className="weather-container">
      <div className="blur-wrap">
        <Jumbotron className="forecast-wrap">
          <h2 className="title -place">{forecastData.name},{forecastData.sys.country}</h2>
          <h1 className="title -temp">{getRound(forecastData.main.temp)}°C</h1>
          <img className="image" src={iconLink} alt=""/>
          <ul className="list">
            <li className="item">
              <span className="title">Humidity:</span>
              <span className="title -data">{getRound(forecastData.main.humidity)}%</span>
            </li>
            <li className="item">
              <span className="title">Pressure:</span>
              <span className="title -data">{getRound(forecastData.main.pressure)}hPa</span>
            </li>
            <li className="item">
              <span className="title">Wind:</span>
              <span className="title -data">{getRound(forecastData.wind.speed)}m/s</span>
            </li>
          </ul>
        </Jumbotron>
      </div>
    </div>;
  }
}

Weather.propTypes = {
  forecast: PropTypes.object,
  mapConfig: PropTypes.object,
  receiveForecastAsync: PropTypes.func,
  receiveMapCoordsAsync: PropTypes.func,
};
