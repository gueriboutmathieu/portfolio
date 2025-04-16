import type { Project } from "@/models/project";
import nuxtImage from "@/assets/icons/nuxt.svg";
import tailwindImage from "@/assets/icons/tailwind.svg";

function getImageUrl(image: string) {
    return new URL(`../assets/images/${image}`, import.meta.url).href;
}

export const frProjects: Project[] = [
    {
        title: "Portfolio",
        description: "Mon portfolio, le site que vous êtes en train d'explorer ✌️",
        image: getImageUrl("portfolio.png"),
        github: "https://github.com/gueriboutmathieu/portfolio",
        technologies: [
            { name: "Nuxt.js", icon: nuxtImage },
            { name: "TailwindCSS", icon: tailwindImage },
        ],
    },
    {
        title: "Meri",
        description: `Meri est un assistant LLM en speech to speech basé sur le principe du RAG (Retrieval Augmented Generation).
            Contrairement à un chatbot classique, il peut mémoriser des informations, les stocker dans une base de connaissances, puis les utiliser pour répondre de manière plus pertinente.
            Il permet donc, à l'instar d'un post-it, de stocker des informations importantes et de les retrouver facilement.`,
        image: getImageUrl("meri.png"),
        github: "https://github.com/gueriboutmathieu/meri_app",
        technologies: [
            { name: "Python", icon: "" },
            { name: "FastAPI", icon: "" },
            { name: "PostgreSQL", icon: "" },
            { name: "OpenAI", icon: "" },
            { name: "Nuxt.js", icon: "" },
            { name: "TailwindCSS", icon: tailwindImage },
        ],
    },
    {
        title: "Flare",
        description: `Voyant Freetube ne plus fonctionner depuis quelques mois, j'avais besoin de trouver une nouvelle alternative pour regarder mes vidéos Youtube sans pub et sans algorithme.
            J'ai donc décidé de me lancer pour coder ma propre solution : Flare !
            C'est encore en construction et pas du tout utilisable pour l'instant mais j'y travaille !`,
        image: getImageUrl("flare.png"),
        github: "https://github.com/gueriboutmathieu/flare_app",
        technologies: [
            { name: "Python", icon: "" },
            { name: "FastAPI", icon: "" },
            { name: "PostgreSQL", icon: "" },
            { name: "Nuxt.js", icon: "" },
            { name: "TailwindCSS", icon: tailwindImage },
        ],
    }
];

export const enProjects: Project[] = [
    {
        title: "Portfolio",
        description: "My portfolio, the website you are currently exploring ✌️",
        image: getImageUrl("portfolio.png"),
        github: "https://github.com/gueriboutmathieu/portfolio",
        technologies: [
            { name: "Nuxt.js", icon: nuxtImage },
            { name: "TailwindCSS", icon: tailwindImage },
        ],
    },
    {
        title: "Meri",
        description: `Meri is a speech-to-speech LLM assistant based on the principle of RAG (Retrieval Augmented Generation).
            Unlike a traditional chatbot, it can remember information, store it in a knowledge base, and use it later to provide more relevant answers.
            Just like a smart post-it, it helps keep track of important information and makes it easy to retrieve when needed.`,
        image: getImageUrl("meri.png"),
        github: "https://github.com/gueriboutmathieu/meri_app",
        technologies: [
            { name: "Python", icon: "" },
            { name: "FastAPI", icon: "" },
            { name: "PostgreSQL", icon: "" },
            { name: "OpenAI", icon: "" },
            { name: "Nuxt.js", icon: "" },
            { name: "TailwindCSS", icon: tailwindImage },
        ],
    },
    {
        title: "Flare",
        description: `Since FreeTube hasn't been working for the past few months, I needed to find a new alternative to watch YouTube videos without ads and the algorithm.
            So I decided to start coding my own solution: Flare !
            It's still under construction and not usable yet, but I'm working on it !`,
        image: getImageUrl("flare.png"),
        github: "https://github.com/gueriboutmathieu/flare_app",
        technologies: [
            { name: "Python", icon: "" },
            { name: "FastAPI", icon: "" },
            { name: "PostgreSQL", icon: "" },
            { name: "Nuxt.js", icon: "" },
            { name: "TailwindCSS", icon: tailwindImage },
        ],
    },
];
