import React, { useState, useEffect } from "react";
import { Tabs, TabPanel } from "react-tabs";
import ThemePanel from "../components/ThemePanel";
import Resume from "../components/Resume";
import { overlayAnimation } from "../App";
import LateralTabs from "../components/LateralTabs";

const ResumePage = () => {
  useEffect(() => {
    overlayAnimation();
  }, []);

  return (
    <Tabs as="div" className="page">
      
      <LateralTabs main="resume"/>
      <ThemePanel />
      <div className="container">
          <Resume />
        {/*
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
          <Portfolio />
        </TabPanel>
        <TabPanel>
          <Blog />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
         */}
      </div>
    </Tabs>
  );
};

export default ResumePage;
