import { type Skill } from "@/models/skill";

import angularImage from "@/assets/logos/angular.svg";
import awsImage from "@/assets/logos/aws.svg";
import dockerImage from "@/assets/logos/docker.svg";
import fastapiImage from "@/assets/logos/fastapi.svg";
import flutterImage from "@/assets/logos/flutter.svg";
import githubActionsImage from "@/assets/logos/github_actions.svg";
import helmImage from "@/assets/logos/helm.svg";
import kubernetesImage from "@/assets/logos/kubernetes.svg";
import linuxImage from "@/assets/logos/linux.svg";
import nativescriptImage from "@/assets/logos/nativescript.svg";
import neovimImage from "@/assets/logos/neovim.svg";
import nixosImage from "@/assets/logos/nixos.svg";
import nuxtImage from "@/assets/logos/nuxt.svg";
import primevueImage from "@/assets/logos/primevue.png";
import pythonImage from "@/assets/logos/python.svg";
import tailwindImage from "@/assets/logos/tailwind.svg";
import terraformImage from "@/assets/logos/terraform.svg";
import typescriptImage from "@/assets/logos/typescript.svg";
import vscodeImage from "@/assets/logos/vscode.svg";
import zshImage from "@/assets/logos/zsh.svg";

export const frSkills: Skill[] = [
    {
        name: "Développement back-end Python avec FastAPI, SQLAlchemy, Alembic, Pytest",
        images: [
            {tooltip: "Python", src: pythonImage},
            {tooltip: "FastAPI", src: fastapiImage}
        ]
    },
    {
        name: "Développement front-end Typescript avec Nuxt.js, Angular, Primevue, Tailwind CSS",
        images: [
            {tooltip: "Typescript", src: typescriptImage},
            {tooltip: "Nuxt.js", src: nuxtImage},
            {tooltip: "Angular", src: angularImage},
            {tooltip: "Primevue", src: primevueImage},
            {tooltip: "Tailwind CSS", src: tailwindImage}
        ]
    },
    {
        name: "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
        images: [
            {tooltip: "AWS", src: awsImage},
            {tooltip: "Kubernetes", src: kubernetesImage},
            {tooltip: "Helm", src: helmImage},
            {tooltip: "Docker", src: dockerImage},
            {tooltip: "Github Actions", src: githubActionsImage},
            {tooltip: "Terraform", src: terraformImage}
        ]
    },
    {
        name: "Un peu d'expérience en développement mobile avec Flutter et Nativescript",
        images: [
            {tooltip: "Flutter", src: flutterImage},
            {tooltip: "Nativescript", src: nativescriptImage}
        ]
    },
    {
        name: "Environnement de travail: Linux, NixOS, Zsh, VSCode, Neovim",
        images: [
            {tooltip: "Linux", src: linuxImage},
            {tooltip: "NixOS", src: nixosImage},
            {tooltip: "Zsh", src: zshImage},
            {tooltip: "VSCode", src: vscodeImage},
            {tooltip: "Neovim", src: neovimImage}
        ]
    }
];

export const enSkills: Skill[] = [
    {
        name: "Python back-end development with FastAPI, SQLAlchemy, Alembic, Pytest",
        images: [
            {tooltip: "Python", src: pythonImage},
            {tooltip: "FastAPI", src: fastapiImage}
        ]
    },
    {
        name: "Front-end development with Typescript using Nuxt.js, Angular, Primevue, Tailwind CSS",
        images: [
            {tooltip: "Typescript", src: typescriptImage},
            {tooltip: "Nuxt.js", src: nuxtImage},
            {tooltip: "Angular", src: angularImage},
            {tooltip: "Primevue", src: primevueImage},
            {tooltip: "Tailwind CSS", src: tailwindImage}
        ]
    },
    {
        name: "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
        images: [
            {tooltip: "AWS", src: awsImage},
            {tooltip: "Kubernetes", src: kubernetesImage},
            {tooltip: "Helm", src: helmImage},
            {tooltip: "Docker", src: dockerImage},
            {tooltip: "Github Actions", src: githubActionsImage},
            {tooltip: "Terraform", src: terraformImage}
        ]
    },
    {
        name: "Some experience in mobile development with Flutter and Nativescript",
        images: [
            {tooltip: "Flutter", src: flutterImage},
            {tooltip: "Nativescript", src: nativescriptImage}
        ]
    },
    {
        name: "Work environment: Linux, NixOS, Zsh, VSCode, Neovim",
        images: [
            {tooltip: "Linux", src: linuxImage},
            {tooltip: "NixOS", src: nixosImage},
            {tooltip: "Zsh", src: zshImage},
            {tooltip: "VSCode", src: vscodeImage},
            {tooltip: "Neovim", src: neovimImage}
        ]
    }
];
