import React, { useState } from "react";
import Canvas from "./components/Canvas";
import Menu from "./components/Menu";
import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "red",
              },
            }}
          >
            <Tab
              label="Home"
              sx={{ color: "white", fontWeight: "bold" }}
              {...a11yProps(0)}
            />
            <Tab
              label="Canvas"
              sx={{ color: "white", fontWeight: "bold" }}
              TabIndicatorProps={{}}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <Card variant="outlined">
            <h1 className="parent section hw">🎨 Welcome to Canvas 🎨</h1>
          </Card>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Card>
            <Menu />
          </Card>
          <Card className="container" >
            <Canvas />
          </Card>
        </TabPanel>
      </Box>
      <Footer />
    </>
  );
}

export default App;
