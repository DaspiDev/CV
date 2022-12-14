import React, { useState, useEffect } from "react";
import { Tabs, TabPanel } from "react-tabs";
import ThemePanel from "../components/ThemePanel";
import About from "../components/About";
import { overlayAnimation } from "../App";
import LateralTabs from "../components/LateralTabs";

const AboutPage = () => {
  useEffect(() => {
    overlayAnimation();
  }, []);

  return (
    <Tabs as="div" className="page">
      
      <LateralTabs main="about"/>
      <ThemePanel />
      <div className="container">
        <About />
      </div>
    </Tabs>
  );
};

export default AboutPage;
