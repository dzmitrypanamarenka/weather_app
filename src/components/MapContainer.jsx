import React from 'react';
import Map from '../containers/Map';
import Marker from '../containers/Marker';
import InfoWindow from '../containers/InfoWindow';
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

    return <div className='container'>
      <Jumbotron>
        <h1>Hi, fellow!</h1>
        <p>Check out my amazing weather app. Buckle up and let your browser find your geoposition!</p>
        <Button bsStyle="primary">
          <Link className='link -weather' to={'weather'}>lalalal</Link>
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
    </div>
  }
};




