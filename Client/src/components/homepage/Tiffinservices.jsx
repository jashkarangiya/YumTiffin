import React, { PureComponent } from "react";
import TiffinCard from "./TiffinCard";
import "./Tiffinservices.css";

export default class Tiffinservices extends PureComponent {
  render() 
  {
    return (
      <div className="total-tiifins-search">
        <div className="tiffin-count-cont">
          <span className="total-tiffins">6 </span>{" "}
          <span className="tiffinservices">Tiffin Services </span>{" "}
        </div>{" "}
        <div>

        <select className="form-control me-2" id="form1">
       
       <option value="Ahemdabad">  Ahemdabad</option>{" "}
       <option value="Anand">  Anand</option>{" "}
       <option value="Nadiad">  Nadiad</option>{" "}
     </select>
        </div>
        
        {/* <hr> </hr>\ */}
      </div>
    );
  }
}
