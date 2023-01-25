function MaincardImage({ images, url }) {
    return (
        <div className="portfolio__project-image-container" >
            <a href={url} target="_blank" rel='noreferrer'>
                {images.map((image) => {
                    return (
                        <img key={image.class} src={image.src} className={`image ${image.class}`} alt={image.class} />
                    )
                })}
            </a>
        </div>
    )
}

export default MaincardImage