import React from "react";
import "./workrow.css";

const WorkRow = ({ data }) => {
  return (
    <li className="work_row">
      <div className="table_row">
        <div className="packages_col work_col">
          <div className="input_checkbox">
            <input type="checkbox" />
          </div>
          <p style={{ color: "black" }}>{data.name}</p>
        </div>
        <div className="rate_col">
          <p></p>
        </div>
        <div className="total_col">
          <p>₹ {data.total}</p>
        </div>
      </div>
    </li>
  );
};

export default WorkRow;
