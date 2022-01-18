import React, {useEffect} from "react";
import profile_img_4 from "../images/profile4.jpg";
import data  from "../data/posts";
import { Link } from "react-router-dom";
import { overlayAnimation } from "../App";
import Overlay from "./Overlay";

const Blog = ()=> {
  useEffect(() => {
    overlayAnimation();
  }, []);

  return (
    <>
      <Overlay />
      {/* <!-- 	Card - Blog --> */}
      <div className="card-inner active" id="blog-card">
        <div className="row card-container">
          {/* <!-- Card Wrap --> */}
          <div
            className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6"
            data-simplebar
          >
            {/* <!-- Blog Image --> */}
            <div
              className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"
              style={{ backgroundImage: `url(${profile_img_4})` }}
            ></div>

            {/* <!-- Inner Top --> */}
            <div className="content inner-top">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg">My Blog</div>
                </div>
              </div>
            </div>

            {/* <!-- Blog --> */}
            <div className="content blog">
              <div className="row">
                <div className="col col-m-12 col-t-5 col-d-5 col-d-lg-5">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>My</span> Blog
                  </div>
                </div>
                <div className="col col-m-12 col-t-7 col-d-7 col-d-lg-7">
                  {/* <!-- filters --> */}
                  <div className="all-blog">
                    <Link as="button" className="btn" to="/blog">
                      <span>all blog</span>
                    </Link>

                  </div>
                </div>
              </div>

              {/* <!-- blog items --> */}
              <div className="row">
                {/* <!-- blog item --> */}
                {data.slice(0, 3).map((item, index) => {
                  const { image_url, title, category, date, month, icon } =
                    item;
                  return (
                    <div
                      className="col col-m-12 col-t-12 col-d-12 col-d-lg-12"
                      key={index}
                    >
                      <div
                        className="box-item card-box"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="image">
                          <div>
                            <img
                              src={image_url}
                              alt={title}
                              style={{ transition: "all .4s" }}
                            />
                            <span className="info">
                              <span className={`icon ${icon}`}></span>
                            </span>
                            <span className="date">
                              <strong>{date}</strong>
                              {month}
                            </span>
                          </div>
                        </div>
                        <div className="desc">
                          <Link to="/blog-post" className="name">{title}</Link>
                          <div className="category">{category}</div>
                        </div>
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

export default Blog;
