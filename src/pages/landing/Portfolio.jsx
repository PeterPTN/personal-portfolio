import './portfolio.css';
import Hero from './containers/Hero';
import Content from './containers/Content';

const Portfolio = () => {
  return (
    <>
      <Hero />
      <Content />

      <div className="portfolio__footer-container">
        <ul>
          <li>&copy; 2022 <a href="mailto:peter.p.t.nguyen@gmail.com">Peter Nguyen</a></li>
          <li><a href="#top">Back to top</a></li>
        </ul>
      </div>
    </>
  )
}

export default Portfolio