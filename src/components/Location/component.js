import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, InfoWindow } from '../../containers';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getCoords } from '../../utils';
import './styles.css';

export default class Location extends Component {
  bindEvents = () => {
    const { updateMapInfo, bindMapEvents } = this.props;
    const markerOnClick = (props, marker) => updateMapInfo({ visible: true, marker });
    const mapOnClick = () => this.props.mapInfo.visible ? updateMapInfo({ visible: false }) : null;

    bindMapEvents({ mapOnClick ,markerOnClick });
  };
  async componentDidMount () {
    const { sendMapError, updateMapCoords } = this.props;
    const coords = await getCoords();

    this.bindEvents();
    if (coords instanceof Error) {
      return sendMapError(coords);
    }
    updateMapCoords(coords);
  }
  render () {
    const { content } = this.props.mapInfo;

    return <div className='container'>
      <Jumbotron>
        <h1 className="title">Hi, fellow!</h1>
        <p className="text">Check out my amazing weather app. Buckle up and let your browser find your geoposition!</p>
        <Button bsStyle="primary">
          <Link className='link -weather' to={'weather'}>Forecast</Link>
        </Button>
      </Jumbotron>
      <div className='wrap' id='map'>
        <Map>
          <Marker/>
          <InfoWindow>
            <span>{ content }</span>
          </InfoWindow>
        </Map>
      </div>
    </div>;
  }
};

Location.propTypes = {
  mapInfo: PropTypes.object,
  mapConfig: PropTypes.object,
  sendMapError: PropTypes.func,
  updateMapCoords: PropTypes.func,
  updateMapInfo: PropTypes.func,
  bindMapEvents: PropTypes.func,
};




