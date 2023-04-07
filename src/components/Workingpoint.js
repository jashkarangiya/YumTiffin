import React, { PureComponent } from "react";
import explore from "../images/explore.png";
import delivery from "../images/delivery.png";
import payment from "../images/payment.png";
import order from "../images/order.png";
import "./Workingpoint.css";
import Landingcard from "./Landingcard";
 

export default class Workingpoint extends PureComponent {
  render() {
    const card_info=[{imgsrc:explore,card_title:"Explore"},
    {imgsrc:order,card_title:"Order"},
    {imgsrc:payment,card_title:"Payment"},
    {imgsrc:delivery,card_title:"Delivery"}
  ]
    return (
      <>
      <div className="containers">
        <div className="card">
          <img src={explore}
           alt="image" id='img'/>
            <div className="content">
              <div className="titles">
               Explore
              </div>
             
            </div>
        </div>
        <div className="card">
          <img src={order}
           alt="image" id='img'/>
            <div className="content">
              <div className="titles">
               Order
              </div>
              
            </div>
        </div>
        <div className="card">
          <img src={payment}
           alt="image" id='img'/>
            <div className="content">
              <div className="titles">
               Payment
              </div>
             
            </div>
        </div>
        <div className="card">
          <img src={delivery}
           alt="image" id='img'/>
            <div className="content">
              <div className="titles">
               Delivery
              </div>
              
            </div>
    </div>
        {/*<Landingcard imgsrc={card_info[0].imgsrc} card_title={card_info[0].imgsrc}>

        </Landingcard>
        <Landingcard imgsrc={card_info[1].imgsrc} card_title={card_info[0].imgsrc}>
          
        </Landingcard>
        <Landingcard imgsrc={card_info[0].imgsrc} card_title={card_info[0].imgsrc}>
          
        </Landingcard>
        <Landingcard imgsrc={card_info[0].imgsrc} card_title={card_info[0].imgsrc}>
          
    </Landingcard>*/}
        </div>
      </>
    );
  }
}
