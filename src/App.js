import React, { useState } from "react";
import Canvas from "./components/Canvas";
import Menu from "./components/Menu";
import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Footer from "./components/Footer";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import ClearCanvasButton from "./components/ClearCanvasButton";

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
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Canvas" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <Card variant="outlined">
            <div className="parent section hw">🎨 Welcome to canvas 🎨</div>
          </Card>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Card>
            <Menu />
          </Card>
          <Card className="container">
            <Canvas />
          </Card>
        </TabPanel>
      </Box>
      <Footer className="item" />
    </>
  );
}

export default App;
