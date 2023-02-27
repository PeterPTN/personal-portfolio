const Hero = () => {
    return (
        <div className="portfolio__hero-wrapper">
            <div className="portfolio__hero-container">

                <div className="portfolio__hero-top-row">
                    <div className="portfolio__hero-top-left">
                        <h1 className="peter">Peter</h1>
                    </div>

                    <div className="portfolio__hero-top-right">
                        <h3 className="phong-thanh">Phòng Thành</h3>
                    </div>
                </div>


                <div className="portfolio__hero-bottom-row" >
                    <div className="portfolio__hero-bot-left">
                        <div className="lantern-container">
                            <div className="lantern" />
                        </div>
                    </div>

                    <div className="portfolio__hero-bot-right">
                        <h2 className="nguyen">Nguyen</h2>
                        <h4 className="people">People-centric Designs</h4>
                        
                    </div>
                </div>

                <ul className="postit postit--pink">
                    <li><a href="mailto:peter.p.t.nguyen@gmail.com">Contact</a></li>
                </ul>

                <ul className="postit postit--yellow">
                </ul>

                <ul className="postit postit--yellow second">
                </ul>

                <p className="scroll">Scroll to see more</p>

                <h2 className="front-end">Jnr. Software Developer</h2>

            </div>
        </div >
    )
}

export default Hero