import React from 'react';
import { InfoWindow } from 'google-maps-react';

import { InfoWindow as InfoCont } from '../containers';

class InfoW extends React.Component {
  render(){
    console.log(this)
    const { marker, visible } = this.props;
    console.log(marker)
    return <InfoWindow marker={marker} visible={visible}>
      <div id='hui'>1111</div>
    </InfoWindow>;
  }
}
export default InfoCont(InfoW);


