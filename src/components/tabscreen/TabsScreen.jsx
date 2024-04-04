import React from "react";
import "./tabscreen.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OverviewTab from "../overviewtab/OverviewTab";
import OtherTab from "../othertab/OtherTab";

const TabsScreen = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabscreen_container">
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Overview" value="1" disableRipple className="tab_button" />
              <Tab label="Other" value="2" disableRipple className="tab_button" />
            </TabList>
          </Box>
          <TabPanel value="1" className="overview_tab">
            <OverviewTab />
          </TabPanel>
          <TabPanel value="2">
            <OtherTab />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default TabsScreen;
