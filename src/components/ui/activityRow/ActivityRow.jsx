import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./acitvityrow.css";
import WorkRow from "../workRow/WorkRow";
import { tableData } from "../../../dummydata";
import { useWorkorder } from "../../../context/WorkOrder";

const ActivityRow = ({ data }) => {
  const [isActivityOpen, setActivityOpen] = React.useState(false);
  const {setWorkOrder,workOrder} = useWorkorder();


  const handleActivityButton = () => {
    setActivityOpen((prev) => !prev);
  };


    const handleCheckBoxChange = (e)=>{

      const state = e.target.checked;
      const id = data.id;
    
        if(state){
           tableData.forEach((item)=>{
             item.activity.forEach((val)=>{
                if(val.id===id){
                  setWorkOrder((prev)=>[...prev,val]);
                }
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
    <ul className="activity_row">
      <li className="table_row">
        <div className="packages_col activity_col">
          <div className="input_checkbox">
            <input type="checkbox" onChange={handleCheckBoxChange} checked={isChecked() ?? false}/>
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
      </li>
      {isActivityOpen && data.workItems.map((item) => <WorkRow key={item.id} data={item}/>)}
    </ul>
  );
};

export default ActivityRow;
