import film from "../images/onfilmzoomed.png";
import film1 from "../images/onfilmzoomed1.png";
import film2 from "../images/onfilmzoomed2.png";
import film3 from "../images/onfilmtitle.png";

import mu1 from "../images/music/M1.png";
import mu2 from "../images/music/M2.png";
import mu3 from "../images/music/M3.png";
import mu4 from "../images/music/M5.png";
import mu5 from "../images/music/M6.png";

import macAbout from "../images/machina/about.png";
import macCards from "../images/machina/cards.png";
import macTitle from "../images/machina/title.png";
import macHero from "../images/machina/hero.png";

export const mainProjects = [
    {
        images: [
            { src: mu1, class: "--music-zero" },
            { src: mu2, class: "--music-one" },
            { src: mu3, class: "--music-two" },
            { src: mu4, class: "--music-three" },
            { src: mu5, class: "--music-four" }
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
            { src: macAbout, class: "--machina-zero" },
            { src: macCards, class: "--machina-one" },
            { src: macTitle, class: "--machina-two" },
            { src: macHero, class: "--machina-three" }
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
            { src: film, class: "--film-zero" },
            { src: film1, class: "--film-one" },
            { src: film2, class: "--film-two" },
            { src: film3, class: "--film-three" }
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