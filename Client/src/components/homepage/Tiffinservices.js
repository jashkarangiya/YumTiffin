import React, { PureComponent } from 'react'
import TiffinCard from './TiffinCard'
import './Tiffinservices.css';

export default class Tiffinservices extends PureComponent {
  render() {
    return (
      <div>
        <div className='tiffin-count-cont'>
        <span className='total-tiffins'>
                10
        </span>
        <span className='tiffinservices'>
            Tiffin Services
        </span>
        </div>
        <hr></hr>
        
        

      </div>
    )
  }
}
