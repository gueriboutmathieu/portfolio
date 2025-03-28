import { type Skill } from "../models/skill";

function getImageUrl(image: string) {
    return new URL(`../assets/icons/${image}`, import.meta.url).href;
}

export const frSkills: Skill[] = [
    {
        name: "Développement back-end Python avec FastAPI, SQLAlchemy, Alembic, Pytest",
        images: [
            { tooltip: "Python", src: getImageUrl("python.svg") },
            { tooltip: "FastAPI", src: getImageUrl("fastapi.svg") },
        ],
    },
    {
        name: "Développement front-end Typescript avec Nuxt.js, Angular, Tailwind CSS",
        images: [
            { tooltip: "Typescript", src: getImageUrl("typescript.svg") },
            { tooltip: "Nuxt.js", src: getImageUrl("nuxt.svg") },
            { tooltip: "Tailwind CSS", src: getImageUrl("tailwind.svg") },
            { tooltip: "Angular", src: getImageUrl("angular.svg") },
        ],
    },
    {
        name: "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
        images: [
            { tooltip: "AWS", src: getImageUrl("aws.svg") },
            { tooltip: "Kubernetes", src: getImageUrl("kubernetes.svg") },
            { tooltip: "Helm", src: getImageUrl("helm.svg") },
            { tooltip: "Docker", src: getImageUrl("docker.svg") },
            { tooltip: "Github Actions", src: getImageUrl("github_actions.svg") },
            { tooltip: "Terraform", src: getImageUrl("terraform.svg") },
        ],
    },
    {
        name: "Un peu d'expérience en développement mobile avec Flutter et Nativescript",
        images: [
            { tooltip: "Flutter", src: getImageUrl("flutter.svg") },
            { tooltip: "Nativescript", src: getImageUrl("nativescript.svg") },
        ],
    },
    {
        name: "Environnement de travail: Linux, NixOS, Zsh, VSCode, Neovim",
        images: [
            { tooltip: "Linux", src: getImageUrl("python.svg") },
            { tooltip: "NixOS", src: getImageUrl("nixos.svg") },
            { tooltip: "Zsh", src: getImageUrl("zsh.svg") },
            { tooltip: "VSCode", src: getImageUrl("vscode.svg") },
            { tooltip: "Neovim", src: getImageUrl("neovim.svg") },
        ],
    },
];

export const enSkills: Skill[] = [
    {
        name: "Python back-end development with FastAPI, SQLAlchemy, Alembic, Pytest",
        images: [
            { tooltip: "Python", src: getImageUrl("python.svg") },
            { tooltip: "FastAPI", src: getImageUrl("fastapi.svg") },
        ],
    },
    {
        name: "Front-end development with Typescript using Nuxt.js, Angular, Tailwind CSS",
        images: [
            { tooltip: "Typescript", src: getImageUrl("typescript.svg") },
            { tooltip: "Nuxt.js", src: getImageUrl("nuxt.svg") },
            { tooltip: "Tailwind CSS", src: getImageUrl("tailwind.svg") },
            { tooltip: "Angular", src: getImageUrl("angular.svg") },
        ],
    },
    {
        name: "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
        images: [
            { tooltip: "AWS", src: getImageUrl("aws.svg") },
            { tooltip: "Kubernetes", src: getImageUrl("kubernetes.svg") },
            { tooltip: "Helm", src: getImageUrl("helm.svg") },
            { tooltip: "Docker", src: getImageUrl("docker.svg") },
            { tooltip: "Github Actions", src: getImageUrl("github_actions.svg") },
            { tooltip: "Terraform", src: getImageUrl("terraform.svg") },
        ],
    },
    {
        name: "Some experience in mobile development with Flutter and Nativescript",
        images: [
            { tooltip: "Flutter", src: getImageUrl("flutter.svg") },
            { tooltip: "Nativescript", src: getImageUrl("nativescript.svg") },
        ],
    },
    {
        name: "Work environment: Linux, NixOS, Zsh, VSCode, Neovim",
        images: [
            { tooltip: "Linux", src: getImageUrl("python.svg") },
            { tooltip: "NixOS", src: getImageUrl("nixos.svg") },
            { tooltip: "Zsh", src: getImageUrl("zsh.svg") },
            { tooltip: "VSCode", src: getImageUrl("vscode.svg") },
            { tooltip: "Neovim", src: getImageUrl("neovim.svg") },
        ],
    },
];
