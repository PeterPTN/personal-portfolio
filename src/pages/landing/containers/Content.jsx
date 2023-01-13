import { useState } from 'react'
import face2 from '../../../images/face2.jpg';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { IoLogoCodepen } from 'react-icons/io'
import { MdOpenInNew } from "react-icons/md";
import { RiFileTextLine } from "react-icons/ri";
import { BsArrowReturnRight } from "react-icons/bs";

import film from "../../../images/onfilmzoomed.png"
import film1 from "../../../images/onfilmzoomed1.png"
import film2 from "../../../images/onfilmzoomed2.png"
import film3 from "../../../images/onfilmtitle.png"

import M1 from "../../../images/music/M1.png"
import M2 from "../../../images/music/M2.png"
import M3 from "../../../images/music/M3.png"
import M5 from "../../../images/music/M5.png"
import M6 from "../../../images/music/M6.png"

import MCAbout from "../../../images/machina/about.png"
import MCCards from "../../../images/machina/cards.png"
import MCTitle from "../../../images/machina/title.png"
import MCCHero from "../../../images/machina/hero.png"

const Content = () => {
    const [bookToggle, setBookToggle] = useState(false);
    const [milestoneToggle, setMilestoneToggle] = useState(false);
    const [sideprojects, setSideprojects] = useState(false);

    return (
        <div className="portfolio__content-wrapper">
            <div className="portfolio__content-container" >

                <div className="portfolio__about-info-wrapper" >
                    <div className="portfolio__about-info-container background" />
                    <div className="portfolio__about-info-container second-background" />

                    <div className="portfolio__about-info-container main">
                        {/* pic-wrapper determines height of about me section through padding*/}
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

                                <img src={face2} alt="My face" />
                            </div>
                        </div>


                        <div className="portfolio__about-info-halves info">
                            <h2>About Me</h2>

                            <div className="portfolio__about-info details">
                                <p>Hi, my name is Peter Nguyen. I'm (primarily) a self-taught front-end web developer from Sydney.
                                    I began re-training in web development the summer of 2021 after a brief stint in primary-teaching and in other odd jobs. </p>
                                <p>Since then, I've dedicated most of my freetime to learning how to create web applications. I code mainly in
                                    <span className="html">HTML</span>, <span className="css">CSS</span>, <span className="js">JS</span>, <span className="react">ReactJS</span> and more recently <span className="typescript">TypeScript</span> and <span className="java">Java</span>
                                    . Below you'll find some milestones I've hit and projects I've made.</p>
                            </div>

                            <div className="portfolio__about-info facts">

                                <div className="portfolio__about-info milestones">
                                    <h3>Milestones</h3>
                                    <h4 onClick={() => setMilestoneToggle(!milestoneToggle)}>More &#8594;</h4>

                                    {!milestoneToggle ?
                                        <ul >
                                            <li>Certificate IV in IT (Web Development)</li>
                                            <li>FreeCodeCamp - Responsive Web Design Certificate</li>
                                            <li>FreeCodeCamp - JavaScript Certificate</li>
                                            <li>FreeCodeCamp - ReactJS Module</li>
                                            <li>CodeAcademy - Java Course</li>
                                        </ul>
                                        :
                                        <ul>
                                            <li>_nology Software Engineer Course (ongoing)</li>
                                        </ul>
                                    }
                                </div>
                                <div className="portfolio__about-info books background" />
                                <div className="portfolio__about-info books">
                                    <h3>Books</h3>

                                    {!bookToggle
                                        ?
                                        <ul>
                                            <li className="cssInDepth">CSS in Depth (2018, Keith J. Grant)</li>
                                            <li className="headfirst">Headfirst JavaScript Programming (2015, Elizabeth Robson et al.)</li>
                                            <li className="reactQuicky">React Quickly (2022, Azat Mardan)</li>
                                            <li className="design">Design of Everyday Things (2013, Don Norman)</li>
                                            <li className="dontKnow">You Don't Know JavaScript Yet (2020, Kyle Simpson)</li>
                                        </ul>
                                        :
                                        <ul>
                                            <li className="artOf">The Art of Computer Programming Vol. 1 (1997, Donald E. Knuth)</li>
                                        </ul>
                                    }

                                    <BsArrowReturnRight onClick={() => setBookToggle(!bookToggle)} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='portfolio__projects-header'>
                    {!sideprojects
                        ?
                        <>
                            <h2>Selected works</h2>
                            <h2 onClick={() => setSideprojects(!sideprojects)}>Side-projects</h2>
                        </>
                        :
                        <>
                            <h2>Side-Projects</h2>
                            <h2 onClick={() => setSideprojects(!sideprojects)}>Selected Works</h2>
                        </>
                    }
                </div>
                {!sideprojects ?
                    <div className="portfolio__project-card-container" >
                        <>
                            < div className="portfolio__project-card">
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
                                <div className="portfolio__project-image-container">
                                    <a href="https://e-oke.adaptable.app/" target="_blank" rel='noreferrer'>
                                        <img className="image --music-zero" src={M1} alt="E-oke Web-Page Cutout 1" />
                                        <img className="image --music-one" src={M2} alt="E-oke Web-Page Cutout 2" />
                                        <img className="image --music-two" src={M3} alt="E-oke Web-Page Cutout 3" />
                                        <img className="image --music-three" src={M5} alt="E-oke Web-Page Cutout 4" />
                                        <img className="image --music-four" src={M6} alt="E-oke Web-Page Cutout 5" />
                                    </a>
                                </div>

                                <div className="portfolio__project-details music background" />
                                <div className="portfolio__project-details music">
                                    <h2 className="portfolio__project-details-title">E-Ōke</h2>
                                    <p className="portfolio__project-details-description">A "karaoke" web-app made with ReactJS, Node/Express utilising Spotify's API.</p>
                                    <a href="https://github.com/PeterPTN/karaokeproject" rel='noreferrer' target="_blank" className="portfolio__project-details-blog-link"><RiFileTextLine /> Source Code</a>
                                    <a href="https://e-oke.adaptable.app/" rel='noreferrer' target="_blank" className="portfolio__project-details-website-link"><MdOpenInNew />View Website</a>
                                    <p className="portfolio__project-details-modal">(Requires Spotify Premium)</p>
                                </div>
                            </div>

                            <div className="portfolio__project-card machina">
                                <div className="portfolio__project-image-container">
                                    <a href="https://peterptn.github.io/machinaco/index.html" target="_blank" rel='noreferrer'>
                                        <img className="image --machina-zero" src={MCAbout} alt="Machina Web-Page Cutout 1" />
                                        <img className="image --machina-two" src={MCCards} alt="Machina Web-Page Cutout 3" />
                                        <img className="image --machina-three" src={MCTitle} alt="Machina Web-Page Cutout 4" />
                                        <img className="image --machina-four" src={MCCHero} alt="Machina Web-Page Cutout 5" />
                                    </a>
                                </div>

                                <div className="portfolio__project-details machina background" />
                                <div className="portfolio__project-details machina">
                                    <h2 className="portfolio__project-details-title">Machina.co</h2>
                                    <p className="portfolio__project-details-description">A simple mock company portfolio made with HTML, SASS and JS.</p>
                                    <a href="https://github.com/PeterPTN/machinaco" rel='noopener noreferrer' target="_blank" className="portfolio__project-details-blog-link"><RiFileTextLine /> Source Code</a>
                                    <a href="https://peterptn.github.io/machinaco/index.html" rel='noopener noreferrer' target="_blank" className="portfolio__project-details-website-link"><MdOpenInNew />View Website</a>
                                </div>
                            </div>
                        </>
                    </div>
                    :
                    <div className="portfolio__sideprojects-card-container">
                        <a className="portfolio__sideprojects-card fakeos" href="https://peterptn.github.io/fakeOS/" target="_blank" rel='noreferrer'>
                            <h2>fakeOS</h2>
                            <p>A SPA made to replica a Windows 10 OS in terms of UI/UX. Made with HTML, SASS and JS.</p>
                            <p>Scripts undergoing refactor soon.</p>
                            <div className="portfolio__sideprojects-card-btns fakeos">
                                <a href="https://github.com/PeterPTN/fakeOS" target="_blank" rel='noreferrer'>Source Code</a>
                                <a href="https://peterptn.github.io/fakeOS/" target="_blank" rel='noreferrer'>View Live</a>
                            </div>
                        </a>

                        <a className="portfolio__sideprojects-card morse" href="https://peterptn.github.io/morsecode-translator/" target="_blank" rel='noreferrer'>
                            <h2>Morse Code Translator</h2>
                            <p>A SPA designed to translate morsecode into English and vice-versa. Made with HTML, SASS and JS.<br></br> Includes unit testing.</p>
                            <div className="portfolio__sideprojects-card-btns morse">
                                <a href="https://github.com/PeterPTN/morsecode-translator" target="_blank" rel='noreferrer'>Source Code</a>
                                <a href="https://peterptn.github.io/morsecode-translator/" target="_blank" rel='noreferrer'>View Live</a>
                            </div>
                        </a>

                        <a className="portfolio__sideprojects-card" href="" target="_blank" rel='noreferrer'>
                            <h2>TBD</h2>
                            <p>TBD</p>
                            <div className="portfolio__sideprojects-card-btns">
                                <a href="" target="_blank" rel='noreferrer'>Source Code</a>
                                <a href="" target="_blank" rel='noreferrer'>View Live</a>
                            </div>
                        </a>
                    </div>
                }

            </div>
        </div >
    )
}

export default Content