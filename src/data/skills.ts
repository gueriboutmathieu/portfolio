import { type Skill } from "@/models/skill";

import angularImage from "@/assets/icons/angular.svg";
import awsImage from "@/assets/icons/aws.svg";
import dockerImage from "@/assets/icons/docker.svg";
import fastapiImage from "@/assets/icons/fastapi.svg";
import flutterImage from "@/assets/icons/flutter.svg";
import githubActionsImage from "@/assets/icons/github_actions.svg";
import helmImage from "@/assets/icons/helm.svg";
import kubernetesImage from "@/assets/icons/kubernetes.svg";
import linuxImage from "@/assets/icons/linux.svg";
import nativescriptImage from "@/assets/icons/nativescript.svg";
import neovimImage from "@/assets/icons/neovim.svg";
import nixosImage from "@/assets/icons/nixos.svg";
import nuxtImage from "@/assets/icons/nuxt.svg";
import pythonImage from "@/assets/icons/python.svg";
import tailwindImage from "@/assets/icons/tailwind.svg";
import terraformImage from "@/assets/icons/terraform.svg";
import typescriptImage from "@/assets/icons/typescript.svg";
import vscodeImage from "@/assets/icons/vscode.svg";
import zshImage from "@/assets/icons/zsh.svg";

export const frSkills: Skill[] = [
    {
        name: "Développement back-end Python avec FastAPI, SQLAlchemy, Alembic, Pytest",
        images: [
            { tooltip: "Python", src: pythonImage },
            { tooltip: "FastAPI", src: fastapiImage },
        ],
    },
    {
        name: "Développement front-end Typescript avec Nuxt.js, Angular, Tailwind CSS",
        images: [
            { tooltip: "Typescript", src: typescriptImage },
            { tooltip: "Nuxt.js", src: nuxtImage },
            { tooltip: "Tailwind CSS", src: tailwindImage },
            { tooltip: "Angular", src: angularImage },
        ],
    },
    {
        name: "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
        images: [
            { tooltip: "AWS", src: awsImage },
            { tooltip: "Kubernetes", src: kubernetesImage },
            { tooltip: "Helm", src: helmImage },
            { tooltip: "Docker", src: dockerImage },
            { tooltip: "Github Actions", src: githubActionsImage },
            { tooltip: "Terraform", src: terraformImage },
        ],
    },
    {
        name: "Un peu d'expérience en développement mobile avec Flutter et Nativescript",
        images: [
            { tooltip: "Flutter", src: flutterImage },
            { tooltip: "Nativescript", src: nativescriptImage },
        ],
    },
    {
        name: "Environnement de travail: Linux, NixOS, Zsh, VSCode, Neovim",
        images: [
            { tooltip: "Linux", src: linuxImage },
            { tooltip: "NixOS", src: nixosImage },
            { tooltip: "Zsh", src: zshImage },
            { tooltip: "VSCode", src: vscodeImage },
            { tooltip: "Neovim", src: neovimImage },
        ],
    },
];

export const enSkills: Skill[] = [
    {
        name: "Python back-end development with FastAPI, SQLAlchemy, Alembic, Pytest",
        images: [
            { tooltip: "Python", src: pythonImage },
            { tooltip: "FastAPI", src: fastapiImage },
        ],
    },
    {
        name: "Front-end development with Typescript using Nuxt.js, Angular, Tailwind CSS",
        images: [
            { tooltip: "Typescript", src: typescriptImage },
            { tooltip: "Nuxt.js", src: nuxtImage },
            { tooltip: "Tailwind CSS", src: tailwindImage },
            { tooltip: "Angular", src: angularImage },
        ],
    },
    {
        name: "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
        images: [
            { tooltip: "AWS", src: awsImage },
            { tooltip: "Kubernetes", src: kubernetesImage },
            { tooltip: "Helm", src: helmImage },
            { tooltip: "Docker", src: dockerImage },
            { tooltip: "Github Actions", src: githubActionsImage },
            { tooltip: "Terraform", src: terraformImage },
        ],
    },
    {
        name: "Some experience in mobile development with Flutter and Nativescript",
        images: [
            { tooltip: "Flutter", src: flutterImage },
            { tooltip: "Nativescript", src: nativescriptImage },
        ],
    },
    {
        name: "Work environment: Linux, NixOS, Zsh, VSCode, Neovim",
        images: [
            { tooltip: "Linux", src: linuxImage },
            { tooltip: "NixOS", src: nixosImage },
            { tooltip: "Zsh", src: zshImage },
            { tooltip: "VSCode", src: vscodeImage },
            { tooltip: "Neovim", src: neovimImage },
        ],
    },
];
