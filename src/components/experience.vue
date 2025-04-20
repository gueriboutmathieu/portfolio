<template>
    <div class="h-full w-full flex items-center justify-start relative">
        <span
            class="absolute left-0 right-0 text-center max-[350px]:top-20 max-[640px]:top-24 min-[640px]:top-7 max-[350px]:text-2xl min-[350px]:text-3xl font-bold"
        >
            {{ language === Language.FR ? "Expériences" : "Experience" }}
        </span>

        <div
            v-for="experience in experiences"
            class="h-full min-w-full flex items-center justify-center max-[640px]:px-5 min-[640px]:px-28 transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div
                class="max-h-[90vh] max-w-screen-2xl flex flex-col items-start justify-start max-[640px]:gap-2.5 min-[640px]:gap-5 bg-darkLight rounded-md shadow-xl max-[350px]:p-2.5 min-[350px]:p-5"
            >
                <span class="max-[350px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl font-bold">
                    {{ experience.title }}
                </span>

                <div v-if="!isMobile" class="flex flex-col gap-2.5">
                    <div class="flex flex-row gap-5">
                        <div class="flex flex-row items-center gap-2.5">
                            <Icon
                                class="max-[350px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                                name="ic:round-factory"
                            />
                            <span class="max-[350px]:text-xs max-[640px]:text-sm min-[640px]:text-lg">
                                {{ experience.company }}
                            </span>
                        </div>
                        <div class="flex flex-row items-center gap-2.5">
                            <Icon
                                class="max-[350px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                                name="ic:round-location-on"
                            />
                            <span class="max-[350px]:text-xs max-[640px]:text-sm min-[640px]:text-lg">
                                {{ experience.location }}
                            </span>
                        </div>
                        <div class="flex flex-row items-center gap-2.5">
                            <Icon
                                class="max-[350px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                                name="ic:round-hourglass-empty"
                            />
                            <span class="max-[350px]:text-xs max-[640px]:text-sm min-[640px]:text-lg">
                                {{ formatDates(experience.startDate, experience.endDate) }}
                            </span>
                        </div>
                    </div>
                    <div class="flex flex-row items-center gap-2.5">
                        <Icon
                            class="max-[350px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                            name="ic:round-info"
                        />
                        <span class="max-[350px]:text-xs max-[640px]:text-sm min-[640px]:text-lg">
                            {{ experience.companyDescription }}
                        </span>
                    </div>
                    <div class="flex flex-row items-start gap-2.5">
                        <Icon
                            class="max-[350px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                            name="ic:round-checklist"
                        />
                        <div class="flex flex-col">
                            <div
                                v-for="mission in experience.missions"
                                class="flex flex-row gap-1 max-[350px]:text-xs max-[640px]:text-sm min-[640px]:text-lg"
                            >
                                <span>·</span>
                                <span>{{ mission }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="flex flex-col gap-2.5">
                    <div class="flex flex-row items-center gap-2.5">
                        <Icon class="max-[350px]:text-lg max-[640px]:text-xl aspect-square" name="ic:round-factory" />
                        <span class="max-[350px]:text-sm max-[640px]:text-md">
                            {{ experience.company }}
                        </span>
                    </div>
                    <div class="flex flex-row items-center gap-2.5">
                        <Icon
                            class="max-[350px]:text-lg max-[640px]:text-xl aspect-square"
                            name="ic:round-location-on"
                        />
                        <span class="max-[350px]:text-sm max-[640px]:text-md">
                            {{ experience.location }}
                        </span>
                    </div>
                    <div class="flex flex-row items-center gap-2.5">
                        <Icon
                            class="max-[350px]:text-lg max-[640px]:text-xl aspect-square"
                            name="ic:round-hourglass-empty"
                        />
                        <span class="max-[350px]:text-sm max-[640px]:text-md">
                            {{ formatDates(experience.startDate, experience.endDate) }}
                        </span>
                    </div>
                    <div class="flex flex-row items-center gap-2.5">
                        <Icon class="max-[350px]:text-lg max-[640px]:text-xl aspect-square" name="ic:round-info" />
                        <span class="max-[350px]:text-sm max-[640px]:text-md">
                            {{ experience.companyDescription }}
                        </span>
                    </div>
                    <div class="flex items-center justify-center pt-2.5">
                        <button
                            class="bg-dark/50 text-white shadow-xl rounded-md px-2.5 py-1 active:bg-orange active:text-dark"
                            @click="toggleExperienceModal"
                        >
                            Plus de détails
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div
            v-show="showExperienceModal"
            class="absolute bottom-0 top-0 left-0 right-0 z-20 h-full w-full backdrop-blur-xl p-5"
            @wheel.stop
            @touchmove.stop
        >
            <div
                class="h-full w-full flex flex-col gap-2.5 p-5 overflow-y-auto bg-darkLight shadow-2xl rounded-md modal"
            >
                <div class="flex flex-row items-start justify-between gap-5">
                    <span class="max-[350px]:text-xl min-[350px]:text-2xl font-bold text-balance">
                        {{ currentExperience.title }}
                    </span>
                    <button
                        class="aspect-square rounded-md bg-dark text-red max-[350px]:text-3xl min-[350px]:text-4xl active:bg-red active:text-dark"
                        @click="toggleExperienceModal"
                    >
                        <Icon name="ic:round-close" />
                    </button>
                </div>

                <div class="flex flex-row items-center gap-2.5">
                    <Icon class="max-[350px]:text-xl min-[640px]:text-2xl aspect-square" name="ic:round-factory" />
                    <span class="max-[350px]:text-md min-[640px]:text-lg">
                        {{ currentExperience.company }}
                    </span>
                </div>
                <div class="flex flex-row items-center gap-2.5">
                    <Icon class="max-[350px]:text-xl min-[640px]:text-2xl aspect-square" name="ic:round-location-on" />
                    <span class="max-[350px]:text-md min-[640px]:text-lg">
                        {{ currentExperience.location }}
                    </span>
                </div>
                <div class="flex flex-row items-center gap-2.5">
                    <Icon
                        class="max-[350px]:text-xl min-[640px]:text-2xl aspect-square"
                        name="ic:round-hourglass-empty"
                    />
                    <span class="max-[350px]:text-md min-[640px]:text-lg text-wrap">
                        {{ formatDates(currentExperience.startDate, currentExperience.endDate) }}
                    </span>
                </div>
                <div class="flex flex-row items-center gap-2.5">
                    <Icon class="max-[350px]:text-xl min-[640px]:text-2xl aspect-square" name="ic:round-info" />
                    <span class="max-[350px]:text-md min-[640px]:text-lg">
                        {{ currentExperience.companyDescription }}
                    </span>
                </div>
                <div class="flex flex-row items-start gap-2.5">
                    <Icon class="max-[350px]:text-xl min-[640px]:text-2xl aspect-square" name="ic:round-checklist" />
                    <div class="flex flex-col">
                        <div
                            v-for="mission in currentExperience.missions"
                            class="flex flex-row gap-1 max-[350px]:text-md min-[640px]:text-lg"
                        >
                            <span>·</span>
                            <span>{{ mission }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button
            class="absolute max-[350px]:bottom-[70px] max-[640px]:bottom-28 max-[640px]:left-5 min-[640px]:left-5 z-10 rounded-full p-1 aspect-square cursor-pointer flex items-center justify-center hover:bg-orange hover:text-dark active:bg-orange active:text-dark"
            @click="goToPreviousExperience"
        >
            <Icon name="ic:round-arrow-back" class="max-[350px]:text-2xl max-[640px]:text-3xl min-[640px]:text-5xl" />
        </button>

        <button
            class="absolute max-[350px]:bottom-[70px] max-[640px]:bottom-28 max-[640px]:right-5 min-[640px]:right-5 z-10 rounded-full p-1 aspect-square cursor-pointer flex items-center justify-center hover:bg-orange hover:text-dark active:bg-orange active:text-dark"
            @click="goToNextExperience"
        >
            <Icon
                name="ic:round-arrow-forward"
                class="max-[350px]:text-2xl max-[640px]:text-3xl min-[640px]:text-5xl"
            />
        </button>

        <div
            class="absolute left-0 right-0 max-[350px]:bottom-[70px] max-[640px]:bottom-28 min-[640px]:top-24 pb-2.5 flex flex-row self-center items-center justify-center gap-2.5 z-0"
        >
            <div
                v-for="(_, index) in experiences"
                class="bg-darkLight rounded-full aspect-square max-[350px]:w-3 min-[350px]:w-5 cursor-pointer"
                :class="{ 'bg-orange': index === currentIndex }"
                @click="goToExperience(index)"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";
import type { Experience } from "@/models/experience";

const isMobile = useDevice().isMobile;

const mainStore = useNuxtApp().$mainStore as MainStore;
const language = computed(() => mainStore.state.language);
const experiences = computed(() => mainStore.state.experiences);
const currentIndex = ref<number>(0);
const currentExperience = ref<Experience>(experiences.value[0]);
const showExperienceModal = ref<boolean>(false);

function formatDates(startDate: Date, endDate: Date): string {
    const locale = language.value === Language.FR ? "fr-FR" : "en-US";
    const start = startDate.toLocaleDateString(locale, { month: "numeric", year: "numeric" });
    const end = endDate.toLocaleDateString(locale, { month: "numeric", year: "numeric" });
    return `${start} - ${end}`;
}

function toggleExperienceModal() {
    showExperienceModal.value = !showExperienceModal.value;
}

function goToExperience(index: number) {
    currentIndex.value = index;
    currentExperience.value = experiences.value[index];
}

function goToNextExperience() {
    if (currentIndex.value === experiences.value.length - 1) {
        currentIndex.value = 0;
    } else {
        currentIndex.value++;
    }
    currentExperience.value = experiences.value[currentIndex.value];
}

function goToPreviousExperience() {
    if (currentIndex.value === 0) {
        currentIndex.value = experiences.value.length - 1;
    } else {
        currentIndex.value--;
    }
    currentExperience.value = experiences.value[currentIndex.value];
}

onMounted(() => window.addEventListener("keydown", handleKey));

onBeforeUnmount(() => window.removeEventListener("keydown", handleKey));

function handleKey(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
        goToNextExperience();
    } else if (event.key === "ArrowLeft") {
        goToPreviousExperience();
    }
}
</script>

<style scoped>
.modal {
    animation: grow 0.5s;
}

@keyframes grow {
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}
</style>
