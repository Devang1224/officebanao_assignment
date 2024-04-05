import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./savedrawer.css";
import { IoCloseOutline } from "react-icons/io5";
import SelectInput from "../selectInput/SelectInput";
import DatePicker from "../datePicker/DatePicker";
import RfqInput from "../RFQInput/RfqInput";

export default function SaveDrawer({ openDrawer, setOpenDrawer }) {
  const [workOrderInfo, setWorkOrderInfo] = React.useState({
    clientName: "",
    dateCommencement: "",
    dateCompletion: "",
    rfqCode: "",
  });

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  const handleOnSave = () => {
    setOpenDrawer(false);
  };

  return (
    <div>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor={"right"}>
        <Box role="presentation" className="drawer">
          <form onSubmit={handleOnSave} className="drawer_form">
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
                <SelectInput
                  setWorkOrderInfo={setWorkOrderInfo}
                  workOrderInfo={workOrderInfo}
                />
                <DatePicker
                  key="datePicker-1"
                  type="commencement"
                  setWorkOrderInfo={setWorkOrderInfo}
                />
                <DatePicker
                  key="datePicker-2"
                  type="completion"
                  setWorkOrderInfo={setWorkOrderInfo}
                />
                <RfqInput setWorkOrderInfo={setWorkOrderInfo} />
              </div>
            </div>

            <button className="drawer_done_button" type="submit">
              Done
            </button>
          </form>
        </Box>
      </Drawer>
    </div>
  );
}
