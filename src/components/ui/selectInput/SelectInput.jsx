import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoIosArrowDown } from "react-icons/io";
import "./selectInput.css";

export default function SelectInput() {
  const [clientName, setClientName] = React.useState("");

  const handleChange = (event) => {
    setClientName(event.target.value);
  };

  return (
    <>
      <p className="input_label">Client </p>
      <FormControl sx={{ width: "100%" }}>
        <Select
          value={clientName}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Client" }}
          IconComponent={() => (
            <IoIosArrowDown
              style={{ fontSize: "2rem", color: "rgba(0, 0, 0, 0.665)" }}
            />
          )}
          className="select_input"
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

// <select className="select_input" value="">
//       <option value="" disabled className="select_input_default">
//         Client Name
//       </option>
//       <option value="A">A</option>
//       <option value="B">B</option>
//       <option value="C">C</option>
//     </select>
