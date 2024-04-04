import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./savedrawer.css";
import { IoCloseOutline } from "react-icons/io5";

export default function SaveDrawer({ openDrawer, setOpenDrawer }) {
  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
    console.log("object");
  };

  const DrawerList = (
    <Box role="presentation" className="drawer_container">
      <div className="drawer_header">
        <p>Workorder</p>
        <button
          className="drawer_close_button"
          onClick={() => setOpenDrawer(false)}
        >
          <IoCloseOutline />
        </button>
      </div>
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
