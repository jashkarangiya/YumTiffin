import React, { useState } from "react";

function SubmitButton(props) {
  const [message, setMessage] = useState("");
let u=props.price;
JSON.stringify(u)

  const handleClick = () => {
    setMessage(u);
  };

  return (
    <div>
      <button onClick={handleClick}>Submit</button>
      <p style={{ position: "fixed", bottom: 0 }}>{message}</p>
    </div>
  );
}

export default SubmitButton;