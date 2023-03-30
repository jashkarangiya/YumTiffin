import React, { PureComponent } from "react";
import Navbar from "./Navbar";
import "./Tiffininfopage.css";
import thali from "../../images/thali4.jpeg";
import thaliimg1 from "../../images/thali3.jpeg";
import thaliimg2 from "../../images/thali4.jpeg";
import rupee from "../../images/rupee.png";
import Addbutton from "./Addbutton";
export default class Tiffininfopage extends PureComponent {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="tiffin-info-main">
          <div className="tiffin-info">
            <div className="tiffin-heading">
              <h1 id="tiffin-heading">Shiv Tiffin</h1>
            </div>
            <div className="tiffin-type">North indian</div>
            <div className="tiffin-address">109,kalakung</div>
            <div className="tiffin-time">
              Timings available:
              <div>Morning:10:00 am to 2:00 pm</div>
              <div>Evening:7:00 pm to 10:00 pm</div>
            </div>
          </div>
          <div className="">
            <img src={thali} id="tiffin-thali-image"></img>
          </div>
        </div>

        <div className="menu">
          <div className="order-online">Order online</div>

          <hr className="hr"></hr>
          <div className="menudiv">
            <div className="menu-img">
              <img src={thaliimg1} id="menu-thali" />
            </div>
            <div className="menu-info">
              <div className="dishname">Gujrati Thali</div>
              <div className="items-name">
                mix-veg sabji ,kathol ,dal ,bhat ,roti x4, buttermilk, pickle,
                salad , papad
              </div>
              <div className="price">
                
                <span><img src={rupee} id='rupee'></img></span>
                <span id='price'>120</span>
              </div>
            </div>
            {/*<div className="menu-buttons">
              <input type="button" value="Add" id='add-button'></input>
    </div>*/}
    <Addbutton></Addbutton>
          </div>
          <div className="menudiv">
            <div className="menu-img">
              <img src={thaliimg2} id="menu-thali" />
            </div>
            <div className="menu-info">
              <div className="dishname">Punjabi Thali</div>
              <div className="items-name">
                mix-veg sabji ,paneer tikka sabji ,dalfry ,rice ,naan x3,
                buttermilk, pickle, salad , papad
              </div>
              <div className="price">
              <span><img src={rupee} id='rupee'></img></span>
                <span id='price'>150</span>
              </div>
            </div>
            <div className="menu-buttons">
              <input type="button" value="Add" id='add-button'></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
