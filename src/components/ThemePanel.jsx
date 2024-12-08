import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import changeFavicon from "../hooks/changeFavicon";

const ThemePanel = ({ is_rtl }) => {

  let history = useHistory();

  useEffect(() => {
    // remove all theme color
    document.querySelectorAll("link[href*='rtl.css']")
      .forEach(element => element.remove());

    if (is_rtl) {

      /**
       * assign a new stylesheet
       */
      var head = document.getElementsByTagName('head')[0],
        style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = "/css/rtl.css";

      /**
       * appendChild
       */
      head.appendChild(style);
    }
  }, [is_rtl]);


  const handleHtmlDir = (dir) => {
    if (dir === 'rtl') {
      let href = window.location.pathname.replace('-rtl', '');
      history.push(href+"-rtl");
    } else {
      let href = window.location.pathname.replace('-rtl', '');
      history.push(href);
    }

  }


  const layoutStyleData = [
    {
      title: "theme-green",
      Data_color: "green",
      background: "#5ac24e",
    },
    {
      title: "theme-blue",
      Data_color: "blue",
      background: "#65b4f3",
    },
    {
      title: "theme-orange",
      Data_color: "orange",
      background: "#f5a640",
    },
    {
      title: "theme-pink",
      Data_color: "pink",
      background: "#ee6192",
    },
    {
      title: "theme-purple",
      Data_color: "purple",
      background: "#bb68c8",
    },
    {
      title: "theme-red",
      Data_color: "red",
      background: "#ee534f",
    },
  ];

  const [ThemeShow, setThemeShow] = useState(false);

  /**
   * handle layout style 
   */
  const handleLayoutStyle = (Data_color) => {
    changeFavicon(Data_color)

    // remove all theme color
    document.querySelectorAll("link[href*='css/theme-colors/']")
      .forEach(element => {
        console.info("stylesheet", element)
        element.remove()
      });

    /**
     * assign a new stylesheet
     */
    var head = document.getElementsByTagName('head')[0],
      style = document.createElement('link');
    style.rel = 'stylesheet';
    //Añadido CV al link de public por el tema de que github pages me obliga a poner CV delante
    style.href = "/CV/css/theme-colors/" + Data_color + ".css";


    /**
     * appendChild
     */
    head.appendChild(style);
  }

  const handleThemePanel = () => {
    setThemeShow(!ThemeShow);
  };

  const handleBg = (name) => {
    // if (name === "BG Particles") {
    //   setbgParticles(true);
    //   setbgImage(true);
    // } else {
    //   setbgParticles(false);
    //   setbgImage(false);
    // }
    // if (name === "BG image") {
    //   setbgImage(true);
    // } else {
    //   setbgImage(false);
    // }
    // if (name === "BG video") {
    //   setbgvideo(true);
    // } else {
    //   setbgvideo(false);
    // }
    // if (name === "BG color") {
    //   setbgColor(true);
    // } else {
    //   setbgColor(false);
    // }
  };

  let themePanelClass = "theme_panel";

  if (!ThemeShow) {
    themePanelClass += " active";
  }

  if (is_rtl) {
    themePanelClass += " left";
  }

  // `${!ThemeShow ? "theme_panel active" : "theme_panel"}`

  return (
    <>
      <div className={themePanelClass}>
        <div className="toggle_bts" onClick={handleThemePanel}>
          <a className="toggle-theme-panel" href="#theme_panel" onClick={(e) => e.preventDefault()}>
            <i className="icon la la-gear"></i>
          </a>
        </div>
        <div className="theme_menu">

          <h4 style={{marginTop: 15}}>Cambiar color</h4>
          <div className="segment">
            <ul className="theme layout_style">
              {layoutStyleData.map(
                ({ title, Data_color, background }, index) => {
                  return (
                    <li key={index}>
                      <a 
                        title={title}
                        //href=""
                        onClick={() => handleLayoutStyle(Data_color)}
                        data-color={Data_color}
                        style={{ backgroundColor: `${background}`, cursor:'pointer' }}
                      >&nbsp;</a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div className="clear"></div>
          <h4>Idioma</h4>
          <ul className="theme demo_list" style={{marginBottom: 10}}>
            <li style={{ width: "50%" }}>
              <span style={{cursor:'pointer'}} onClick={(e) => {console.info("ES")}}>
                <strong>Spanish</strong>
              </span>
            </li>
            <li style={{ width: "50%" }}>
              <span style={{cursor:'pointer'}} onClick={(e) => {console.info("EN")}}>
                <strong>English</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ThemePanel;

// const ThemePanelStyled = styled.div`
//   button {
//     padding: 0;
//     border: none;

//     &:hover {
//       border: none;
//     }
//   }
// `;
