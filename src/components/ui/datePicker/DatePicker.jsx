import React from "react";
import "./datepicker.css";

const DatePicker = ({type}) => {
  const inputRef = React.useRef(null);

  const openDatePicker = (e) => {
    inputRef.current.showPicker();
  };

  return (
    <div>
    {
        (type==="completion")?(<p className="date_label">Date of Completion</p>):
        (<p className="date_label">Date of Commencement</p>)
    }
    
      <input
        type="date"
        className="date_input"
        onClick={openDatePicker}
        ref={inputRef}
      />
    </div>
  );
};

export default DatePicker;
