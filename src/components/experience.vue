<template>
    <div class="h-full w-full flex items-center justify-center relative">
        <span class="absolute top-7 text-3xl font-bold">
            {{ language === Language.FR ? "Expériences" : "Experiences" }}
        </span>
        <div class="flex flex-col items-start justify-center gap-5">
            <div
                v-for="(experience, index) in experiences"
                :key="index"
                class="w-full p-6 bg-darkLight rounded-md shadow-xl flex flex-col gap-4"
            >
                <span class="text-xl font-bold">{{ experience.title }}</span>
                <div class="flex flex-col gap-5">
                    <div class="flex flex-row gap-5">
                        <div class="flex flex-row items-center gap-1">
                            <FontAwesomeIcon class="w-6" icon="fa-solid fa-building" size="lg" />
                            <span>{{ experience.company }}</span>
                        </div>
                        <div class="flex flex-row items-center gap-1">
                            <FontAwesomeIcon class="w-6" icon="fa-solid fa-circle-info" size="lg" />
                            <span>{{ experience.companyDescription }}</span>
                        </div>
                        <div class="flex flex-row items-center gap-1">
                            <FontAwesomeIcon class="w-6" icon="fa-solid fa-location-dot" size="lg" />
                            <span>{{ experience.location }}</span>
                        </div>
                        <div class="flex flex-row items-center gap-1">
                            <FontAwesomeIcon class="w-6" icon="fa-solid fa-hourglass" size="lg" />
                            <span>{{ formatDates(experience.startDate, experience.endDate) }}</span>
                        </div>
                    </div>
                    <div class="flex flex-row items-start gap-1">
                        <FontAwesomeIcon class="w-6" icon="fa-solid fa-list-check" size="lg" />
                        <div class="flex flex-col">
                            <span v-for="mission in experience.missions">{{ mission }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";

const mainStore = useNuxtApp().$mainStore as MainStore;
const experiences = computed(() => mainStore.state.experiences);
const language = computed(() => mainStore.state.language);

function formatDates(startDate: Date, endDate: Date): string {
    const locale = language.value === Language.FR ? "fr-FR" : "en-US";
    const start = startDate.toLocaleDateString(locale, { month: "numeric", year: "numeric" });
    const end = endDate.toLocaleDateString(locale, { month: "numeric", year: "numeric" });
    return `${start} - ${end}`;
}
</script>
