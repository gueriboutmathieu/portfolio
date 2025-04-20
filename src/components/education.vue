<template>
    <div class="h-full w-full flex items-center justify-center relative">
        <span
            class="absolute left-0 right-0 text-center max-[480px]:top-20 max-[640px]:top-24 min-[640px]:top-7 max-[480px]:text-2xl min-[480px]:text-3xl font-bold"
        >
            {{ language === Language.FR ? "Diplômes" : "Education" }}
        </span>

        <div class="h-full w-full flex justify-start">
            <div
                v-for="education in educations"
                class="h-full min-w-full flex items-center justify-center max-[640px]:px-5 min-[640px]:px-28 transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
                <div
                    class="max-h-[90vh] max-w-screen-2xl flex flex-col items-start justify-start max-[640px]:gap-1 min-[640px]:gap-5 bg-darkLight rounded-md shadow-xl max-[480px]:p-2.5 min-[480px]:p-5"
                >
                    <span class="max-[480px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl font-bold">
                        {{ education.title }}
                    </span>
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-row items-center gap-4">
                            <Icon
                                name="ic:round-school"
                                class="max-[480px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                            />
                            <span class="max-[480px]:text-xs max-[640px]:text-sm min-[640px]:text-lg">
                                {{ education.degree }}
                            </span>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <Icon
                                name="ic:round-info"
                                class="max-[480px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                            />
                            <span class="max-[480px]:text-xs max-[640px]:text-sm min-[640px]:text-lg">
                                {{ education.description }}
                            </span>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <Icon
                                name="ic:round-factory"
                                class="max-[480px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                            />
                            <span class="max-[480px]:text-xs max-[640px]:text-sm min-[640px]:text-lg">
                                {{ education.school }}
                            </span>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <Icon
                                name="ic:round-location-on"
                                class="max-[480px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                            />
                            <span class="max-[480px]:text-xs max-[640px]:text-sm min-[640px]:text-lg">
                                {{ education.location }}
                            </span>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <Icon
                                name="ic:round-hourglass-empty"
                                class="max-[480px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl aspect-square"
                            />
                            <span class="max-[480px]:text-xs max-[640px]:text-sm min-[640px]:text-lg">
                                {{ formatDates(education.startDate, education.endDate) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button
            class="absolute max-[480px]:bottom-[70px] max-[640px]:bottom-28 max-[640px]:left-5 min-[640px]:left-5 z-10 rounded-full p-1 aspect-square cursor-pointer flex items-center justify-center hover:bg-red hover:text-dark active:bg-red active:text-dark"
            @click="goToPreviousEducation"
        >
            <Icon name="ic:round-arrow-back" class="max-[480px]:text-2xl max-[640px]:text-3xl min-[640px]:text-5xl" />
        </button>

        <button
            class="absolute max-[480px]:bottom-[70px] max-[640px]:bottom-28 max-[640px]:right-5 min-[640px]:right-5 z-10 rounded-full p-1 aspect-square cursor-pointer flex items-center justify-center hover:bg-red hover:text-dark active:bg-red active:text-dark"
            @click="goToNextEducation"
        >
            <Icon
                name="ic:round-arrow-forward"
                class="max-[480px]:text-2xl max-[640px]:text-3xl min-[640px]:text-5xl"
            />
        </button>

        <div
            class="absolute left-0 right-0 max-[480px]:bottom-[70px] max-[640px]:bottom-28 min-[640px]:top-24 pb-2.5 flex flex-row self-center items-center justify-center gap-2.5 z-0"
        >
            <div
                v-for="(_, index) in educations"
                class="bg-darkLight rounded-full aspect-square max-[480px]:w-3 min-[480px]:w-5 cursor-pointer"
                :class="{ 'bg-red': index === currentIndex }"
                @click="goToEducation(index)"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";

const mainStore = useNuxtApp().$mainStore as MainStore;
const language = computed(() => mainStore.state.language);
const educations = computed(() => mainStore.state.educations);
const currentIndex = ref<number>(0);

function formatDates(startDate: Date, endDate: Date): string {
    const startYear = startDate.getFullYear().toString();
    const endYear = endDate.getFullYear().toString();
    return `${startYear} - ${endYear}`;
}

function goToEducation(index: number) {
    currentIndex.value = index;
}

function goToNextEducation() {
    if (currentIndex.value === educations.value.length - 1) {
        currentIndex.value = 0;
    } else {
        currentIndex.value++;
    }
}

function goToPreviousEducation() {
    if (currentIndex.value === 0) {
        currentIndex.value = educations.value.length - 1;
    } else {
        currentIndex.value--;
    }
}

onMounted(() => window.addEventListener("keydown", handleKey));

onBeforeUnmount(() => window.removeEventListener("keydown", handleKey));

function handleKey(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
        goToNextEducation();
    } else if (event.key === "ArrowLeft") {
        goToPreviousEducation();
    }
}
</script>
