import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import gsap from "gsap";
import Loader from "./components/Loader";
import changeFavicon from "./hooks/changeFavicon";

//pages
import HomePage from "./pages/home";
import About from "./pages/about";
import Resume from "./components/Resume";
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
      <BrowserRouter>
        <Switch>
          {/* <ThemePanel /> */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          {/*<Route path="/portfolio" component={HomePage} />*/}
          <Route path="/contact" component={Contact} />

          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
