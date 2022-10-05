import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import ThemePanel from "../components/ThemePanel";
import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
// import Portfolio from "./Portfolio";
import Blog from "../components/Blog";
import { overlayAnimation } from "../App";
import menu from "../data/menu";
import LateralTabs from "../components/LateralTabs";

const HomeVideoPage = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  useEffect(() => {
    overlayAnimation();
  }, []);

  return (
    <Tabs as="div" className="page">
      <LateralTabs main="home"/>
      <ThemePanel />
      <div className="container">

        <TabPanel>
          <Home type="bgvideo"/>
        </TabPanel>
      </div>
    </Tabs>
  );
};

const styles = {
  buttonHover: {
        color: 'white',
        '& a:hover': {
        color: 'blue',
    },
  },
};

export default HomeVideoPage;
