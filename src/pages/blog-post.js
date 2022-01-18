import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { Link } from "react-router-dom";
import ThemePanel from "../components/ThemePanel";
import { overlayAnimation } from "../App";
import Overlay from "../components/Overlay";
import menu from "../data/menu";

const BlogPost = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    useEffect(() => {
        overlayAnimation();
    }, []);

    return (
        <Tabs as="div" className="page">
            <Overlay />

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
                                <Link to="/">
                                    <span className={item.icon}></span>
                                    <span className="link">{item.title}</span>
                                </Link>
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
                <div className="card-inner active" id="blog-card">
                    <div className="row card-container">
                        {/*
						Card Wrap
					*/}
                        <div className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6" data-simplebar="init"><div className="simplebar-track vertical" style={{ visibility: 'visible' }}><div className="simplebar-scrollbar visible" style={{ visibility: 'visible', top: 0, height: 55 }} /></div><div className="simplebar-track horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" /></div><div className="simplebar-scroll-content" style={{ paddingRight: 12, marginBottom: '-24px' }}><div className="simplebar-content" style={{ paddingBottom: 12, marginRight: '-12px' }}>
                            {/* Blog Image */}
                            <div className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6" style={{ backgroundImage: 'url(images/blog/blog1-inner.jpg)' }} />
                            {/*
							Inner Top
						*/}
                            <div className="content inner-top">
                                <div className="row">
                                    <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                        <div className="title-bg">Blog Post</div>
                                    </div>
                                </div>
                            </div>
                            {/*
							Blog Single
						*/}
                            <div className="content blog-single">
                                {/* content */}
                                <div className="row">
                                    <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                        <div className="post-box card-box">
                                            {/* blog detail */}
                                            <h1>Procuring Education on Consulted Assurance in Do</h1>
                                            <div className="blog-detail">Posted 12 June 2016</div>
                                            {/* blog content */}
                                            <div className="blog-content">
                                                <p>
                                                    So striking at of to welcomed resolved. Northward by described up household therefore
                                                    attention. Excellence decisively nay man yet impression for contrasted remarkably.
                                                </p>
                                                <p>
                                                    Forfeited you engrossed but gay sometimes explained. Another as studied it to evident.
                                                    Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining
                                                    determine few her two cordially admitting old.
                                                </p>
                                                <blockquote>
                                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                                    Curae; Pellentesque suscipit.
                                                </blockquote>
                                                <p>
                                                    Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh
                                                    removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on.
                                                    Increasing sufficient everything men him admiration unpleasing sex.
                                                </p>
                                                <ul className="list-style">
                                                    <li>Greatest properly off ham exercise all.</li>
                                                    <li>Unsatiable invitation its possession nor off.</li>
                                                    <li>All difficulty estimating unreserved increasing the solicitude.</li>
                                                </ul>
                                                <p>
                                                    Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means
                                                    up civil do an offer wound of.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                        {/* title */}
                                        <div className="title"><span>Post</span> Comments</div>
                                    </div>
                                </div>
                                {/* comments */}
                                <div className="row">
                                    <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                        <div className="post-box card-box comments">
                                            {/* comments items */}
                                            <ul className="post-comments">
                                                {/* comment item */}
                                                <li>
                                                    <img src="/images/man1.jpg" alt="replay" />
                                                    <div className="comment-info">
                                                        <div className="name">
                                                            <h6>John Doe <span>1 hour ago</span></h6>
                                                            <a href="#patrick">Reply</a>
                                                        </div>
                                                        <p>
                                                            Kept in sent gave feel will oh it we. Has pleasure procured men
                                                            laughing shutters nay.
                                                        </p>
                                                    </div>
                                                </li>
                                                {/* comment item */}
                                                <li>
                                                    <img src="/images/man1.jpg" alt="replay" />
                                                    <div className="comment-info">
                                                        <div className="name">
                                                            <h6>John Doe <span>3 hour ago</span></h6>
                                                            <a href="#patrick">Reply</a>
                                                        </div>
                                                        <p>
                                                            Kept in sent gave feel will oh it we. Has pleasure procured men
                                                            laughing shutters nay.
                                                        </p>
                                                    </div>
                                                </li>
                                                {/* comment item */}
                                                <li>
                                                    <img src="/images/man1.jpg" alt="replay" />
                                                    <div className="comment-info">
                                                        <div className="name">
                                                            <h6>John Doe <span>6 hour ago</span></h6>
                                                            <a href="#patrick">Reply</a>
                                                        </div>
                                                        <p>
                                                            Kept in sent gave feel will oh it we. Has pleasure procured men
                                                            laughing shutters nay.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                        {/* title */}
                                        <div className="title"><span>Leave</span> a Comment</div>
                                    </div>
                                </div>
                                {/* comments */}
                                <div className="row">
                                    <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                        <div className="post-box card-box comments-form">
                                            {/* comment form */}
                                            <form id="cform" method="post" noValidate="novalidate">
                                                <div className="row">
                                                    <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                                        <div className="group-val">
                                                            <input type="text" name="name" placeholder="Full Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                                        <div className="group-val">
                                                            <textarea name="message" placeholder="Your Message" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="align-left">
                                                    <a href="#patrick" className="button" onclick="$('#cform').submit(); return false;">
                                                        <span className="text">Add Comment</span>
                                                        <span className="arrow" />
                                                    </a>
                                                </div>
                                            </form>
                                            <div className="alert-success">
                                                <p>Thanks, your message is sent successfully.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </Tabs>
    );
};

export default BlogPost;
