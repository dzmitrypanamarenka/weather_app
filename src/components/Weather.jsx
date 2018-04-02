import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import _ from 'lodash';
import getIconLink from '../lib/getIconLink';
import getCoords from "../lib/getCoords";

export default class Weather extends Component {
  checkWeather = (coords) => {
    console.log('Weather: checkWeather')
    console.log(coords)
    this.props.receiveForecast(coords);
  };

  async componentDidMount() {
    const {sendError, updateMap} = this.props;
    const coords = await getCoords();
    if (coords instanceof Error) {
      return sendError(coords);
    }
    this.checkWeather(coords);
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('Weather: receive')
  //   const newCoords = nextProps.options.coords;
  //   const actualCoords = this.props.options.coords;
  //   if (!_.isEqual(newCoords, actualCoords)) {
  //     this.checkWeather(newCoords);
  //   }
  // }

  render() {
    console.log('Weather: render')
    const {forecastData} = this.props.forecast;

    if (!forecastData) {
      return null;
    }
    const iconLink = getIconLink(forecastData.weather);
    return <Jumbotron>
      <h2 className="title -place">{forecastData.name}</h2>
      <h1 className="title -temp">{forecastData.main.temp}</h1>
      <img className="image" src={iconLink}/>
      <ul className="list">
        <li className="item">
          <span className="label">Humidity</span>
          <span className="data">{forecastData.main.humidity}</span>
        </li>
        <li className="item">
          <span className="label">Pressure</span>
          <span className="data">{forecastData.main.pressure}</span>
        </li>
        <li className="item">
          <span className="label">Wind</span>
          <span className="data">{forecastData.wind.speed}</span>
        </li>
      </ul>
    </Jumbotron>
  }
}