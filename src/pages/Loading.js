import React from 'react';

import './Loading.css';
import {DoubleBounce} from 'better-react-spinkit';

export default class Loading extends React.Component {
  render() {
    return (
      <div className='Loading'>
        <DoubleBounce className='loader' size={100} color='aqua' />
        <div className='welcome text-white'>
          <span className='wel'>Welcome</span>,
          <br /> <span className='wait'>Wait for a bit</span>
        </div>
      </div>
    );
  }
}
