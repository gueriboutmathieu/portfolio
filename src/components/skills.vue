<template>
    <div class="h-full w-full flex items-center justify-center relative">
        <span class="absolute top-7 text-3xl font-bold">{{ language === Language.FR ? "Compétences" : "Skills" }}</span>
        <div class="flex flex-col items-start justify-start gap-5">
            <div v-for="skill in skills">
                <span class="text-xl">{{ skill.name }}</span>
                <div class="flex flex-row justify-start pt-2.5 gap-5">
                    <button v-for="image in skill.images" class="bg-darkLight rounded-md p-2.5 hover:bg-white">
                        <img :src="image.src" class="w-[4em] h-[4em]" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";

const mainStore = useNuxtApp().$mainStore as MainStore;
const skills = computed(function () {
    return mainStore.state.skills;
});
const language = computed(() => mainStore.state.language);
</script>
