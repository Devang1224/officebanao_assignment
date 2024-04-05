import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./header.css";
import SaveDrawer from "../saveDrawer/SaveDrawer";
import { useWorkorder } from "../../../context/WorkOrder";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

const{workOrder} = useWorkorder();

  function toggleDrawer() {
    setOpenDrawer(true);
  }



  return (
    <>
      <div className="header">
        <button className="header_button">
          <MdKeyboardArrowLeft />
          <p className="header_text">Create Workorder</p>
        </button>
        <button className="header_button_save" onClick={toggleDrawer}>
          Save
        </button>
      </div>
      <SaveDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}  />
    </>
  );
};

export default Header;
