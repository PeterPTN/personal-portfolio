import MaincardImage from "./MaincardImage"
import MaincardPosty from "./MaincardPosty"

function Maincard({ content }) {
    return (
        <div className="portfolio__project-card">
            <MaincardImage images={content.images} url={content.details.url} />
            <MaincardPosty details={content.details} />
        </div>
    )
};

export default Maincard