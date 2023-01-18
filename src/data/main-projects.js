import mainImages from "./main-images"

export const mainProjects = [
    {
        images: [
            { src: mainImages.film, class: "--film-zero" },
            { src: mainImages.film1, class: "--film-one" },
            { src: mainImages.film2, class: "--film-two" },
            { src: mainImages.film3, class: "--film-three" }
        ],
        details: {
            class: "movie",
            url: "https://onfilm.netlify.app/",
            github: "https://github.com/PeterPTN/movieproject",
            title: "OnFilm",
            tag: "A film-database app made with ReactJS utilising Trakt & TMDb APIs.",
        }
    },
    {
        images: [
            { src: mainImages.mu1, class: "--music-zero" },
            { src: mainImages.mu2, class: "--music-one" },
            { src: mainImages.mu3, class: "--music-two" },
            { src: mainImages.mu4, class: "--music-three" },
            { src: mainImages.mu5, class: "--music-four" }
        ],
        details: {
            class: "music",
            url: "https://e-oke.adaptable.app/",
            github: "https://github.com/PeterPTN/karaokeproject",
            title: "E-Ōke",
            tag: `A "karaoke" web-app made with ReactJS, Node/Express utilising Spotify's API.`,
            extra: "(Requires Spotify Premium)"
        }
    },
    {

        images: [
            { src: mainImages.macAbout, class: "--machina-zero" },
            { src: mainImages.macCards, class: "--machina-one" },
            { src: mainImages.macTitle, class: "--machina-two" },
            { src: mainImages.macHero, class: "--machina-three" }
        ],
        details: {
            class: "machina",
            url: "https://peterptn.github.io/machinaco/index.html",
            github: "https://github.com/PeterPTN/machinaco",
            title: "Machina.co",
            tag: "A simple mock company portfolio made with HTML, SASS and JS."
        }
    }
]