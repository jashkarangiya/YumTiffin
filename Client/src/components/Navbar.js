import "./Navbar.css";
import thali from "../images/thali.jpeg";
import {Link} from "react-router-dom";
import Homepage from "./Homepage";



function Section_1_Landingpage() {
  return (
    <>
      <div className="section_1">
        <img src={thali} id="thali"></img>
        <div className="nav">
          <div className="nav-header">
            <div className="nav-title">YUMTIFFIN</div>
          </div>
          
          <div className="nav-links">
          <a href="/home">
            HOME
            </a>
            <a href="/login" target="_blank">
              
              LOGIN
              
              
              
            </a>
            <a href="/signup" target="_blank">
              SIGNUP
            </a>
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Section_1_Landingpage;
