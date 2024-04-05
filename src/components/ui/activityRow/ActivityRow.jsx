import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./acitvityrow.css";
import WorkRow from "../workRow/WorkRow";

const ActivityRow = ({ data }) => {
  const [isActivityOpen, setActivityOpen] = React.useState(false);

  const handleActivityButton = () => {
    setActivityOpen((prev) => !prev);
  };

  return (
    <li className="activity_row">
      <div className="table_row">
        <div className="packages_col activity_col">
          <div className="input_checkbox">
            <input type="checkbox" />
          </div>
          <p style={{ color: "black" }}>{data.name}</p>
        </div>
        <div className="rate_col">
          <p>{data.rate}</p>
        </div>
        <div className="total_col">
          <p>₹ {data.total}</p>
          <button onClick={handleActivityButton}>
            {isActivityOpen ? (
              <IoIosArrowUp className="total_icon activity_icon" />
            ) : (
              <IoIosArrowDown className="total_icon activity_icon" />
            )}
          </button>
        </div>
      </div>
      {isActivityOpen && data.workItems.map((item) => <WorkRow key={item.id} data={item}/>)}
    </li>
  );
};

export default ActivityRow;
