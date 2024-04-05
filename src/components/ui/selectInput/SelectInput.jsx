import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoIosArrowDown } from "react-icons/io";
import "./selectInput.css";

export default function SelectInput({setWorkOrderInfo,workOrderInfo}) {


  const handleChange = (event) => {
     setWorkOrderInfo((prev)=>({...prev,clientName:event.target.value}));
  };

  return (
    <>
      <p className="input_label">Client </p>
      <FormControl sx={{ width: "100%" }}>
        <Select
          value={workOrderInfo.clientName}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Client" }}
          IconComponent={() => (
            <IoIosArrowDown
              style={{ fontSize: "2rem", color: "rgba(0, 0, 0, 0.665)" }}
            />
          )}
          className="select_input"
          required
        >
          <MenuItem value="" disabled>
            <p className="select_input_default">Client Name</p>
          </MenuItem>
          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={20}>B</MenuItem>
          <MenuItem value={30}>C</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
