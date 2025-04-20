import cloneDeep from "lodash.clonedeep";
import { defineStore } from "pinia";

import { Language } from "@/models/language";
import type { ChatMessage } from "@/models/chatMessage";
import type { Education } from "@/models/education";
import type { Experience } from "@/models/experience";
import type { Project } from "@/models/project";
import type { Section } from "~/models/section";
import type { Skill } from "@/models/skill";
import { enBio, frBio } from "@/data/bio";
import { enEducations, frEducations } from "~/data/educations";
import { enExperiences, frExperiences } from "@/data/experiences";
import { enProjects, frProjects } from "@/data/projects";
import { frSections, enSections } from "@/data/sections";
import { enSkills, frSkills } from "@/data/skills";
import { frSystemPrompt, enSystemPrompt } from "@/data/systemPrompt";

export const createMainStore = defineStore("mainStore", () => {
    const _state = reactive<{
        language: Language;
        sections: Section[];
        bio: string;
        educations: Education[];
        experiences: Experience[];
        skills: Skill[];
        projects: Project[];
        systemPrompt: string;
        chatMessages: ChatMessage[];
    }>({
        language: Language.FR,
        sections: frSections,
        bio: frBio,
        educations: frEducations,
        experiences: frExperiences,
        skills: frSkills,
        projects: frProjects,
        systemPrompt: frSystemPrompt,
        chatMessages: [],
    });

    const state = computed(function (): typeof _state {
        const stateCopy = cloneDeep(_state);
        return Object.freeze(stateCopy);
    });

    const setLanguage = (language: Language): void => {
        _state.language = language;
        _state.sections = language === Language.FR ? frSections : enSections;
        _state.bio = language === Language.FR ? frBio : enBio;
        _state.educations = language === Language.FR ? frEducations : enEducations;
        _state.experiences = language === Language.FR ? frExperiences : enExperiences;
        _state.skills = language === Language.FR ? frSkills : enSkills;
        _state.projects = language === Language.FR ? frProjects : enProjects;
        _state.systemPrompt = language === Language.FR ? frSystemPrompt : enSystemPrompt;
    };

    const addChatMessage = (message: ChatMessage): void => {
        _state.chatMessages.push(message);
    }

    const resetChat = (): void => {
        _state.chatMessages = [];
    }

    return {
        state,
        setLanguage,
        addChatMessage,
        resetChat,
    };
});

export type MainStore = ReturnType<typeof createMainStore>;
