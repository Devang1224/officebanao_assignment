import React from "react";
import "./rfqinput.css";

const RfqInput = ({setWorkOrderInfo}) => {


const handleOnchangeRfq = (e)=>{
  setWorkOrderInfo((prev)=>({...prev,rfqCode:e.target.value}))
}

  return (
    <div>
      <p className="rfq-label">RFQ Code</p>
      <input type="text" className="rfq-input" placeholder="RFQ Code" onChange={handleOnchangeRfq} required/>
    </div>
  );
};

export default RfqInput;
