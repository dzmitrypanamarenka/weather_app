import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';

import { getIconLink, getRound } from '../../utils';
import './styles.css';

const Weather = (props) => {
  const { forecastData } = props.forecast;

  const { weather, name, main, sys: { country }, wind: { speed } } = forecastData;
  const { temp, humidity, pressure } = main;
  const iconLink = getIconLink(weather);

  return <div className="weather-container">
    <div className="blur-wrap">
      <Jumbotron className="forecast-wrap">
        <h2 className="title -place">{name},{country}</h2>
        <h1 className="title -temp">{getRound(temp)}°C</h1>
        <img className="image" src={iconLink} alt=""/>
        <ul className="list">
          <li className="item">
            <span className="title">Humidity:</span>
            <span className="title -data">{getRound(humidity)}%</span>
          </li>
          <li className="item">
            <span className="title">Pressure:</span>
            <span className="title -data">{getRound(pressure)}hPa</span>
          </li>
          <li className="item">
            <span className="title">Wind:</span>
            <span className="title -data">{getRound(speed)}m/s</span>
          </li>
        </ul>
      </Jumbotron>
    </div>
  </div>;
};

export default Weather;

Weather.propTypes = {
  forecast: PropTypes.object,
  mapConfig: PropTypes.object,
  receiveForecastAsync: PropTypes.func,
  receiveMapCoordsAsync: PropTypes.func,
};
