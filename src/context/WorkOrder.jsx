import React, { createContext, useCallback, useContext, useState } from "react";
import { tableData } from "../dummydata";

const workOrderContext = createContext(null);

const WorkOrder = ({ children }) => {
  const [workOrder, setWorkOrder] = useState([]);



const printWorkOrder = ()=>{
  console.log(workOrder);
} 

  return (
    <workOrderContext.Provider value={{ workOrder, setWorkOrder,printWorkOrder }}>
      {children}
    </workOrderContext.Provider>
  );



};


export const useWorkorder = () => {
  return useContext(workOrderContext);
};

export default WorkOrder;
