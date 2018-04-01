
import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import _ from 'lodash';
import * as errors from "../lib/errors";
import MapContainer from '../containers/MapContainer';

class App extends Component {
  getCoords = () => {
    const { sendError, updateMap, options } = this.props;

    if (!navigator.geolocation) {
      return sendError(new errors.GeoAbsence());
    }
    navigator.geolocation.getCurrentPosition(position => {
      const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      if (_.isEqual(options.coords, coords)) {
        return false;
      }
      updateMap(coords);
    }, () => {
      sendError(new errors.GeoFailed());
    })
  };

  componentDidMount() {
    this.getCoords();
  }

  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        <MapContainer/>
      </div>
    );
  }
}

export default App;
