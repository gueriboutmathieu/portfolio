<template>
    <div class="h-full w-full flex items-center justify-start relative">
        <span
            class="absolute left-0 right-0 text-center max-[350px]:top-20 max-[640px]:top-24 min-[640px]:top-7 max-[350px]:text-2xl min-[350px]:text-3xl font-bold"
        >
            {{ language === Language.FR ? "Projets" : "Projects" }}
        </span>

        <div
            v-for="project in projects"
            class="h-full min-w-full flex items-center justify-center max-[640px]:px-5 min-[640px]:px-28 transition-transform duration-500 ease-in-out"
            :class="isHidpi ? 'pt-6' : ''"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div
                class="max-h-[90vh] max-w-screen-2xl flex flex-col items-start justify-start max-[640px]:gap-1 min-[640px]:gap-5 bg-darkLight rounded-md shadow-xl max-[350px]:p-2.5 min-[350px]:p-5"
                :class="isHidpi ? 'max-w-screen-sm' : ''"
            >
                <button class="relative group flex items-center justify-center" @click="toggleImageModal">
                    <img :src="project.image" class="rounded-md object-contain group-hover:brightness-50" />
                    <Icon name="ic:round-remove-red-eye" class="text-3xl absolute opacity-0 group-hover:opacity-100" />
                </button>
                <div class="flex flex-row items-start justify-center max-[640px]:gap-2.5 min-[640px]:gap-5">
                    <span class="font-bold max-[640px]:text-2xl min-[640px]:text-3xl">
                        {{ project.title }}
                    </span>
                    <a :href="project.github" target="_blank" class="flex self-center text-white">
                        <Icon
                            name="mdi:github"
                            class="max-[640px]:text-2xl min-[640px]:text-4xl text-white hover:text-purple active:text-purple"
                        />
                    </a>
                </div>
                <p
                    class="max-[350px]:text-xs max-[640px]:text-md min-[640px]:text-xl"
                    v-html="project.description.replace(/\n/g, '<br />')"
                />
            </div>
        </div>

        <div
            v-show="showImageModal"
            class="absolute bottom-0 top-0 left-0 right-0 z-20 h-full w-full backdrop-blur-xl p-5"
            @wheel.stop
            @touchmove.stop
        >
            <div class="h-full w-full flex flex-col gap-5 items-end justify-start">
                <button
                    class="aspect-square rounded-md bg-dark text-red max-[350px]:text-3xl min-[350px]:text-4xl hover:bg-red hover:text-dark active:bg-red active:text-dark"
                    @click="toggleImageModal"
                >
                    <Icon name="ic:round-close" />
                </button>

                <div class="h-full w-full flex items-center justify-center modal">
                    <img :src="projects[currentIndex].image" class="max-h-[90vh] max-w-full rounded-md shadow-2xl" />
                </div>
            </div>
        </div>

        <button
            class="absolute max-[350px]:bottom-[70px] max-[640px]:bottom-28 max-[640px]:left-5 min-[640px]:left-5 z-10 rounded-full p-1 aspect-square cursor-pointer flex items-center justify-center hover:bg-lightBlue hover:text-dark active:bg-lightBlue active:text-dark"
            @click="showPreviousProject"
        >
            <Icon name="ic:round-arrow-back" class="max-[350px]:text-2xl max-[640px]:text-3xl min-[640px]:text-5xl" />
        </button>

        <button
            class="absolute max-[350px]:bottom-[70px] max-[640px]:bottom-28 max-[640px]:right-5 min-[640px]:right-5 z-10 rounded-full p-1 aspect-square cursor-pointer flex items-center justify-center hover:bg-lightBlue hover:text-dark active:bg-lightBlue active:text-dark"
            @click="showNextProject"
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
                v-for="(_, index) in projects"
                class="bg-darkLight rounded-full aspect-square max-[350px]:w-3 min-[350px]:w-5 cursor-pointer"
                :class="{ 'bg-lightBlue': index === currentIndex }"
                @click="showProject(index)"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Language } from "@/models/language";
import type { MainStore } from "@/stores/mainStore";

const isHidpi: boolean = window.devicePixelRatio > 1;

const mainStore = useNuxtApp().$mainStore as MainStore;
const projects = computed(function () {
    return mainStore.state.projects;
});
const currentIndex = ref<number>(0);
const language = computed(() => mainStore.state.language);

const showImageModal = ref<boolean>(false);

function toggleImageModal() {
    showImageModal.value = !showImageModal.value;
}

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
