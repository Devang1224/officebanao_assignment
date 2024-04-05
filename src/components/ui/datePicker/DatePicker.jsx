import React from "react";
import "./datepicker.css";

const DatePicker = ({ type, setWorkOrderInfo }) => {
  const inputRef = React.useRef(null);

  const openDatePicker = (e) => {
    inputRef.current.showPicker();
  };

  const handleOnDatePick = (e) => {
    const value = e.target.value;
    if(type==="completion")
      setWorkOrderInfo((prev)=>({...prev,dateCompletion:value}));
    else 
    setWorkOrderInfo((prev)=>({...prev,dateCommencement:value}));
     
  };

  return (
    <div>
      {type === "completion" ? (
        <p className="date_label">Date of Completion</p>
      ) : (
        <p className="date_label">Date of Commencement</p>
      )}

      <input
        type="date"
        className="date_input"
        onClick={openDatePicker}
        onChange={handleOnDatePick}
        ref={inputRef}
        required
      />
    </div>
  );
};

export default DatePicker;
