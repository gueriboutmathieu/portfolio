import type { Project } from "@/models/project";
import nuxtImage from "@/assets/icons/nuxt.svg";
import tailwindImage from "@/assets/icons/tailwind.svg";

export const frProjects: Project[] = [
    {
        title: "Portfolio",
        description: "Mon portfolio, le site que vous êtes en train d'explorer ✌️",
        image: "/assets/portfolio.png",
        github: "https://github.com/gueriboutmathieu/portfolio",
        technologies: [
            { name: "Nuxt.js", icon: nuxtImage },
            { name: "TailwindCSS", icon: tailwindImage },
        ],
    },
    {
        title: "Meri Server",
        description:
            "Le serveur de Meri, votre fidèle compagnon qui vous aide à rester organisé et à vous souvenir de ce qui compte vraiment.",
        image: "/assets/meri.png",
        github: "https://github.com/gueriboutmathieu/meri_server",
        technologies: [
            { name: "Python", icon: "" },
            { name: "FastAPI", icon: "" },
            { name: "PostgreSQL", icon: "" },
        ],
    },
    {
        title: "Meri Web",
        description:
            "La web app de Meri, votre fidèle compagnon qui vous aide à rester organisé et à vous souvenir de ce qui compte vraiment.",
        image: "/assets/meri.png",
        github: "https://github.com/gueriboutmathieu/meri_web",
        technologies: [
            { name: "Python", icon: "" },
            { name: "FastAPI", icon: "" },
            { name: "PostgreSQL", icon: "" },
        ],
    },
];

export const enProjects: Project[] = [
    {
        title: "Portfolio",
        description: "My portfolio, the website you are currently exploring ✌️",
        image: "/assets/portfolio.png",
        github: "https://github.com/gueriboutmathieu/portfolio",
        technologies: [
            { name: "Nuxt.js", icon: nuxtImage },
            { name: "TailwindCSS", icon: tailwindImage },
        ],
    },
    {
        title: "Meri Server",
        description:
            "The server of Meri, your loyal companion that helps you stay organized and remember what truly matters.",
        image: "/assets/meri.png",
        github: "https://github.com/gueriboutmathieu/meri_server",
        technologies: [
            { name: "Python", icon: "" },
            { name: "FastAPI", icon: "" },
            { name: "PostgreSQL", icon: "" },
        ],
    },
    {
        title: "Meri Web",
        description:
            "The web app of Meri, your loyal companion that helps you stay organized and remember what truly matters.",
        image: "/assets/meri.png",
        github: "https://github.com/gueriboutmathieu/meri_web",
        technologies: [
            { name: "Python", icon: "" },
            { name: "FastAPI", icon: "" },
            { name: "PostgreSQL", icon: "" },
        ],
    },
];
