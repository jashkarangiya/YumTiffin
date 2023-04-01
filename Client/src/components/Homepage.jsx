import React, { PureComponent } from "react";
import HomeNavbar from "./homepage/Navbar";
import Tiffincard from "./homepage/TiffinCard";
import Tiffinservices from "./homepage/Tiffinservices";

export default class Homepage extends PureComponent {
  render() {
    return (
      <div>
    
             <HomeNavbar> </HomeNavbar> 
        {/* <Tiffinservices> </Tiffinservices>{" "} */}
        <Tiffincard> </Tiffincard>{" "}
      </div>
    );
  }
}
