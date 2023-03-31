import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import ReactModal from 'react-modal';
import './Addbutton.css';
 import rupee from "../../images/rupee.png";
import SubmitButton from './SubmitButton';
import './Scheduleorder.css'
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
      <button onClick={() => setIsOpen(true) } id='addbutton2'>
Schedule Order
      </button>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)} id='react-modal1'
      >
    
        <div className='popup-heading1'>

    SCHEDULE ORDER
  
    
    
</div>
<hr></hr>
<div id='typeofmeal'>
TYPE OF MEAL
</div>

<div className='meal-type-div'>
    <div className='type-flex' >
    <input type="radio" id="type1" name='type' value="50"
        checked={selectedValue === "50"}
        onChange={handleRadioChange}/>
    Roti-Sabji (<span><img src={rupee} id='rupee'></img>50/-</span>)
  <label for="type1" id='type-label'></label>
    </div>
    <div className='type-flex'>
    <input type="radio" id="type2" name='type' value="40"
        checked={selectedValue === "40"}
        onChange={handleRadioChange}/>
    Dal-Rice (<span><img src={rupee} id='rupee'></img>40/-</span>)
  <label for="type2" id='type-label'></label> 
    </div>
<div className='type-flex'>

<input type="radio" id="type3" name='type' value="50"
        checked={selectedValue === "50"}
        onChange={handleRadioChange}/>
Full meal (<span><img src={rupee} id='rupee'></img>120/-</span>)
  <label for="type3" id='type-label'></label> 
</div>

  

</div>
<hr></hr>
<div className='nom1'>
<div className='number-of-meals'>
   NUMBER OF MEALS
</div>
<div className='numberofmeal'>
    <input type='text' id='nom' value={inputValue} onChange={handleInputChange}></input>
</div>

</div>


<div>
<hr></hr>
<div className='from-to'>
    <div id='from1'>
    <span id='from'>FROM</span><input type="date" id="dateinput" name=""/>

    </div>
    <div>
    <span id='from'>TO</span><input type="date" id="dateinput" name=""/>
    </div>


</div>
<hr></hr>
<div className='time'>
    <span id='time-head'>TIME OD DELIVERY</span><input type="time" id="appt" name="appt"/>
</div>
<hr></hr>
<div className='placeorder'>
<button type="button" class="btn btn-primary" id='placeorder'>PLACE ORDER</button>
{/*<SubmitButton onClick={handleMultiply}  price={result}></SubmitButton>*/}

</div>

</div>
      </ReactModal>
    </div>
  );
}
 
export default Example;