import React from "react";
import "./overviewtab.css";
import TableHeadRows from "../ui/tableHeadRows/TableHeadRows";
import { tableData } from "../../dummydata";
import { useWorkorder } from "../../context/WorkOrder";

const OverviewTab = () => {

  const {setWorkOrder}= useWorkorder();

  const handleSelectAll = (e) => {

    if(e.target.checked){
          setWorkOrder([...tableData]);
    }
    else{
      setWorkOrder([])
    }

  };

  return (
    <div className="overview_container">
      <ul className="table">
        <li className="table_row table_header">
          <div className="packages_col">
            <div className="input_checkbox">
              <input type="checkbox" onChange={handleSelectAll} />
            </div>
            <p>Packages</p>
          </div>
          <div className="rate_col">
            <p>
              Rate<span>(in sqft)</span>
            </p>
          </div>
          <div className="total_col">
            <p>Total</p>
          </div>
        </li>
        {tableData.map((item) => (
          <TableHeadRows key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default OverviewTab;
