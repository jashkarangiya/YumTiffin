import React, { PureComponent } from "react";
import "./TiffinCard.css";
import tiffin1 from "../../images/tiffin1.jpg";
import thali3 from "../../images/thali3.jpeg";
import thali4 from "../../images/thali4.jpeg";
import thali5 from "../../images/thali5.jpeg";
import thali6 from "../../images/thali6.jpeg";
import thali7 from "../../images/thali7.jpeg";
import thali8 from "../../images/thali8.jpeg";
import thali9 from "../../images/thali9.jpeg";



export default class TiffinCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
  }
  render() {
    const services = [
      {
        _id: {
          $oid: "6423381a3cd3e073da207d73",
        },
        name: "The Krishnas",
        description:
          "Best tiffin service in Anand! We welcome you to the Krishnas!!",
        city: "Anand",
        tiffins: [
          {
            tiffin: "Small",
          },
        ],
        owner: "Jash",
        email: "support@thekrishnas.com",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207d78",
        },
        name: "Mom's Cafe",
        description:
          "Pizzas, burgers & other fast food served with freakshakes & desserts in an exposed-brick space.",
        city: "Anand",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Mom",
        email: "momscafe@gmail.com:",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207d69",
        },
        name: "The Ackermans",
        description:
          "Best tiffins for the students, titans not allowed. Hungry from killing the titans, order from The Ackermans",
        city: "Anand",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Levi Ackerman",
        email: "theackemans@gmail.com:",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207d70",
        },
        name: "Gigil Tiffin Service",
        description:
          "Who's the best tiffin service in Anand? You know it, so do I.",
        city: "Anand",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Ayush J Luhar",
        email: "gigilTiffins.com:",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207d01",
        },
        name: "APC Tiffin Services",
        description: "God's Angel",
        city: "Anand",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Jinesh Dolia",
        email: "jineshD@apc.com",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207d10",
        },
        name: "Gandhis",
        description: "Jain tiffins available!!",
        city: "Anand",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Kavan Gandhi",
        email: "kavan.gandhi@gmail.com",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207420",
        },
        name: "BTS",
        description:
          "The BTS, Ahmedabad's oldest tiffin services, was founded in 1856 when, according to legend. Today, no one can pinpoint the house’s exact location, but it was most likely on the edge of present-day new Ahmedabad. ",
        city: "Ahemdabad",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Jung Kook",
        email: "jung@bts.com",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207d45",
        },
        name: "Ichiraku",
        description:
          "Best Ramen tiffin services in the Konoha. And now its available in Ahmedabad!",
        city: "Ahmedabad",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Teuchi",
        email: "support.ichiraku@naruto.com",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207d01",
        },
        name: "APC Tiffin Services",
        description: "God's Angel",
        city: "Anand",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Jinesh Dolia",
        email: "jineshD@apc.com",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207d10",
        },
        name: "Gandhis",
        description: "Jain tiffins available!!",
        city: "Nadiad",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Kavan Gandhi",
        email: "kavan.gandhi@gmail.com",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207420",
        },
        name: "BTS",
        description:
          "The BTS, Ahmedabad's oldest tiffin services, was founded in 1856 when, according to legend. Today, no one can pinpoint the house’s exact location, but it was most likely on the edge of present-day new Ahmedabad. ",
        city: "Nadiad",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Jung Kook",
        email: "jung@bts.com",
      },
      {
        _id: {
          $oid: "642338e43cd3e073da207d45",
        },
        name: "Ichiraku",
        description:
          "Best Ramen tiffin services in the Konoha. And now its available in Ahmedabad!",
        city: "Nadiad",
        tiffins: [
          {
            tiffin: "Large",
          },
        ],
        owner: "Teuchi",
        email: "support.ichiraku@naruto.com",
      },
    ];
    // //ep
    // handleClick = (index) => {
    //     if (this.props.onCardClick) {
    //       this.props.onCardClick(index);
    //     }
    //   };
    

    return (
      <>
        <div className="total-tiifins-search">
        <div className="tiffin-count-cont">
          <span className="total-tiffins">6 </span>{" "}
          <span className="tiffinservices">Tiffin Services </span>{" "}
        </div>{" "}
        <div>

        <select className="form-control me-2" id="form1"
        value={this.state.city} 
        onChange={(e) => {
          this.setState({ city: e.target.value });
        }}>
       
       <option value="Anand" >Anand</option>{" "}
       <option value="Ahmedabad" >Ahemdabad</option>{" "}
       <option value="Nadiad" >Nadiad</option>{" "}
     </select>
        </div>
        
        {/* <hr> </hr>\ */}
      </div>
      
        <div className="main-container">
          {services.filter(d => d.city === this.state.city).map((oneCard, i) => (
            <div className="card-cont">
            {/* // ep */}
            {/* <div className="card-cont"  onClick={() => this.handleClick(i)}> */}

              <a href="/info" id="tiffin-anchor">
                <div className="card-img"  >
                    
                  <img src={tiffin1} id="cimg" />{" "}
                </div>{" "}
                <div className="tiffin-provider">
                  <p className="tiffinname"> {oneCard.name} </p>{" "}
                  <p className="foodtype"> {oneCard.city} </p>{" "}
                  <hr id="hrline" /> <p className="quickview">QUICK VIEW </p>
                </div>{" "}
              </a>
            </div>
          ))}
        </div>{" "}
      </>
    );
  }

}
