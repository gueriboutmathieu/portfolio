type ProjectTechnology = {
    name: string,
    icon: string,
}

export type Project = {
    title: string,
    description: string,
    image: string,
    github: string,
    technologies: ProjectTechnology[],
};