import { useState } from 'react'
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { IoLogoCodepen } from 'react-icons/io'
import { BsArrowReturnRight } from "react-icons/bs";
import face2 from "../images/face2.jpg";

import { mainProjects } from '../data/main-projects';
import { sideProjects } from '../data/side-projects';

import Maincard from '../components/Maincard';
import Sidecard from '../components/Sidecard';

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
                                <p>Hi, my name is Peter Nguyen. I'm (primarily) a self-taught software developer from Sydney.
                                    I began re-training in software development the summer of 2021 after a brief stint in primary-teaching and in other odd jobs. </p>
                                <p>Since then, I've dedicated most of my freetime to learning how to create web applications. I code mainly in
                                    <span className="html stack">HTML</span>, <span className="css stack">CSS</span>, <span className="js stack">JS</span>, <span className="react stack">ReactJS</span>, 
                                    <span className="typescript stack">TypeScript</span> and more recently and <span className="java stack">Java</span>, 
                                    <span className="spring stack">Springboot</span> and <span className="nest stack">NestJS</span>
                                    . Below you'll find some milestones I've hit and projects I've made.</p>
                            </div>

                            <div className="portfolio__about-info facts">

                                <div className="portfolio__about-info milestones">
                                    <div className="portfolio__about-info milestones-header">
                                        <h3>Milestones</h3>
                                        <h4 onClick={() => setMilestoneToggle(!milestoneToggle)}>More &#8594;</h4>
                                    </div>

                                    {!milestoneToggle ?
                                        <ul >
                                            <li>_nology Software Engineer Course</li>
                                            <li>Certificate IV in IT (Web Development)</li>
                                            <li>FreeCodeCamp - Responsive Web Design Certificate</li>
                                            <li>FreeCodeCamp - JavaScript Certificate</li>
                                            <li>FreeCodeCamp - ReactJS Module</li>
                                        </ul>
                                        :
                                        <ul>
                                            <li>CodeAcademy - Java Course</li>
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
                                            <li className="headFirstJs">Headfirst JavaScript Programming (2015, Elizabeth Robson et al.)</li>
                                            <li className="reactQuickly">React Quickly (2022, Azat Mardan)</li>
                                            <li className="design">Design of Everyday Things (2013, Don Norman)</li>
                                            <li className="dontKnow">You Don't Know JavaScript Yet (2020, Kyle Simpson)</li>
                                        </ul>
                                        :
                                        <ul>
                                            <li className="artOf">The Art of Computer Programming Vol. 1 (1997, Donald E. Knuth)</li>
                                            <li className="headFirstJava">Headfirst Java Programming (2022, Kathy Sierra et al.)</li>
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
                        {mainProjects.map((project) => (
                            <Maincard key={project.id} content={project} />
                        ))}
                    </div>
                    :
                    <div className="portfolio__sideprojects-card-container">
                        {sideProjects.map((project) => (
                            <Sidecard key={project.id} content={project} />
                        ))}
                    </div>
                }
            </div>
        </div >
    )
}

export default Content