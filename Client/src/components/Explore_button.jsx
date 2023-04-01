import React, { PureComponent } from "react";
import "./Explore_button.css";

export default class extends PureComponent {
  render() {
    return (
      <div>
        <button type="button" class="btn btn-primary" id="explore_button">
          <a href="/home" id="explorebutton">
            explore{" "}
          </a>
        </button>
      </div>
    );
  }
}
