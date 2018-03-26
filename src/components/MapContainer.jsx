import React from 'react';
import { Map } from 'google-maps-react';
import _ from 'lodash';

export default class MapContainer extends React.Component {
  getCoords(){
    if(!navigator.geolocation){
      return this.props.sendError({ status: false });
    }
    navigator.geolocation.getCurrentPosition(position => {
      const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longtitude
      };
      if(_.isEqual(this.props.coords, coords)){
        return false;
      }
      this.props.updateMap(coords);
    }, () => {
      this.props.sendError({ status: true });
    })
  }
  render(){
    // const initialState = {
    //     lat: 40.854885,
    //     lng: -88.081807
    // };
    console.log(this.props)
    const coords = this.props.coords;
    const googleApi = this.props.google;
    const zoom = this.props.zoom;
    this.getCoords();
    return <div id='map'>
      <Map google={ googleApi }
           center={ coords }
           zoom={ zoom }/>
    </div>
  }
};




