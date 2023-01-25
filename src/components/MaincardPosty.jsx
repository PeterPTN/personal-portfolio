import { MdOpenInNew } from "react-icons/md";
import { RiFileTextLine } from "react-icons/ri";

function MaincardPosty({ details }) {
    return (
        <>
            <div className={`portfolio__project-details background ${details.class}`} />
            <div className={`portfolio__project-details ${details.class}`}>
                <h2 className="portfolio__project-details-title">{details.title}</h2>
                <p className="portfolio__project-details-description">{details.tag}</p>
                <a href={details.github} rel='noreferrer' target="_blank" className="portfolio__project-details-blog-link"><RiFileTextLine /> Source Code</a>
                <a href={details.url} rel='noreferrer' target="_blank" className="portfolio__project-details-website-link"><MdOpenInNew /> View Website </a>
                <p>{details.extra}</p>
            </div>
        </>
    )
}

export default MaincardPosty