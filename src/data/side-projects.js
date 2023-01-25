let counter = 0;

export const sideProjects = [
    {
        id: ++counter,
        title: "fakeOS",
        tag: "A SPA made to replica a Windows 10 OS in terms of UI/UX. Made with HTML, SASS and JS.",
        extra: "Scripts undergoing refactor soon.",
        github: "https://github.com/PeterPTN/fakeOS",
        url: "https://peterptn.github.io/fakeOS/",
        class: "fakeos"
    },
    {
        id: ++counter,
        title: "Morse Code Translator",
        tag: "A SPA designed to translate morsecode into English and vice-versa. Made with HTML, SASS and JS. Includes unit testing.",
        github: "https://github.com/PeterPTN/morsecode-translator",
        url: "https://peterptn.github.io/morsecode-translator/",
        class: "morse"
    },
    {
        id: ++counter,
        title: "Hangman",
        tag: "A SPA that mimics the classic word game Hangman! Made with React/TypeScript.",
        github: "https://github.com/PeterPTN/hangman",
        url: "https://github.com/PeterPTN/hangman",
        class: "hangman"
    }
]