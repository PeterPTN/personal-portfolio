import mainImages from "./main-images"

let counter = 0;

export const mainProjects = [
    {
        id: ++counter,
        images: [
            { src: mainImages.ftb0, class: "--shop-zero" },
            { src: mainImages.ftb1, class: "--shop-one" },
            { src: mainImages.ftb2, class: "--shop-two" }
        ],
        details: {
            class: "shop",
            url: "https://menswear-ftb.netlify.app/",
            github: "https://github.com/PeterPTN/e-shop",
            title: "For The Boys",
            tag: "An e-Shop SPA made with Vite/React/TypeScript and SASS - has CRUD functionality using Google's Firebase Firestore DB.",
        }
    },
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
            { src: mainImages.film0, class: "--movie-zero" },
            { src: mainImages.film1, class: "--movie-one" },
            { src: mainImages.film2, class: "--movie-two" },
            { src: mainImages.film3, class: "--movie-three" }
        ],
        details: {
            class: "movie",
            url: "https://onfilm.netlify.app/",
            github: "https://github.com/PeterPTN/movieproject",
            title: "OnFilm",
            tag: "A film SPA made with ReactJS utilising Trakt & TMDb APIs.",
        }
    },
    /*

    */
]