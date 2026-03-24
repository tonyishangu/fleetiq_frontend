import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Customers from "../components/admin/Customers";
import Users from "../components/admin/Users";
import Roles from "../components/admin/Roles";
import Notifications from "../components/admin/Notifications";

const Adminstration = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Customers" value="1" />
            <Tab label="Users" value="2" />
            <Tab label="Roles" value="3" />
            <Tab label="Notifications" value="4" />
            {/* <Tab label="Roles" value="5" /> */}
          </TabList>
        </Box>
        <TabPanel value="1">
          <Customers />
        </TabPanel>
        <TabPanel value="2">
          <Users />
        </TabPanel>
        <TabPanel value="3">
          <Roles />
        </TabPanel>
        <TabPanel value="4">
          <Notifications />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Adminstration;
