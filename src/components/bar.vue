<template>
    <div class="h-full w-full bg-darkLight/50 shadow-2xl backdrop-blur-md rounded-xl inline-block p-2.5">
        <div class="flex flex-row gap-2.5">
            <NavigationButton :title="titles.home" icon="fa-solid fa-home" :iconColor="colors.green" @buttonClicked="navigateTo('home')" />
            <NavigationButton :title="titles.bio" icon="fa-solid fa-circle-info" :iconColor="colors.pink" @buttonClicked="navigateTo('bio')" />
            <NavigationButton :title="titles.skills" icon="fa-solid fa-palette" :iconColor="colors.purple" @buttonClicked="navigateTo('skills')" />
            <NavigationButton :title="titles.projects" icon="fa-solid fa-book" :iconColor="colors.lightBlue" @buttonClicked="navigateTo('projects')" />
            <NavigationButton :title="titles.experience" icon="fa-solid fa-briefcase" :iconColor="colors.orange" @buttonClicked="navigateTo('experience')" />
            <NavigationButton :title="titles.education" icon="fa-solid fa-graduation-cap" :iconColor="colors.red" @buttonClicked="navigateTo('education')" />
            <NavigationButton :title="titles.contact" icon="fa-solid fa-envelope" :iconColor="colors.yellow" @buttonClicked="navigateTo('contact')" />
        </div>
    </div>
</template>

<script setup lang="ts">
import colors from "@/assets/colors";
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";

const mainStore = useNuxtApp().$mainStore as MainStore;
const titles = computed(function() {
    if (mainStore.state.language === Language.FR) {
        return {
            home: "Home",
            bio: "Bio",
            skills: "Compétences",
            projects: "Projets",
            experience: "Expériences",
            education: "Diplômes",
            contact: "Contact"
        }
    } else {
        return {
            home: "Home",
            bio: "Bio",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            contact: "Contact"
        }
    }
});

const emit = defineEmits<{ onNavigateTo: [string] }>();

function navigateTo(path: string) {
    emit("onNavigateTo", path);
}



</script>
