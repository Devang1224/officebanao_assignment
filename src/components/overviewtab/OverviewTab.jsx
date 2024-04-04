import React from "react";
import "./overviewtab.css";
import TableHeadRows from "../ui/tableHeadRows/TableHeadRows";
import { tableData } from "../../dummydata";


const OverviewTab = () => {



  return (
    <div className="overview_container">
      <table className="table">
        <colgroup className="col_group">
          <col />
          <col />
        </colgroup>

        <thead>
          <tr>
            <th className="head_packages">
              <div className="input_checkbox">
                <input type="checkbox" />
              </div>
              <p>Packages</p>
            </th>
            <th>
              Rate<span>(in sqft)</span>
            </th>
            <th>Total</th>
          </tr>
        </thead> 
        {
          tableData.map((item)=>(
            <TableHeadRows key={item.id} data={item} />
          ))
        }
      </table>
    </div>
  );
};

export default OverviewTab;
