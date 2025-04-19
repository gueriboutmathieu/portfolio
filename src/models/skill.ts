export type SkillTechnology = {
    name: string;
    icon: string;
};

export type Skill = {
    name: string;
    technologies: SkillTechnology[];
};
