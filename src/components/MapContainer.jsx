import React from 'react';
import Map from '../containers/Map';
import Marker from '../containers/Marker';
import InfoWindow from '../containers/InfoWindow';
import _ from 'lodash';
import * as errors from '../lib/errors';

export default class MapContainer extends React.Component {
  getCoords = () => {
    const { sendError, updateMap, options } = this.props;

    if(!navigator.geolocation){
      return sendError(new errors.GeoAbsence());
    }
    navigator.geolocation.getCurrentPosition(position => {
      const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      if(_.isEqual(options.coords, coords)){
        return false;
      }
      updateMap(coords);
    }, () => {
      sendError(new errors.GeoFailed());
    })
  };
  bindEvents = () => {
    const { updateInfo, bindEvents } = this.props;
    const markerOnClick = (props, marker) => updateInfo({ visibility: true, marker });
    const mapOnClick = () => this.props.info.visibility ? updateInfo({ visibility: false }) : null;

    bindEvents({ mapOnClick ,markerOnClick })
  };
  componentDidMount(){
    this.getCoords();
    this.bindEvents();
  }
  render(){
    const { content } = this.props.info;

    return <div id='map'>
      <Map>
        <Marker/>
        <InfoWindow>
          <span>{ content }</span>
        </InfoWindow>
      </Map>
    </div>
  }
};




