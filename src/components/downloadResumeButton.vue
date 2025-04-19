<template>
    <div class="h-full w-full">
        <button
            class="
                h-full w-full flex flex-row items-center justify-center gap-1 bg-darkLight/50 shadow-2xl backdrop-blur-md rounded-md px-2.5 py-2.5
                max-[350px]:text-sm max-[640px]:text-md min-[640px]:text-lg font-bold
                hover:bg-green hover:text-dark active:bg-green active:text-dark
            "
            @click="downloadResume"
        >
            <Icon name="ic:round-file-download" class="flex max-[350px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl" />
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
