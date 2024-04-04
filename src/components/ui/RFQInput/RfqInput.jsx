import React from "react";
import "./rfqinput.css";

const RfqInput = () => {
  return (
    <div>
      <p className="rfq-label">RFQ Code</p>
      <input type="text" className="rfq-input" placeholder="RFQ Code" />
    </div>
  );
};

export default RfqInput;
