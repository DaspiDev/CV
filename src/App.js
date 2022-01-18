import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import gsap from "gsap";
import Loader from "./components/Loader";

//pages
import HomePage from "./pages/home.js";
import HomeRtlPage from "./pages/home-rtl.js";
import HomeVideoPage from "./pages/home-video";
import HomeParticlePage from "./pages/home-particles-rtl";
import HomeColorPage from "./pages/home-bgcolor-rtl";
import HomeVideoRtlPage from "./pages/home-video-rtl";
import HomeParticleRtlPage from "./pages/home-particles-rtl";
import HomeColorRtlPage from "./pages/home-bgcolor";
import BlogPage from "./pages/blog";
import BlogRtlPage from "./pages/blog-rtl";
import BlogPost from "./pages/blog-post";
import BlogRtlPost from "./pages/blog-post-rtl";

export const overlayAnimation = () => {
  const tl = gsap.timeline({
    delay: -2,
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
    }, 1000);

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
          <Route path="/home-video" component={HomeVideoPage} />
          <Route path="/home-particles" component={HomeParticlePage} />
          <Route path="/home-bgcolor" component={HomeColorPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog-post" component={BlogPost} />

          <Route path="/home-rtl" component={HomeRtlPage} />
          <Route path="/home-video-rtl" component={HomeVideoRtlPage} />
          <Route path="/home-particles-rtl" component={HomeParticleRtlPage} />
          <Route path="/home-bgcolor-rtl" component={HomeColorRtlPage} />
          <Route path="/blog-rtl" component={BlogRtlPage} />
          <Route path="/blog-post-rtl" component={BlogRtlPost} />

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
