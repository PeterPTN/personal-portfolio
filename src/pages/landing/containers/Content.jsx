import React from 'react'
import face from '../../../images/faceld.jpg'
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { IoLogoCodepen } from 'react-icons/io'
import { MdOpenInNew } from "react-icons/md";
import { RiFileTextLine } from "react-icons/ri";

import film from "../../../images/onfilmzoomed.png"
import film1 from "../../../images/onfilmzoomed1.png"
import film2 from "../../../images/onfilmzoomed2.png"
import film3 from "../../../images/onfilmtitle.png"

import M1 from "../../../images/music/M1.png"
import M2 from "../../../images/music/M2.png"
import M3 from "../../../images/music/M3.png"
import M4 from "../../../images/music/M4.png"
import M5 from "../../../images/music/M5.png"
import M6 from "../../../images/music/M6.png"

const Content = () => {

    return (
        <div className="portfolio__content-wrapper">
            <div className="portfolio__content-container" >

                <div className="portfolio__about-info-wrapper" >
                    <div className="portfolio__about-info-container background" />
                    <div className="portfolio__about-info-container second-background" />

                    <div className="portfolio__about-info-container main">
                        <div className="portfolio__about-info-halves pic-wrapper">
                            <div className="portfolio__about-info-halves pic-container">
                                <nav className="portfolio__about-social-container">
                                    <ul>
                                        <li><a href="mailto:peter.p.t.nguyen@gmail.com" rel='noreferrer' target="_blank"><AiFillMail title="Email" className="portfolio__about-social-icons" /></a></li>
                                        <li><a href="https://www.linkedin.com/in/peter-nguyen-05314b171/" rel='noreferrer' target="_blank"><AiFillLinkedin title="LinkedIn" className="portfolio__about-social-icons" /></a></li>
                                        <li><a href="https://codepen.io/PPTN_" rel='noreferrer' target="_blank"><IoLogoCodepen title="Codepen" className="portfolio__about-social-icons" /></a></li>
                                        <li><a href="https://github.com/PeterPTN" rel='noreferrer' target="_blank"><AiFillGithub title="Github" className="portfolio__about-social-icons" /></a></li>
                                    </ul>
                                </nav>

                                <img src={face} />
                            </div>
                        </div>


                        <div className="portfolio__about-info-halves info">
                            <h2>About Me</h2>

                            <div className="portfolio__about-info details">
                                <p>Hi, my name is Peter Nguyen. I'm (primarily) a self-taught front-end web developer from Sydney.
                                    I began re-training in web development the summer of 2021 after a brief stint in primary-teaching and in other odd jobs. </p>
                                <p>Since then, I've dedicated most of my freetime to learning how to create web applications. I code mainly in
                                    <span className="html">HTML</span>, <span className="css">CSS</span>, <span className="js">JS</span> and more recently <span className="react">ReactJS</span>
                                    . Below you'll find some milestones I've hit and projects I've made.</p>
                            </div>

                            <div className="portfolio__about-info facts">

                                <div className="portfolio__about-info milestones">
                                    <h3>Milestones</h3>
                                    <ul >
                                        <li>Certificate IV in IT (Web Development)</li>
                                        <li>FreeCodeCamp Responsive Web Design Certificate</li>
                                        <li>FreeCodeCamp JavaScript Certificate</li>
                                        <li>FreeCodeCamp ReactJS Module</li>
                                    </ul>
                                </div>

                                <div className="portfolio__about-info books background" />
                                <div className="portfolio__about-info books">
                                    <h3>Books</h3>
                                    <ul>
                                        <li>CSS in Depth (2018, Keith J. Grant)</li>
                                        <li>Headfirst JavaScript Programming (2015, Elizabeth Robson et al.)</li>
                                        <li>You Don't Know JavaScript Yet (2020, Kyle Simpson)</li>
                                        <li>React Quickly (2022, Azat Mardan)</li>
                                        <li>Design of Everyday Things (2013, Don Norman)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <h2>Selected works</h2>

                <div className="portfolio__project-card-container" >
                    <div className="portfolio__project-card">
                        <div className="portfolio__project-image-container" >
                            <a href="https://onfilm.netlify.app/" target="_blank" rel='noreferrer'>
                                <img className="image --film-zero" src={film} alt="OnFilm Web-Page Cutout 1" />
                                <img className="image --film-one" src={film1} alt="OnFilm Web-Page Cutout 2" />
                                <img className="image --film-two" src={film2} alt="OnFilm Web-Page Cutout 3" />
                                <img className="image --film-three" src={film3} alt="OnFilm Web-Page Cutout 4" />
                            </a>
                        </div>

                        <div className="portfolio__project-details movie background" />
                        <div className="portfolio__project-details movie">
                            <h2 className="portfolio__project-details-title">OnFilm</h2>
                            <p className="portfolio__project-details-description">A film-database app made with ReactJS utilising Trakt & TMDb APIs.</p>
                            <a href="https://github.com/PeterPTN/movieproject" rel='noreferrer' target="_blank" className="portfolio__project-details-blog-link"><RiFileTextLine /> Source Code</a>
                            <a href="https://onfilm.netlify.app/" rel='noreferrer' target="_blank" className="portfolio__project-details-website-link"><MdOpenInNew /> View Website </a>
                        </div>
                    </div>


                    <div className="portfolio__project-card music">
                        <div className="portfolio__project-image-container" href="https://onfilm.netlify.app/" target="_blank">
                            <a href="" target="_blank" rel='noreferrer' style={{pointerEvents: "none"}}>
                                <img className="image --music-zero" src={M1} alt="OnFilm Web-Page Cutout 1" />
                                <img className="image --music-one" src={M2} alt="OnFilm Web-Page Cutout 2" />
                                <img className="image --music-two" src={M3} alt="OnFilm Web-Page Cutout 3" />
                                <img className="image --music-three" src={M5} alt="OnFilm Web-Page Cutout 4" />
                                <img className="image --music-four" src={M6} alt="OnFilm Web-Page Cutout 5" />
                            </a>
                        </div>

                        <div className="portfolio__project-details music background" />
                        <div className="portfolio__project-details music">
                            <h2 className="portfolio__project-details-title">E-Ōke</h2>
                            <p className="portfolio__project-details-description">A "karaoke" web-app made with ReactJS, Node/Express utilising Spotify's API.</p>
                            <a href="https://github.com/PeterPTN/karaokeproject" rel='noreferrer' target="_blank" className="portfolio__project-details-blog-link"><RiFileTextLine /> Source Code</a>
                            <a href="" rel='noreferrer' target="_blank" className="portfolio__project-details-website-link" style={{pointerEvents: "none"}}><MdOpenInNew />Configuring Deployment</a>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Content