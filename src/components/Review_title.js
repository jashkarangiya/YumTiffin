import React, { PureComponent } from 'react'
import './Review_title.css'

export default class Review_title extends PureComponent {
  render() {
    return (
      <div>
        <div className='review_title'>
          <div className="review_regular">OUR</div>
          <div className="review_italic">CUSTOMERS</div>
          <div className="review_regular">CAN'T</div>
          <div className="review_regular">LIVE</div>
          <div className="review_regular">WITHOUT</div>
          <div className="review_regular">US</div>
      </div>
      </div>
    )
  }
}
