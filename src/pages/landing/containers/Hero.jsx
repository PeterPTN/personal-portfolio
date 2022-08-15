import React from 'react'

const Hero = () => {
    return (
        <div className="portfolio__hero-wrapper">
            <nav className="portfolio__hero-nav-menu">
                <ul>
                    <li><a>Contact</a></li>
                </ul>
            </nav>

            <div className="portfolio__hero-display-container portfolio__hero-display-container--background" />
            <div className="portfolio__hero-display-container">
                <div className="portfolio__hero-display-peter">
                    <h1>Peter</h1>
                </div>

                <div className="portfolio__hero-display-phong-thanh">
                    <h2 className="phong">Phòng</h2>
                    <h2 className="thanh">Thành</h2>

                </div>

                <div className="portfolio__hero-display-nguyen">
                    <h1>Nguyen</h1>
                    
                </div>
            </div>

            <div className="portfolio__hero-main-tag-container">
                <h4>Front-end Web Development</h4>
                <span />
                <h2>People-centric Designs</h2>
            </div>

            <div className="portfolio__hero-arrow" />

        </div>
    )
}

export default Hero