import React, { PureComponent } from "react";
import "./Slogan.css";

export default class Slogan extends PureComponent {
  render() {
    return (
      <div className="slogan">
        <div className="Firstline">
          <div className="section1_italic">EXPERIENCE</div>
          <div className="section1_regular">THE</div>
          <div className="section1_italic">FLAVOURS</div>
          <div className="section1_regular">OF</div>
          <div className="section1_italic">HOME,</div>
        </div>
        <div className="Secondline">
          <div id="secondreg">ANYTIME,</div>
          <div id="secondreg">ANYWHERE</div>
        </div>
      </div>
    );
  }
}
