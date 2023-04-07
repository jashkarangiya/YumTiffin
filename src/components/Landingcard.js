import React, { PureComponent } from 'react'
import './Landingcard.css'
function Landingcard(props) {
    return (
      <div>
        <div className="card">
          <img src={props.imgsrc}
           alt="image" id='img'/>
            <div className="content">
              <div className="titles">
               {props.card_title}
              </div>
             
            </div>
        </div>
      </div>
    )
  }
export default Landingcard;
