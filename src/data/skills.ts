import { type Skill } from "@/models/skill";

export const frSkills: Skill[] = [
    {
        name: "Développement back-end Python avec FastAPI",
        technologies: [
            { name: "Python", icon: "devicon:python" },
            { name: "FastAPI", icon: "devicon:fastapi" },
        ],
    },
    {
        name: "Développement front-end Typescript avec Nuxt.js, Angular, Tailwind CSS",
        technologies: [
            { name: "Typescript", icon: "devicon:typescript" },
            { name: "Nuxt.js", icon: "logos:nuxt-icon" },
            { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
        ],
    },
    {
        name: "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
        technologies: [
            { name: "AWS", icon: "logos:aws" },
            { name: "Kubernetes", icon: "devicon:kubernetes" },
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "Github Actions", icon: "devicon:githubactions" },
            { name: "Terraform", icon: "devicon:terraform" },
        ],
    },
    {
        name: "Environnement de travail: Linux, NixOS, Zsh, VSCode, Neovim",
        technologies: [
            { name: "Linux", icon: "devicon:linux" },
            { name: "NixOS", icon: "devicon:nixos" },
            { name: "Zsh", icon: "devicon:zsh" },
            { name: "VSCode", icon: "devicon:vscode" },
        ],
    },
];

export const enSkills: Skill[] = [
    {
        name: "Python back-end development with FastAPI, SQLAlchemy, Alembic, Pytest",
        technologies: [
            { name: "Python", icon: "devicon:python" },
            { name: "FastAPI", icon: "devicon:fastapi" },
        ],
    },
    {
        name: "Front-end development with Typescript using Nuxt.js, Angular, Tailwind CSS",
        technologies: [
            { name: "Typescript", icon: "devicon:typescript" },
            { name: "Nuxt.js", icon: "logos:nuxt-icon" },
            { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
        ],
    },
    {
        name: "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
        technologies: [
            { name: "AWS", icon: "logos:aws" },
            { name: "Kubernetes", icon: "devicon:kubernetes" },
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "Github Actions", icon: "devicon:githubactions" },
            { name: "Terraform", icon: "devicon:terraform" },
        ],
    },
    {
        name: "Work environment: Linux, NixOS, Zsh, VSCode, Neovim",
        technologies: [
            { name: "Linux", icon: "devicon:linux" },
            { name: "NixOS", icon: "devicon:nixos" },
            { name: "Zsh", icon: "devicon:zsh" },
            { name: "VSCode", icon: "devicon:vscode" },
        ],
    },
];
