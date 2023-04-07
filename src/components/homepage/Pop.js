import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import ReactModal from 'react-modal';
import './Pop.css';
import Addbutton from './Addbutton'
 import rupee from "../../images/rupee.png";
import SubmitButton from './SubmitButton';
import Scheduleorder from './Scheduleorder';


function Example() {
  const [isOpen, setIsOpen] = useState(false);
const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMultiply = () => {
    const result = selectedValue * inputValue;
    
  };
 
  return (
    <div>
      <button onClick={() => setIsOpen(true) } id='addbutton1'>
        Add
      </button>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)} id='pop-modal'
      >
    
        <Addbutton></Addbutton>
        <Scheduleorder></Scheduleorder>
        
      </ReactModal>

    </div>
  );
}
 
export default Example;