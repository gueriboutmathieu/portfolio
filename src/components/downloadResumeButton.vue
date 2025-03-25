<template>
    <div class="h-full w-full">
        <button
            class="h-full w-full bg-darkLight/50 shadow-2xl backdrop-blur-md text-lg font-bold rounded-md px-5 py-2.5 hover:bg-green hover:text-dark"
            @click="downloadResume"
        >
            <FontAwesomeIcon class="pr-1" icon="fa-solid fa-file-arrow-down" />
            {{ title }}
        </button>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";
import resume from "@/assets/documents/cv_gueribout_mathieu.pdf";

const mainStore = useNuxtApp().$mainStore as MainStore;

const title = computed(function () {
    return mainStore.state.language === Language.EN ? "Download my resume" : "Télécharger mon CV";
});

async function downloadResume() {
    const response = await fetch(resume);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cv_gueribout_mathieu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}
</script>
