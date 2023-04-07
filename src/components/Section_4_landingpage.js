import React, { PureComponent } from "react";
import Review_title from "./Review_title";
import "./Section_4_landingpage.css";
import review from "../images/review.png";

export default class Section_4_landingpage extends PureComponent {
  render() {
    return (
      <div>
        <div class="bigcont">
          <Review_title></Review_title>
        <div className="cont">
          <div class="card-containers">
            <div class="card-swipe">
              <div class="cards">
                <div class="card-body">
                  <h3>Trupal Patel</h3>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.


                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-containers">
            <div class="card-swipe">
              <div class="cards">
                <div class="card-body">
                  <h3>Amit Shah</h3>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-containers">
            <div class="card-swipe">
              <div class="cards">
                <div class="card-body">
                  <h3>Prachi Desai</h3>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
