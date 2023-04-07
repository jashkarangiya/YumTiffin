import React, { PureComponent } from 'react'
import delivery_sticker from "../images/delivery_sticker.png";
import './Section_3_landingpage.css';
import Working_title from './Working_title';
import Workingpoint from './Workingpoint';


export default class Section_3_landingpage extends PureComponent {
 
  render() {
    return (
      <>
      <div className='section_3'>
        <img src={delivery_sticker} id='sticker'></img>
        <Working_title></Working_title>
        <Workingpoint></Workingpoint>
       
        
        
      </div>
      
    </>
    )
  }
}
