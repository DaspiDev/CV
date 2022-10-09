import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import image_profile_2 from "../images/profile2.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../hooks/useOnScreen";
import { overlayAnimation } from "../App";
import Overlay from "./Overlay";
import curriculumExperience from '../data/curriculumExperience.js'
import curriculumEducation from '../data/curriculumEducation.js'

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const personalSkills = [
    {
      title: "Communication",
      width: "90%",
    },
    {
      title: "Team Work",
      width: "65%",
    },
    {
      title: "Leadership",
      width: "75%",
    },
    {
      title: "Language",
      width: "85%",
    },
  ];

  const profassionalSkills = [
    {
      title: "wordpress",
      width: "90%",
    },
    {
      title: "PHP / MYSQL",
      width: "65%",
    },
    {
      title: "htm/lcss/js",
      width: "95%",
    },
    {
      title: "photoshop",
      width: "85%",
    },
  ];

  const personalSkillsRef = useRef();
  const personalSkillOnScreen = useOnScreen(personalSkillsRef);
  const professionalSkillOnScreen = useOnScreen(personalSkillsRef);

  useEffect(() => {
    overlayAnimation();
  }, [personalSkillOnScreen]);

  return (
    <>
      <Overlay />
      {/* // <!--  Card - Resume --> */}
      <div className="card-inner active" id="resume-card">
        <div className="row card-container">
          {/* <!-- Card Wrap --> */}
          <div
            className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6"
            data-simplebar
          >
            {/* <!-- Resume Image --> */}
            <div
              className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"
              style={{ backgroundImage: `url(${image_profile_2})` }}
            ></div>

            {/* <!-- Inner Top --> */}
            <div className="content inner-top">
              <div className="row">
                <div className=" col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg">Curriculum</div>
                </div>
              </div>
            </div>

            {/* <!-- Resume --> */}
            <div className="content resume">
              <div className="row">
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                    {/* <!-- title --> */}
                    <div className="title">
                        <span>Mi</span> Experiencia
                    </div>

                    {/* <!-- Curriculum items --> */}
                    {
                        curriculumExperience.map((element, idx) => 
                                <div className="resume-items card-box" key={idx}>
                                    <div className="resume-item">
                                        <div className="name">{element.title}</div>
                                        <div className="date">
                                        {element.range} <span>|</span> {element.employer}
                                        </div>
                                        {
                                            element.phases.length > 0 && 
                                            <div className="phases-container">
                                                {element.phases.map((phase, idx) => 
                                                    <div className="resume-items card-box gap-box" key={"phase" + idx}>
                                                        <div className="resume-item">
                                                            <div className="name">{phase.title}</div>
                                                            <div className="date">
                                                            {phase.technologies} 
                                                            </div>
                                                            <p>
                                                            {phase.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        }
                                    </div>
                                </div>
                        )
                    }
                </div>
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>Mi</span> Educación
                  </div>

                  {/* <!-- resume items --> */}
                  <div className="resume-items card-box">
                    {/* <!-- Curriculum items --> */}
                    {
                        curriculumEducation.map(element => 
                            <div className="resume-item">
                                <div className="name">{element.title}</div>
                                <div className="date">
                                    {element.range} <span>|</span> {element.center}
                                </div>
                                <p>{element.text}</p>
                            </div>
                        )
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* Skills */}
            <div className="content skills">
              <div className="row">
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>Personal</span> Skills
                  </div>

                  {/* <!-- skills --> */}
                  <div className="skills-list card-box" ref={personalSkillsRef}>
                    <ul>
                      {personalSkills.map(({ title, width }, index) => {
                        return (
                          <li key={index}>
                            <div className="name">{title}</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{
                                  width: personalSkillOnScreen ? width : 0,
                                }}
                              ></div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>Professional</span> Skills
                  </div>

                  {/* <!-- skills --> */}
                  <div className="skills-list card-box">
                    <ul>
                      {profassionalSkills.map(({ title, width }, index) => {
                        return (
                          <li key={index}>
                            <div className="name">{title}</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{
                                  width: professionalSkillOnScreen ? width : 0,
                                }}
                              ></div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
