import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { Link } from "react-router-dom";
import ThemePanel from "../components/ThemePanel";
import styled from "styled-components";
import data from "../data/posts";
import { overlayAnimation } from "../App";
import Overlay from "../components/Overlay";
import menu from "../data/menu";

const BlogPage = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
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

            <AllBlogStyle>
                <div className="container">
                    {/* // <!-- Card - Blog --> */}
                    <div className="card-inner blogs active" id="blog-card">
                        <div className="row card-container" data-simplebar>
                            {/* <!-- Card Wrap --> */}
                            <div className="card-wrap blogs-content col col-m-12 col-t-12 col-d-9 col-d-lg-9">
                                {/* <!-- Inner Top --> */}
                                <div className="content inner-top">
                                    <div className="row">
                                        <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                            <div className="title-bg">My Blog</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 	Blog --> */}
                                <div className="content blog">
                                    <div className="row">
                                        <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                            {/* <!-- title --> */}
                                            <div className="title">
                                                <span>My</span> Blog
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- blog items --> */}
                                    <div className="row">
                                        {/* <!-- blog item --> */}
                                        {data.map((post, index) => {
                                            return (
                                                <div
                                                    className="col col-m-12 col-t-12 col-d-6 col-d-lg-6"
                                                    key={index}
                                                >
                                                    <div className="box-item card-box">
                                                        <div className="image">
                                                            <Link to="blog-post">
                                                                <img src={post.image_url} alt="post" />
                                                                <span className="info">
                                                                    <span className="icon la la-newspaper-o"></span>
                                                                </span>
                                                                <span className="date">
                                                                    <strong>{post.date}</strong>
                                                                    {post.month}
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="desc">
                                                            <a href="blog-post" className="name">
                                                                {post.title}
                                                            </a>
                                                            <div className="category">{post.category}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>




                                    <div className="pager">
                                        <span
                                            aria-current="page"
                                            className="page-numbers current"
                                        >
                                            1
                                        </span>
                                        <a className="page-numbers" href="#paginate">
                                            2
                                        </a>
                                        <a className="next page-numbers" href="#paginate">
                                            Next
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-wrap blogs-sidebar col col-m-12 col-t-12 col-d-3 col-d-lg-3">
                                <aside id="secondary" className="widget-area">
                                    <div className="widget widget_search">
                                        <form
                                            role="search"
                                            method="get"
                                            className="search-form"
                                            onSubmit={handleSubmit}
                                        >
                                            <label>
                                                <span className="screen-reader-text">
                                                    Search for:
                                                </span>
                                                <input
                                                    type="search"
                                                    className="search-field"
                                                    placeholder="Search …"
                                                />
                                            </label>
                                            <input type="submit" className="search-submit" />
                                        </form>
                                    </div>
                                    <div className="widget widget_recent_entries">
                                        <h2 className="widget-title">Recent Posts</h2>
                                        <ul>
                                            <li>
                                                <a href="#recent_post">By spite about do of do allow</a>
                                            </li>
                                            <li>
                                                <a href="#recent_post">Creativity Is More Than A Song And Dance Act</a>
                                            </li>
                                            <li>
                                                <a href="#recent_post">Creativity Is More Than A Song And Dance Act</a>
                                            </li>
                                            <li>
                                                <a href="#recent_post">Music Player Design</a>
                                            </li>
                                            <li>
                                                <a href="#recent_post">Two Before Arrow Not Relied</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_recent_comments">
                                        <h2 className="widget-title">Recent Comments</h2>
                                        <ul id="recentcomments">
                                            <li className="recentcomments">
                                                <span className="comment-author-link">Adam Doe</span> on
                                                <a href="#comment">Creativity Is More Than A Song And Dance Act</a>
                                            </li>
                                            <li className="recentcomments">
                                                <span className="comment-author-link">JOHN Smith</span> on
                                                <a href="#comment">By spite about do of do allow</a>
                                            </li>
                                            <li className="recentcomments">
                                                <span className="comment-author-link">Adam Smith</span> on
                                                <a href="#comment">Creativity Is More Than A Song And Dance Act</a>
                                            </li>
                                            <li className="recentcomments">
                                                <span className="comment-author-link">JESSE DOE</span> on
                                                <a href="#comment">Music Player Design</a>
                                            </li>
                                            <li className="recentcomments">
                                                <span className="comment-author-link">JESSE PITMAN</span> on
                                                <a href="#comment">Music Player Design</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_archive">
                                        <h2 className="widget-title">Archives</h2>
                                        <ul>
                                            <li>
                                                <a href="#archives">August 2018</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_categories">
                                        <h2 className="widget-title">
                                            <span className="widget-title-span">Categories</span>
                                        </h2>
                                        <ul>
                                            <li className="cat-item cat-item-2"><a href="#bc">Design</a></li>
                                            <li className="cat-item cat-item-3"><a href="#bc">Music</a></li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_meta">
                                        <h2 className="widget-title">Meta</h2>
                                        <ul>
                                            <li>
                                                <a href="#login">Log in</a>
                                            </li>
                                            <li>
                                                <a href="#rss">
                                                    Entries{" "}
                                                    <abbr title="Really Simple Syndication">RSS</abbr>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#rss">
                                                    Comments{" "}
                                                    <abbr title="Really Simple Syndication">RSS</abbr>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://react.org" target="_blank" rel="noreferrer">react.org</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </AllBlogStyle>


        </Tabs>
    );
};

export default BlogPage;

const AllBlogStyle = styled.div`
  button {
    border: none;
    padding: 0;
    margin: 0;
  }
`;
