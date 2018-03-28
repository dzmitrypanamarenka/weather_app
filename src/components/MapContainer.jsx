import React from 'react';
import Map from '../containers/Map';
import Marker from '../containers/Marker';
import InfoWindow from '../containers/InfoWindow';
import * as errors from '../lib/errors';

export default class MapContainer extends React.Component {
  bindEvents = () => {
    const { updateInfo, bindEvents } = this.props;
    const markerOnClick = (props, marker) => updateInfo({ visibility: true, marker });
    const mapOnClick = () => this.props.info.visibility ? updateInfo({ visibility: false }) : null;

    bindEvents({ mapOnClick ,markerOnClick })
  };
  componentDidMount(){
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




