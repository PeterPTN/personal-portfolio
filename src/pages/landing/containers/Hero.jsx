import React from 'react'
import { useEffect, useState } from 'react';

const Hero = () => {
    const [opacity, setOpacity] = useState("1");
    const [up, setUp] = useState("0")

    useEffect(() => {
        function handleScroll() {
            setUp(window.scrollY * 0.02);
            setOpacity(1 - (window.scrollY * 0.002));
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className="portfolio__hero-wrapper">

            <div className="portfolio__hero-container" >
                <div className="portfolio__hero-display-container main">
                    <div className="portfolio__hero-display-peter">
                        <h1>Peter</h1>
                    </div>

                    <div className="portfolio__hero-display-phong-thanh">
                        <h2 className="phong">hòng</h2>
                        <h2 className="thanh">Thành</h2>
                    </div>

                    <div className="portfolio__hero-display-nguyen">
                        <h1>Nguyen</h1>
                    </div>


                </div>

                <div className="portfolio__hero-main-tag-container" style={{
                    opacity: opacity,
                    transform: `translateY(-${up}rem)`
                }}>

                    <h4>Front-end Web Developer</h4>
                    <span />
                    <h2>People-centric Designs</h2>

                </div>
            </div>
        </div>
    )
}

export default Hero