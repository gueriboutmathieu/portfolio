import colors from "@/assets/colors";
import type { Section } from "@/models/section";

export const frSections: Section[] = [
    {
        title: "Home",
        icon: "ic:round-home",
        iconColor: colors.green,
        path: "home",
    },
    {
        title: "Bio",
        icon: "ic:round-info",
        iconColor: colors.pink,
        path: "bio",
    },
    {
        title: "Compétences",
        icon: "ic:round-palette",
        iconColor: colors.purple,
        path: "skills",
    },
    {
        title: "Projets",
        icon: "ic:round-menu-book",
        iconColor: colors.lightBlue,
        path: "projects",
    },
    {
        title: "Expériences",
        icon: "ic:round-work",
        iconColor: colors.orange,
        path: "experience",
    },
    {
        title: "Diplômes",
        icon: "ic:round-school",
        iconColor: colors.red,
        path: "education",
    },
    {
        title: "Contact",
        icon: "ic:round-alternate-email",
        iconColor: colors.yellow,
        path: "contact",
    },
];

export const enSections: Section[] = [
    {
        title: "Home",
        icon: "ic:round-home",
        iconColor: colors.green,
        path: "home",
    },
    {
        title: "Bio",
        iconColor: colors.pink,
        icon: "ic:round-info",
        path: "bio",
    },
    {
        title: "Skills",
        icon: "ic:round-palette",
        iconColor: colors.purple,
        path: "skills",
    },
    {
        title: "Projects",
        icon: "ic:round-menu-book",
        iconColor: colors.lightBlue,
        path: "projects",
    },
    {
        title: "Experience",
        icon: "ic:round-work",
        iconColor: colors.orange,
        path: "experience",
    },
    {
        title: "Education",
        icon: "ic:round-school",
        iconColor: colors.red,
        path: "education",
    },
    {
        title: "Contact",
        icon: "ic:round-alternate",
        iconColor: colors.yellow,
        path: "contact",
    },
];
