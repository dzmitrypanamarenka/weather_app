import React, { Component } from 'react';

export default class Weather extends Component {
  checkWeather = () => {
    this.props.receiveForecast(this.props.options.coords);
  };
  componentDidMount(){
    this.checkWeather();
  }
  render() {
    console.log(this.props)
    return <div>hello</div>
  }
}