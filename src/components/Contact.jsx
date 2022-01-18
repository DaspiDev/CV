import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import Map from "./Map";
// import Map2 from "./Map2";
import { overlayAnimation } from "../App";
import Overlay from "./Overlay";

const Contact = () => {
  const cotactInfoData = [
    {
      icon: "la la-map-marker",
      name: "address",
      text: "France, Paris.",
    },
    {
      icon: "la la-at",
      name: "email",
      text: "adlard@example.com",
    },
    {
      icon: "la la-phone",
      name: "phone",
      text: "+123 654 78900",
    },
    {
      icon: "la la-check-square",
      name: "freelence",
      text: "available",
    },
  ];

  const [successMessage, setSuccessMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage("Thanks, your message is sent successfully.");
    toast(successMessage)

  };
  useEffect(() => {
    overlayAnimation();
  }, []);
  return (
    <>
      <Overlay />
      <ContactStyled>
        {/* //  {<!--  Card - Contacts -->} */}
        <div className="card-inner active" id="contacts-card">
          <div className="row card-container">
            {/* <!-- 	Card Wrap --> */}
            <div
              className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6"
              data-simplebar
            >
              {/* <!-- Map --> */}
              <div className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6">
                <div className="map" id="map">
                  <Map />
                </div>
              </div>

              {/* <!-- Inner Top --> */}
              <div className="content inner-top">
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    <div className="title-bg">Contacts</div>
                  </div>
                </div>
              </div>

              {/* <!-- Contacts Info --> */}
              <div className="content contacts-info">
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    {/* <!-- title --> */}
                    <div className="title">
                      <span>Get</span> in Touch
                    </div>
                  </div>
                </div>

                {/* <!-- contacts items --> */}
                <div className="row contacts-items">
                  {/* <!-- contacts item --> */}
                  {cotactInfoData.map(({ icon, name, text }, index) => {
                    return (
                      <div
                        className="col col-m-12 col-t-6 col-d-6 col-d-lg-6"
                        key={index}
                      >
                        <div className="contacts-item card-box">
                          <div className="icon">
                            <i className={icon}></i>
                          </div>
                          <div className="name">{name}</div>
                          <p>{text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/*<!-- Contacts Form --> */}
              <div className="content contacts-form">
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    {/* <!-- title --> */}
                    <div className="title">
                      <span>Contact</span> Form
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    {/* <!-- form --> */}
                    <div className="contact_form card-box"  >
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                            <div className="group-val">
                              <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                            <div className="group-val">
                              <input
                                type="text"
                                name="email"
                                placeholder="Email Address"
                              />
                            </div>
                          </div>
                          <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                            <div className="group-val">
                              <textarea
                                name="message"
                                placeholder="Your Message"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="align-left">
                          <button className="buton">
                            <span className="text">Send Message</span>
                            <span className="icon">
                              <i className="la la-arrow-right"></i>
                            </span>
                          </button>
                        </div>
                      </form>
                      {successMessage !== null? (
                        <div className="alert-success">
                          <p>Thanks, your message is sent successfully.</p>
                        </div>
                      ): null}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContactStyled>
    </>
  );
};

export default Contact;

const ContactStyled = styled.div`
  form {
    display: block;
  }
  .alert-success {
    display: none;
  }
  .active-alert {
    form {
      display: none;
    }
    .alert-success {
      display: block;
    }
  }
`;
