import { useState } from 'react'
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { IoLogoCodepen } from 'react-icons/io'
import { BsArrowReturnRight } from "react-icons/bs";
import face2 from '../../../images/face2.jpg';

import film from "../../../images/onfilmzoomed.png";
import film1 from "../../../images/onfilmzoomed1.png";
import film2 from "../../../images/onfilmzoomed2.png";
import film3 from "../../../images/onfilmtitle.png";

import mu1 from "../../../images/music/M1.png";
import mu2 from "../../../images/music/M2.png";
import mu3 from "../../../images/music/M3.png";
import mu4 from "../../../images/music/M5.png";
import mu5 from "../../../images/music/M6.png";

import macAbout from "../../../images/machina/about.png";
import macCards from "../../../images/machina/cards.png";
import macTitle from "../../../images/machina/title.png";
import macHero from "../../../images/machina/hero.png";

import Maincard from '../../../component/Maincard';
import Sidecard from '../../../component/Sidecard';

const Content = () => {
    const [bookToggle, setBookToggle] = useState(false);
    const [milestoneToggle, setMilestoneToggle] = useState(false);
    const [sideprojects, setSideprojects] = useState(false);

    // Name for className
    const musicPics = [
        { src: mu1, class: "--music-zero" },
        { src: mu2, class: "--music-one" },
        { src: mu3, class: "--music-two" },
        { src: mu4, class: "--music-three" },
        { src: mu5, class: "--music-four" }
    ];

    const machinaPics = [
        { src: macAbout, class: "--machina-zero" },
        { src: macCards, class: "--machina-one" },
        { src: macTitle, class: "--machina-two" },
        { src: macHero, class: "--machina-three" }
    ];
    const filmPics = [
        { src: film, class: "--film-zero" },
        { src: film1, class: "--film-one" },
        { src: film2, class: "--film-two" },
        { src: film3, class: "--film-three" }
    ];

    // Selected Works
    const filmContent = {
        images: filmPics,
        details: {
            class: "movie",
            url: "https://onfilm.netlify.app/",
            github: "https://github.com/PeterPTN/movieproject",
            title: "OnFilm",
            tag: "A film-database app made with ReactJS utilising Trakt & TMDb APIs.",
        }
    }

    const musicContent = {
        images: musicPics,
        details: {
            class: "music",
            url: "https://e-oke.adaptable.app/",
            github: "https://github.com/PeterPTN/karaokeproject",
            title: "E-Ōke",
            tag: `A "karaoke" web-app made with ReactJS, Node/Express utilising Spotify's API.`,
            extra: "(Requires Spotify Premium)"
        }
    }

    const machinaContent = {
        images: machinaPics,
        details: {
            class: "machina",
            url: "https://peterptn.github.io/machinaco/index.html",
            github: "https://github.com/PeterPTN/machinaco",
            title: "Machina.co",
            tag: "A simple mock company portfolio made with HTML, SASS and JS."
        }
    }

    // Side Projects
    const fakeContent = {
        title: "fakeOS",
        tag: "A SPA made to replica a Windows 10 OS in terms of UI/UX. Made with HTML, SASS and JS.",
        extra: "Scripts undergoing refactor soon.",
        github: "https://github.com/PeterPTN/fakeOS",
        url: "https://peterptn.github.io/fakeOS/",
        class: "fakeos"
    }

    const morseContent = {
        title: "Morse Code Translator",
        tag: "A SPA designed to translate morsecode into English and vice-versa. Made with HTML, SASS and JS.<br></br> Includes unit testing.",
        github: "https://github.com/PeterPTN/morsecode-translator",
        url: "https://peterptn.github.io/morsecode-translator/",
        class: "morse"
    }

    const placeholderContent = {
        title: "TBD",
        tag: "TBD"
    }

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
                        <Maincard content={filmContent} />
                        <Maincard content={musicContent} />
                        <Maincard content={machinaContent} />
                    </div>
                    :
                    <div className="portfolio__sideprojects-card-container">
                        <Sidecard content={fakeContent}/>
                        <Sidecard content={morseContent}/>
                        <Sidecard content={placeholderContent}/>

                        {/* 
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
                         */}
                    </div>
                }
            </div>
        </div >
    )
}

export default Content