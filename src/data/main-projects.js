import mainImages from "./main-images"

let counter = 0;

export const mainProjects = [
    {
        id: ++counter,
        images: [
            { src: mainImages.book0, class: "--book-zero" },
            { src: mainImages.book1, class: "--book-one" },
            { src: mainImages.book2, class: "--book-two" },
            { src: mainImages.book3, class: "--book-three" }
        ],
        details: {
            class: "book",
            url: "https://keen-reader.netlify.app/",
            github: "https://github.com/PeterPTN/google-books",
            title: "Keen",
            tag: "A SPA made with Vite/React/TypeScript and SASS, utilising Google Book's API.",
        }
    },
    {
        id: ++counter,
        images: [
            { src: mainImages.film0, class: "--film-zero" },
            { src: mainImages.film1, class: "--film-one" },
            { src: mainImages.film2, class: "--film-two" },
            { src: mainImages.film3, class: "--film-three" }
        ],
        details: {
            class: "movie",
            url: "https://onfilm.netlify.app/",
            github: "https://github.com/PeterPTN/movieproject",
            title: "OnFilm",
            tag: "A film SPA made with ReactJS utilising Trakt & TMDb APIs.",
        }
    },
    {
        id: ++counter,
        images: [
            { src: mainImages.music0, class: "--music-zero" },
            { src: mainImages.music1, class: "--music-one" },
            { src: mainImages.music2, class: "--music-two" },
            { src: mainImages.music3, class: "--music-three" },
            { src: mainImages.music4, class: "--music-four" }
        ],
        details: {
            class: "music",
            url: "https://e-oke.adaptable.app/",
            github: "https://github.com/PeterPTN/karaokeproject",
            title: "E-Ōke",
            tag: `A "karaoke" SPA made with ReactJS, Node/Express utilising Spotify's API.`,
            extra: "(Requires Spotify Premium)"
        }
    },
    {
        id: ++counter,
        images: [
            { src: mainImages.machina0, class: "--machina-zero" },
            { src: mainImages.machina1, class: "--machina-one" },
            { src: mainImages.machina2, class: "--machina-two" },
            { src: mainImages.machina3, class: "--machina-three" }
        ],
        details: {
            class: "machina",
            url: "https://peterptn.github.io/machinaco/index.html",
            github: "https://github.com/PeterPTN/machinaco",
            title: "Machina.co",
            tag: "A simple mock company portfolio made with HTML, SASS and JS."
        }
    },
]