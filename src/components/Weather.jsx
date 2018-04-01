import React, { Component } from 'react';
import _ from 'lodash';

export default class Weather extends Component {
  checkWeather = (coords) => {
    this.props.receiveForecast(coords);
  };
  componentDidMount() {
    this.checkWeather(this.props.options.coords);
  }
  componentWillReceiveProps(nextProps){
    const newCoords = nextProps.options.coords;
    const actualCoords = this.props.options.coords;
    if(!_.isEqual(newCoords, actualCoords)){
      this.checkWeather(newCoords);
    }
  }
  render() {
    const { forecastData } = this.props.forecast;
    if(!forecastData){
      return <div>hui</div>;
    }
    const toStrings = Object.keys(forecastData).map((el) => `${[el]}: ${forecastData[el]}`);
    return <div>{toStrings}</div>
  }
}