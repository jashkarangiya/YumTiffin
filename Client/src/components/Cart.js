// import React, { useState } from 'react';
// import Navbar from "../../src/components/homepage/Navbar";
// import "../components/homepage/Cart.css";
// import thali3 from "../images/thali3.jpeg";
// import thali4 from "../images/thali4.jpeg";
// import rupee from "../images/rupee.png";
// import ReactModal from 'react-modal';
// import qr from '../images/q.png'

// var isHidden = false;

// setInterval(function(){
//     var el = document.getElementById("qrcode");
//     el.style.visibility = isHidden ? "visible" : "hidden";

//     // toggle hidden property
//     isHidden = !isHidden;
// }, 45000);
// function Example1() {
//     const [isOpen, setIsOpen] = useState(false);
// const [selectedValue, setSelectedValue] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const [result, setResult] = useState("");
//   return (
//     <div>
//         <Navbar></Navbar>
//         <div class="page-content">
//           <div class="holder mt-0">
//             <div class="container">
//               <h1 class="textcenter">MEALS CHOOSEN</h1>
//               <hr></hr>
//               <div class="row">
//                 <div class="col-md-8">
//                   <div class="cart-table">
//                     <div class="cart-table-prd">
//                       <div class="cart-table-prd-image">
//                         <a href="#">
//                           <img src={thali3} class="img-fluid" alt=""></img>
//                         </a>
//                       </div>
//                       <div class="cart-table-prd-name">
//                         <h5>canverse</h5>
//                         <h2 id="h2">Gujrati thali</h2>
//                         <div>
//                           <div>
//                             <span id="ft">From: </span>
//                             <span id="ft">12/03/23 </span>{" "}
//                           </div>
//                           <div>
//                             <span id="ft"> To:</span>
//                             <span id="ft">16/03/23</span>
//                           </div>
//                         </div>
//                       </div>

//                       <div class="cart-table-prd-qty">
//                         <div>Half meal</div>
//                         <span id="s">qty:</span> <b id="s">1</b>
//                       </div>
//                       <div class="cart-table-prd-price">
//                         <span id="s">price:</span>{" "}
//                         <span id="rid">
//                           <img src={rupee} id="rupees"></img>
//                         </span>
//                         <b id="s">20.00</b>
//                       </div>
//                     </div>
//                     <div class="cart-table-prd">
//                       <div class="cart-table-prd-image">
//                         <a href="#">
//                           <img src={thali4} class="img-fluid" alt="" />
//                         </a>
//                       </div>
//                       <div class="cart-table-prd-name">
//                         <h5>saucany</h5>
//                         <h2 id="h2">punjabi thali</h2>
//                         <div>
//                           <div>
//                             <span id="ft">From: </span>
//                             <span id="ft">12/03/23 </span>{" "}
//                           </div>
//                           <div>
//                             <span id="ft"> To:</span>
//                             <span id="ft">16/03/23</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="cart-table-prd-qty">
//                         <div>Half meal</div>
//                         <span id="s">qty:</span> <b id="s">1</b>
//                       </div>
//                       <div class="cart-table-prd-price">
//                         <span id="s">price:</span>{" "}
//                         <span id="rid">
//                           <img src={rupee} id="rupees"></img>
//                         </span>
//                         <b id="s">199.00</b>
//                       </div>
//                     </div>
//                     <div class="cart-table-total">
//                       <div class="row">
//                         <div class="col-sm-auto" id="continue">
//                           <a href="/home" class="btn3">
//                             <i class="icon-angle-left"></i>
//                             <span>continue shopping</span>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-md-4" id="pay">
//                   <div class="sidebar-block">
//                     <div class="card-total text-uppercase">
//                       Subtotal{" "}
//                       <span id="rid">
//                         <img src={rupee} id="rupee"></img>
//                       </span>
//                       <span class="card-total-price"> 294.00</span>
//                     </div>
//                     <div className="ptp">
//                       <button
//                         class="btn btn--full btn--lg"
//                         onClick={() => setIsOpen(true)}

//                       >
//                         proceed to checkout
//                       </button>
//                       <ReactModal
//         isOpen={isOpen}
//         contentLabel="Example Modal"
//         onRequestClose={() => setIsOpen(false)} id='qr'
//       >
//     <img src={qr} id='qrcode'></img>
//     <div id='stp'>SCAN TO PAY</div>
// </ReactModal>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Example1;