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
    <tbody className="tablehead_tbody">
      <tr className="row_container">
        <td className="packages_col">
          <div className="input_checkbox">
            <input type="checkbox" />
          </div>
          <p>{data.name}</p>
        </td>
        <td>{data.rate}</td>
        <td className="total_col">
          <p>₹ {data.total}</p>
          <button onClick={handleRowCollapse}>
            {isParentCollapse ? (
              <FaMinus className="total_icon" />
            ) : (
              <FaPlus className="total_icon" />
            )}
          </button>
        </td>
      </tr>
      {/* <ActivityRow/> */}
    </tbody>
  );
};

export default TableHeadRows;
