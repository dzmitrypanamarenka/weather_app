import React from 'react';

import { MessageContainer as Message } from '../../containers';
import './styles.css';

export default () => (
  <div className='error-screen'>
    <span className='text -title'>Oooops :/ Something goes wrong!</span>
    <Message/>
  </div>
);
