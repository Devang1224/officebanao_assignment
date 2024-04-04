import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./savedrawer.css";
import { IoCloseOutline } from "react-icons/io5";
import SelectInput from "../selectInput/SelectInput";
import DatePicker from "../datePicker/DatePicker";
import RfqInput from "../RFQInput/RfqInput";

export default function SaveDrawer({ openDrawer, setOpenDrawer }) {


  
  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  const DrawerList = (
    <Box role="presentation" className="drawer">

      <div className="drawer_container"> 

      <div className="drawer_header">
        <p>Workorder</p>
        <button
          className="drawer_close_button"
          onClick={() => setOpenDrawer(false)}
        >
          <IoCloseOutline />
        </button>
      </div>
      
      <div className="input_container">
        <SelectInput />
        <DatePicker key="datePicker-1" type="commencement" />
        <DatePicker key="datePicker-2" type="completion" />
        <RfqInput />
      </div>
      </div>
      
      <button
        className="drawer_done_button"
        onClick={() => setOpenDrawer(false)}
      >
        Done
      </button>

    </Box>
  );

  return (
    <div>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor={"right"}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
