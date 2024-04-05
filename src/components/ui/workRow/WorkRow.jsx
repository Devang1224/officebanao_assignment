import React from "react";
import "./workrow.css";
import { tableData } from "../../../dummydata";
import { useWorkorder } from "../../../context/WorkOrder";

const WorkRow = ({ data }) => {

  const {setWorkOrder,workOrder} = useWorkorder();


  const handleCheckBoxChange = (e)=>{

    const state = e.target.checked;
    const id = data.id;
  
      if(state){
         tableData.forEach((item)=>{
           item.activity.forEach((val)=>{
             val.workItems.forEach((value)=>{
              if(value.id===id){
                setWorkOrder((prev)=>[...prev,value]);
              }
             })
              
           })
         })
      }
      else{
        const newData = workOrder.filter(item => item.id!==id);
        setWorkOrder([...newData])
      }
  
}

const isChecked = ()=>{
  const checked = workOrder.find(item=>item.id===data.id);
  return checked;
}

  return (
    <li className="work_row">
      <div className="table_row">
        <div className="packages_col work_col">
          <div className="input_checkbox">
            <input type="checkbox" onChange={handleCheckBoxChange} checked={isChecked() ?? false}/>
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
