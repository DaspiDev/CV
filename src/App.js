import React, { useEffect, useState } from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import gsap from "gsap";
import Loader from "./components/Loader";
import changeFavicon from "./hooks/changeFavicon";

//pages
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ResumePage from "./pages/resume";
import Contact from "./components/Contact";
// import Portfolio from "./Portfolio";

export const overlayAnimation = () => {
  const tl = gsap.timeline({
    delay: -3.5,
  });
  tl.to(".intro__overlay-line", {
    duration: 3.5,
    width: "25vw",
    ease: "expo.inOut",
    // delay: -0.8,
  })
    .to(".intro__overlay-line", {
      duration: 2,
      width: 0,
      ease: "expo.inOut",
      // delay: -0.8,
    })
    .to(".intro__overlay", { duration: 0, css: { display: "none" } });
};

function App() {

  const [preloader, setPreloader] = useState(true);
  const preload = () => {
    setPreloader(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      preload();
    }, 700);

    changeFavicon('blue')

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {preloader && (
        <div>
          <Loader />
        </div>
      )}
      <HashRouter>
        <Switch>
          {/* <ThemePanel /> */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/home" component={HomePage} />
          <Route path="/informacion" component={AboutPage} />
          <Route path="/curriculum" component={ResumePage} />
          {/*<Route path="/portfolio" component={HomePage} />*/}
          <Route path="/contact" component={Contact} />

          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </HashRouter>
      <ToastContainer />
    </>
  );
};

export default App;
