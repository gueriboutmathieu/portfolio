<template>
    <div class="h-full w-full flex items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-5">
            <div
                v-for="project in projects"
                class="w-2/3 flex flex-col items-start rounded-md bg-darkLight shadow-xl p-5 gap-5"
            >
                <span class="text-3xl">{{ project.title }}</span>
                <span>{{ project.description }}</span>
                <a :href="project.github" target="_blank" class="flex self-center">
                    <FontAwesomeIcon icon="fa-brands fa-github" size="2x" class="text-white hover:text-purple" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";

const mainStore = useNuxtApp().$mainStore as MainStore;
const projects = computed(function () {
    return mainStore.state.projects;
});
</script>
