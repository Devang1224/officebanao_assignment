import React from "react";
import "./tableheadrows.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import ActivityRow from "../activityRow/ActivityRow";

const TableHeadRows = ({ data }) => {
  const [isParentCollapse, setIsParentCollapse] = React.useState(false);

  const handleRowCollapse = () => {
    setIsParentCollapse((prev) => !prev);
  };

  return (
    <ul className="civil_row" style={isParentCollapse ? { borderBottom: 'none' }:{}}>
      <li className="table_row">
        <div className="packages_col">
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
          <button onClick={handleRowCollapse}>
            {isParentCollapse ? (
              <FaMinus className="total_icon" />
            ) : (
              <FaPlus className="total_icon" />
            )}
          </button>
        </div>
      </li>
      {isParentCollapse &&
        data.activity.map((item) => <ActivityRow key={item.id} data={item} />)}
    </ul>
  );
};

export default TableHeadRows;
