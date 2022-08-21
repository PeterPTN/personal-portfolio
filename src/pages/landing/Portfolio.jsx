import './portfolio.css';
import Hero1 from './containers/Hero1';
import Content from './containers/Content';

const Portfolio = () => {
  return (
    <>
      <Hero1 />
      <Content />

      <div className="portfolio__footer-container">
        <ul>
          <li>&copy; 2022 Peter Nguyen</li>
          <li><a href="mailto:peter.p.t.nguyen@gmail.com">Contact me</a></li>
        </ul>
      </div>
    </>
  )
}

export default Portfolio