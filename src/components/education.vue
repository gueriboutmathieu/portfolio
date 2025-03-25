<template>
    <div class="h-full w-full flex items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-5">
            <div
                v-for="(education, index) in educations"
                :key="index"
                class="w-full p-6 bg-darkLight rounded-md shadow-xl flex flex-col gap-4"
            >
                <span class="text-xl font-bold">{{ education.title }}</span>
                <div class="flex flex-col gap-3">
                    <div class="flex flex-row items-center gap-4">
                        <FontAwesomeIcon class="w-6" icon="fa-solid fa-graduation-cap" size="lg" />
                        <span>{{ education.degree }}</span>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <FontAwesomeIcon class="w-6" icon="fa-solid fa-circle-info" size="lg" />
                        <span>{{ education.description }}</span>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <FontAwesomeIcon class="w-6" icon="fa-solid fa-school" size="lg" />
                        <span>{{ education.school }}</span>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <FontAwesomeIcon class="w-6" icon="fa-solid fa-location-dot" size="lg" />
                        <span>{{ education.location }}</span>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <FontAwesomeIcon class="w-6" icon="fa-solid fa-hourglass" size="lg" />
                        <span>{{ formatDates(education.startDate, education.endDate) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";

const mainStore = useNuxtApp().$mainStore as MainStore;
const educations = computed(() => mainStore.state.educations);

function formatDates(startDate: Date, endDate: Date): string {
    const startYear = startDate.getFullYear().toString();
    const endYear = endDate.getFullYear().toString();
    return `${startYear} - ${endYear}`;
}
</script>
