import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faReact } from '@fortawesome/free-brand-svg-icons';
import ProfileImg from "../images/profile.jpg";
import client_img_1 from "../images/clients/client_1.png";
import client_img_2 from "../images/clients/client_2.png";
import client_img_3 from "../images/clients/client_3.png";
import client_img_4 from "../images/clients/client_4.png";
import technologiesList from '../data/technologiesList.js'
import { overlayAnimation } from "../App";
import Overlay from "./Overlay";



const About = () => {

  useEffect(() => {
    overlayAnimation();
  }, []);


  return (
    <>
      <Overlay />
      {/* Card - About */}
      <div
        className="card-inner active"
        id="about-card"
      >
        <div className="row card-container">
          {/* Card Wrap */}
          <div className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6">
            {/* About Image  */}
            <div
              className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"
              style={{ backgroundImage: `url(${ProfileImg})` }}
            ></div>
            {/* Inner Top */}
            <div className="content inner-top">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg">Sobre mí</div>
                  <div className="text">
                    <p>
                      Me llamo <strong>Laura</strong>, soy desarrolladora Front-End y vivo en Jerez de la Frontera. <br />
                      Estoy especializada en <strong>ReactJS</strong> pero me encanta aprender nuevas tecnologías. <br />
                      También destaco especialmente en{" "}
                      <strong>
                        VueJS, Redux Saga, React Native, Android y NextJS.
                      </strong>
                    </p>
                  </div>
                  <div className="circle-bts">
                    <a href="./CV_MDFM_FRONTDEV_.pdf" download>
                      <span>
                        <i className="icon la la-download"></i>Descargar CV
                      </span>
                    </a>
                    <a href="https://es.linkedin.com/in/manuelfde4" target="_blank" rel="noreferrer">
                      <i className="icon la ion-social-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* // <!--	Tecnologías --> */}
            <div className="content fuct">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>Tecnologías</span> principales
                  </div>
                </div>
              </div>

              {/* <!-- Tecnologías items --> */}
              <div className="row fuct-items">
                {/* <!-- Tecnologías item --> */}
                {technologiesList.map(({ icon_url, title }, index) => {
                  return (
                    <div
                      className="col col-m-6 col-t-6 col-d-3 col-d-lg-3"
                      key={index}
                    >
                      <div className="fuct-item card-box">
                        <div className="icon">
                            <i class={icon_url}></i>
                        </div>
                        <div className="name">{title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
