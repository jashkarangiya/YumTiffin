import React, { PureComponent } from 'react'

import './Section_2_landingpage.css'
import Explore_title from './Explore_title';
import Explore_desc from './Explore_desc';
import Explore_button from './Explore_button';
import RotateImage from './Rotateimage';


export default class Section_2_landingpage extends PureComponent {
  render() {
    return (
      <div className='section_2'>
        

        
          {/*<div className='image'>
            <img src={roundthali} className="round_thali" ></img>
    </div>*/}
        
        
        
        <RotateImage></RotateImage>
        <Explore_title></Explore_title>
        <Explore_desc></Explore_desc>
        <Explore_button></Explore_button>
      </div>
    )
  }
}
