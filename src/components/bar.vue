<template>
    <div class="h-full w-full bg-darkLight/50 shadow-2xl backdrop-blur-md rounded-xl inline-block p-2.5">
        <div class="flex flex-row gap-2.5">
            <NavigationButton title="Home" icon="fa-solid fa-home" :iconColor="colors.green" @buttonClicked="navigateTo('home')" />
            <NavigationButton title="Bio" icon="fa-solid fa-circle-info" :iconColor="colors.pink" @buttonClicked="navigateTo('bio')" />
            <NavigationButton title="Skills" icon="fa-solid fa-palette" :iconColor="colors.purple" @buttonClicked="navigateTo('skills')" />
            <NavigationButton title="Projects" icon="fa-solid fa-book" :iconColor="colors.lightBlue" @buttonClicked="navigateTo('projects')" />
            <NavigationButton title="Experience" icon="fa-solid fa-briefcase" :iconColor="colors.orange" @buttonClicked="navigateTo('experience')" />
            <NavigationButton title="Education" icon="fa-solid fa-graduation-cap" :iconColor="colors.red" @buttonClicked="navigateTo('education')" />
            <NavigationButton title="Contact" icon="fa-solid fa-envelope" :iconColor="colors.yellow" @buttonClicked="navigateTo('contact')" />
        </div>
    </div>
</template>

<script setup lang="ts">
import colors from "@/assets/colors";

const emit = defineEmits<{ onNavigateTo: [string] }>();

function navigateTo(path: string) {
    emit("onNavigateTo", path);
}
</script>
