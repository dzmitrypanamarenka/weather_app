import React from 'react';
import { compose } from 'redux'
import { withRouter } from 'react-router'


import messages from './config';
import { MessageContainer } from '../../containers'

const { defaultMsg } = messages;

// export default ({ msg = defaultMsg }) => {
//   console.log(this)
//   return <div className="text -message">{ msg }</div>
// }

class Message extends React.Component {
  render(){
    console.log(this)
    return <div className="text -message">{ 111 }</div>
  }
}

export default MessageContainer(Message);


