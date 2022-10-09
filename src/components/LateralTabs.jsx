import React, {useEffect, useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import menu from "../data/menu";

const LateralTabs = ()=> {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(()=> {
    //console.info("MENUUU", menu)
  }, [])
  return (
    <TabList as="header" className={`${toggleSidebar ? "header opened" : "header"}`}>
      {/* <!-- logo --> */}
      <div className="logo">
        <Link to={`/`}>
          <span>D</span>
        </Link>
      </div>

      {/* <!-- menu --> */}
      <div className="top-menu">

        <ul>
        {menu && menu.map((item, i) => (
            <Tab as="li" key={i}>
              <a href={item.to}>
                <span className={item.icon} style={{color:'white'}}></span>
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
  );
};

export default LateralTabs;
