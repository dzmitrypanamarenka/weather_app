import React from 'react';
import { Map, Marker, InfoWindow } from '../../containers';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCoords } from '../../utils/index';
import './styles.css';

export default class MapContainer extends React.Component {
  bindEvents = () => {
    const { updateInfo, bindEvents } = this.props;
    const markerOnClick = (props, marker) => updateInfo({ visibility: true, marker });
    const mapOnClick = () => this.props.info.visibility ? updateInfo({ visibility: false }) : null;

    bindEvents({ mapOnClick ,markerOnClick })
  };
  async componentDidMount (){
    const { sendError, updateMap } = this.props;
    const coords = await getCoords();
    if(coords instanceof Error){
        return sendError(coords);
    }
    updateMap(coords);
    this.bindEvents();
  }
  render(){
    const { content } = this.props.info;

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
    </div>
  }
};




