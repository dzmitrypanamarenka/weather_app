import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  Map,
  Marker,
  InfoWindow,
  MessageContainer as Message,
} from '../../containers';
import './styles.css';

const Location = () => (
  <div className='container'>
    <Jumbotron>
      <h1 className="title">Hi, fellow!</h1>
      <p className="text">Check out my amazing weather app. Buckle up and let your browser find your
        geoposition!</p>
      <Button bsStyle="primary">
        <Link className='link -weather' to={'weather'}>Forecast</Link>
      </Button>
    </Jumbotron>
    <div className='wrap' id='map'>
      <Map>
        <Marker/>
        <InfoWindow>
          <Message/>
        </InfoWindow>
      </Map>
    </div>
  </div>
);

export default Location;

Location.propTypes = {
  mapInfo: PropTypes.object,
  mapConfig: PropTypes.object,
  receiveMapCoordsAsync: PropTypes.func,
  renewMapInfo: PropTypes.func,
  bindMapEvents: PropTypes.func,
};




