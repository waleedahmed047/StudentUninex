import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./section.css";
import AboutMe from "../Sections/AboutMe/aboutme";
import Services from "../Sections/Services/Services";
import Portfolio from "../Sections/Portfolio/Portfolio";
import EducationSection from "../../../../components/EducationSection/EducationSection";
import ExperiencePage from "../ExperiencePage/ExperiencePage";
import CVPage from "../Sections/CVPage/CVPage";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }} className="section-profile-main">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} className="custom-tabs">
            <Tab label="About Me" {...a11yProps(0)} />
            <Tab label="Portfolio" {...a11yProps(1)} />
            <Tab label="Education" {...a11yProps(2)} />
            <Tab label="Experience" {...a11yProps(3)} />
            <Tab label="Your CV" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AboutMe />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Portfolio />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <EducationSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ExperiencePage />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <CVPage />
        </CustomTabPanel>
      </Box>
      <div className="services-main">
        <Services />
      </div>
    </div>
  );
}
