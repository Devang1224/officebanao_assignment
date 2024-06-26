import React from "react";
import "./tableheadrows.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import ActivityRow from "../activityRow/ActivityRow";
import { useWorkorder } from "../../../context/WorkOrder";
import { tableData } from "../../../dummydata";

const TableHeadRows = ({ data }) => {
  const [isParentCollapse, setIsParentCollapse] = React.useState(false);
  const {setWorkOrder,workOrder} = useWorkorder();

  const handleRowCollapse = () => {
    setIsParentCollapse((prev) => !prev);
  };

const handleCheckBoxChange = (e)=>{

  const state = e.target.checked;
  const id = data.id;

    if(state){
       const data = tableData.find((item)=>item.id===id);
       setWorkOrder(prevWorkOrder => ([...prevWorkOrder, data]));
    }
    else{
      const newData = workOrder.filter(item => item.id!==id);
      setWorkOrder([...newData])
    }

}


  return (
    <ul className="civil_row" style={isParentCollapse ? { borderBottom: 'none' }:{borderBottom:"1px solid rgba(0, 0, 0, 0.16)"}}>
      <li className="table_row">
        <div className="packages_col">
          <div className="input_checkbox">
            <input type="checkbox" onChange={handleCheckBoxChange}/>
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
      <li className="activity_content">
      {isParentCollapse &&
        data.activity.map((item) => <ActivityRow key={item.id} data={item} />)
       }
      </li>
    </ul>
  );
};

export default TableHeadRows;
