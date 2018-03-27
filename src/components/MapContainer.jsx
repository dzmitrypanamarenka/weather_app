import React from 'react';
import { Map, Marker, InfoWindow } from 'google-maps-react';
import _ from 'lodash';
import * as errors from '../lib/errors';

export default class MapContainer extends React.Component {
  getCoords = () => {
    if(!navigator.geolocation){
      return this.updateInfo(new errors.GeoAbsence());
    }
    navigator.geolocation.getCurrentPosition(position => {
      const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      if(_.isEqual(this.props.options.coords, coords)){
        return false;
      }
      this.props.updateMap(coords);
    }, () => {
      this.updateInfo(new errors.GeoFailed());
    })
  };
  updateInfo = infoProps => (e, d) => {
    console.log(d)
    if(infoProps instanceof Error){
      return this.props.sendError(infoProps.message);
    }
    this.props.updateInfo(infoProps);
  };
  render(){
    this.getCoords();
    const { coords, zoom } = this.props.options;
    const { visibility, content } = this.props.info;
    const { google } = this.props;

    return <div id='map'>
      <Map google={ google }
           center={ coords }
           zoom={ zoom }
           onClick={ visibility ? this.updateInfo({ visibility: false }) : null }>
        <Marker name={'Your position'}
                position={ coords }
                onClick={ this.updateInfo({ visibility: true }) }/>
        <InfoWindow position={ coords }
                    visible={ visibility }>
          <h1>{ content }</h1>
        </InfoWindow>
      </Map>
    </div>
  }
};




