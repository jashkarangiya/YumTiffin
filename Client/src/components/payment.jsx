import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

const Payment = (props) => {

    const canvasRef = useRef(null);
const  price = props.location.search; // get query parameter value
 
const queryParams = new URLSearchParams(props.location.search);
const prc = queryParams.get('price');

let upiLink = 'upi://pay?pa=ayushjluhar%40oksbi&pn=YumTiffin&tn=pay&am=' + prc + '&cu=INR';


  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, upiLink, {
        errorCorrectionLevel: 'H',
        margin: 1,
        scale: 10,
        color: {
          dark: '#000',
          light: '#fff',
        },
      });
    }
  }, [canvasRef, upiLink]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // add code to process payment here
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <p>{price}</p>
      <canvas ref={canvasRef} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" required />
        <br />
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input type="text" id="expirationDate" name="expirationDate" required />
        <br />
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" required />
        <br />
        <button type="submit">Pay Now</button>
        <p>{upiLink}</p>
        <p>{price}</p>

      </form>
    </div>
  );
};

export default Payment;
