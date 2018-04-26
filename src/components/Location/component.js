import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { InfoWindow } from 'google-maps-react';

// import { MessageContainer, InfoWindowCont } from '../../containers'

// import InfoWindow from '../InfoWindow';
import { Message } from '../';
import { Map, Marker } from '../../containers';
import './styles.css';


export default class Location extends Component {
  bindEvents = () => {
    const { bindMapEvents } = this.props;
    const markerOnClick = ({ renewMapInfo }, marker) => renewMapInfo({ visible: true, marker });
    const mapOnClick = ({ visible, renewMapInfo }) => (
        visible
        ? renewMapInfo({ visible: false })
        : null
    );

    bindMapEvents({ mapOnClick ,markerOnClick });
  };
  componentDidMount () {
    this.bindEvents();
    this.props.receiveMapCoordsAsync();
  }
  render () {
    const { message } = this.props.mapConfig;
    const { marker, visible } = this.props.mapInfo;
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
          <InfoWindow marker={marker} visible={visible}>
            <Message/>
          </InfoWindow>
        </Map>
      </div>
    </div>;
  }
};

Location.propTypes = {
  mapInfo: PropTypes.object,
  mapConfig: PropTypes.object,
  receiveMapCoordsAsync: PropTypes.func,
  renewMapInfo: PropTypes.func,
  bindMapEvents: PropTypes.func,
};




