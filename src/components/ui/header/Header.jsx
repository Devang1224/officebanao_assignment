import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./header.css";
import SaveDrawer from "../saveDrawer/SaveDrawer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  function toggleDrawer() {
    setOpenDrawer(true);
    console.log("event triggered");
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
      <SaveDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};

export default Header;
