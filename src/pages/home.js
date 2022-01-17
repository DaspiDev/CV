import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import ThemePanel from "../components/ThemePanel";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Work from "../components/Work";
import { overlayAnimation } from "../App";
import menu from "../data/menu";

const HomePage = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  useEffect(() => {
    overlayAnimation();
  }, []);

  return (
    <Tabs as="div" className="page">

      <TabList as="header" className={`${toggleSidebar ? "header opened" : "header"}`}>
        {/* <!-- logo --> */}
        <div className="logo">
          <Link to={`/`}>
            <span>P</span>
          </Link>
        </div>

        {/* <!-- menu --> */}
        <div className="top-menu">
          <ul>
            {menu && menu.map((item, i) => (
              <Tab as="li" key={i}>
                <a href={item.to}>
                  <span className={item.icon}></span>
                  <span className="link">{item.title}</span>
                </a>
              </Tab>
            ))}
          </ul>
        </div>

        {/* <!-- Started socials --> */}
        <div className="social">
          <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
            <span className="icon la la-dribbble"></span>
          </a>
          <a target="_blank" rel="noreferrer" href="https://facebook.com/">
            <span className="icon la la-facebook"></span>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/">
            <span className="icon la la-github"></span>
          </a>
          <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/">
            <span className="icon la la-stack-overflow"></span>
          </a>
        </div>

        {/* <!-- Mobile Menu --> */}
        <span className="menu-btn" onClick={() => setToggleSidebar(!toggleSidebar)}>
          <span className="m-line"></span>
        </span>
      </TabList>

      <ThemePanel />
      <div className="container">

        <TabPanel>
          <Hero type="bgImage" />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Resume />
        </TabPanel>
        <TabPanel>
          <Work />
        </TabPanel>
        <TabPanel>
          <Blog />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default HomePage;
