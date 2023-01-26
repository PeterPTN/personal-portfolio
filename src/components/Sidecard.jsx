const Sidecard = ({ content }) => {
    return (
        <a className={`portfolio__sideprojects-card ${content.class}`} href={content.url} target="_blank" rel='noreferrer'>
            <div className={`portfolio__sideprojects-card-header ${content.class}`}>
                <h2>{content.title}</h2>
                <p>{content.tag}</p>
                <p>{content.extra}</p>
            </div>
            <div className={`portfolio__sideprojects-card-btns ${content.class}`}>
                <a href={content.github} target="_blank" rel='noreferrer'>Source Code</a>
                <a href={content.url} target="_blank" rel='noreferrer'>View Live</a>
            </div>
        </a>
    )
}

export default Sidecard