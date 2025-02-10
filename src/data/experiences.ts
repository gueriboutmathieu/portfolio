import { type Experience } from "@/models/experience";

export const frExperiences: Experience[] = [
    {
        title: "Apprenti Développeur Full Stack",
        company: "Stelliant",
        companyDescription: "Expertise en assurance",
        location: "Colombes, France",
        startDate: new Date("2019-07"),
        endDate: new Date("2020-07"),
        missions: [
            "Développement d'un formulaire web avec AngularJS",
            "Développement d'une application web avec Angular",
            "Développement de services REST API avec Java Spring Boot",
        ]
    },
    {
        title: "Apprenti Ingénieur Full Stack",
        company: "Araïko (anciennement Cynapps)",
        companyDescription: "Conseil et apport de solutions clés en mains en Data / IA",
        location: "Lyon, France",
        startDate: new Date("2020-12"),
        endDate: new Date("2023-08"),
        missions: [
            "Développement back-end avec Python (FastAPI)",
            "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
            "Scraping de données avec Python (BeautifulSoup)",
            "Analyse de données avec Python (Pandas, Numpy)",
            "Un peu de développement front-end avec React.js",
            "R&D et veille technologique"
        ]
    },
    {
        title: "Ingénieur Full Stack",
        company: "Araïko (anciennement Cynapps)",
        companyDescription: "Conseil et apport de solutions clés en mains en Data / IA",
        location: "Lyon, France",
        startDate: new Date("2023-08"),
        endDate: new Date(),
        missions: [
            "Développement back-end avec Python (FastAPI)",
            "Développement front-end avec Nuxt.js",
            "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
            "R&D et veille technologique"
        ]
    },
];

export const enExperiences: Experience[] = [
    {
        title: "Full Stack Developer Apprentice",
        company: "Stelliant",
        companyDescription: "Insurance expertise",
        location: "Colombes, France",
        startDate: new Date("2019-07"),
        endDate: new Date("2020-07"),
        missions: [
            "Development of a web form with AngularJS",
            "Development of a web application with Angular",
            "Development of REST API services with Java Spring Boot",
        ]
    },
    {
        title: "Full Stack Engineer Apprentice",
        company: "Araïko (formerly Cynapps)",
        companyDescription: "Consulting and providing turnkey solutions in Data / AI",
        location: "Lyon, France",
        startDate: new Date("2020-12"),
        endDate: new Date("2023-08"),
        missions: [
            "Back-end development with Python (FastAPI)",
            "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
            "Data scraping with Python (BeautifulSoup)",
            "Data analysis with Python (Pandas, Numpy)",
            "A little front-end development with React.js",
            "R&D and technological watch"
        ]
    },
    {
        title: "Full Stack Engineer",
        company: "Araïko (formerly Cynapps)",
        companyDescription: "Consulting and providing turnkey solutions in Data / AI",
        location: "Lyon, France",
        startDate: new Date("2023-08"),
        endDate: new Date(),
        missions: [
            "Back-end development with Python (FastAPI)",
            "Front-end development with Nuxt.js",
            "DevOps: AWS, Kubernetes, Helm, Docker, Github Actions, Terraform",
            "R&D and technological watch"
        ]
    },
];
