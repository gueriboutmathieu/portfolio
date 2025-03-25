import { type Education } from "@/models/education";

export const frEducations: Education[] = [
    {
        title: "M2I Manager en Ingénierie Informatique, spécialité Intelligence Artificielle et Big Data",
        degree: "Master BAC+5",
        school: "ESIEE-IT",
        description: "Master en alternance",
        location: "Cergy, France",
        startDate: new Date("2020-09"),
        endDate: new Date("2023-09"),
    },
    {
        title: "BAC+2 Concepteur Développeur Web et Mobile",
        degree: "BAC+2",
        school: "Coding Factory by ESIEE-IT",
        description: "BAC+2 en alternance",
        location: "Cergy, France",
        startDate: new Date("2018-09"),
        endDate: new Date("2020-09"),
    },
    {
        title: "Baccalauréat STI2D, spécialité SIN",
        degree: "BAC",
        school: "LGT Galilée",
        description: `
            Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable, 
            spécialité Systèmes d'Information et Numérique
        `,
        location: "Cergy, France",
        startDate: new Date("2013-09"),
        endDate: new Date("2017-09"),
    },
];

export const enEducations: Education[] = [
    {
        title: "M2I Manager in Computer Engineering, specialization in Artificial Intelligence and Big Data",
        degree: "Master's degree",
        school: "ESIEE-IT",
        description: "Master in apprenticeship",
        location: "Cergy, France",
        startDate: new Date("2020-09"),
        endDate: new Date("2023-09"),
    },
    {
        title: "Formation in Web and Mobile development",
        degree: "Higher National Diploma (2 years)",
        school: "Coding Factory by ESIEE-IT",
        description: "2 years in apprenticeship",
        location: "Cergy, France",
        startDate: new Date("2018-09"),
        endDate: new Date("2020-09"),
    },
    {
        title: "High School Diploma STI2D, specialization in SIN",
        degree: "High School Diploma",
        school: "LGT Galilée",
        description: `
            High School Diploma Sciences and Technologies of Industry and Sustainable Development, 
            specialization in Information Systems and Digital
        `,
        location: "Cergy, France",
        startDate: new Date("2013-09"),
        endDate: new Date("2017-09"),
    },
];
