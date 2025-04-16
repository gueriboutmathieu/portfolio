<template>
    <div class="h-full w-full flex items-center justify-start relative">
        <span class="absolute right-0 left-0 text-center top-7 text-3xl font-bold">
            {{ language === Language.FR ? "Projets" : "Projects" }}
        </span>

        <div
            v-for="project in projects"
            class="h-full min-w-full flex items-center justify-center px-24 py-32 transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div
                class="max-h-[90vh] max-w-screen-2xl flex flex-col items-start justify-start gap-5 bg-darkLight rounded-md shadow-xl p-5"
            >
                <img :src="project.image" class="rounded-md object-contain" />
                <div class="flex flex-row items-start justify-center gap-5">
                    <span class="text-3xl font-bold">{{ project.title }}</span>
                    <a :href="project.github" target="_blank" class="flex self-center">
                        <FontAwesomeIcon icon="fa-brands fa-github" size="2x" class="text-white hover:text-purple" />
                    </a>
                </div>
                <p class="text-lg" v-html="project.description.replace(/\n/g, '<br />')" />
            </div>
        </div>

        <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            size="2x"
            class="absolute left-5 rounded-full p-2.5 aspect-square text-white cursor-pointer hover:bg-lightBlue hover:text-dark"
            @click="showPreviousProject"
        />

        <FontAwesomeIcon
            icon="fa-solid fa-arrow-right"
            size="2x"
            class="absolute right-5 rounded-full p-2.5 aspect-square text-white cursor-pointer hover:bg-lightBlue hover:text-dark"
            @click="showNextProject"
        />

        <div class="absolute top-28 left-0 right-0 items-center justify-center flex flex-row gap-2.5">
            <div
                v-for="(_, index) in projects"
                class="bg-darkLight rounded-full aspect-square w-5 cursor-pointer"
                :class="{ 'bg-lightBlue': index === currentIndex }"
                @click="showProject(index)"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Language } from "@/models/language";
import type { MainStore } from "@/stores/mainStore";

const mainStore = useNuxtApp().$mainStore as MainStore;
const projects = computed(function () {
    return mainStore.state.projects;
});
const currentIndex = ref<number>(0);
const language = computed(() => mainStore.state.language);

function showProject(index: number) {
    currentIndex.value = index;
}

function showNextProject() {
    if (currentIndex.value === projects.value.length - 1) {
        currentIndex.value = 0;
    } else {
        currentIndex.value++;
    }
}

function showPreviousProject() {
    if (currentIndex.value === 0) {
        currentIndex.value = projects.value.length - 1;
    } else {
        currentIndex.value--;
    }
}

onMounted(() => window.addEventListener("keydown", handleKey));

onBeforeUnmount(() => window.removeEventListener("keydown", handleKey));

function handleKey(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
        showNextProject();
    } else if (event.key === "ArrowLeft") {
        showPreviousProject();
    }
}
</script>
