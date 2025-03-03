<template>
    <div class="h-full w-full flex flex-col items-center justify-center">
        <div
            v-for="(education, index) in educations"
            :key="index"
            class="h-1/4 w-full flex flex-col items-center"
        >
            <div class="flex flex-row self-end">
                <div class="h-5 w-5 flex self-center rounded-full bg-green"></div>
                <span class="flex self-start">{{ education.degree }}</span>
            </div>
            <div class="flex flex-grow w-1 bg-white rounded-full"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";

const mainStore = useNuxtApp().$mainStore as MainStore;
const educations = computed(function() {
    return mainStore.state.educations;
});
</script>