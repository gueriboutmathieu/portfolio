<template>
    <div class="h-full w-full">
        <button 
            class="h-full w-full bg-darkLight/50 shadow-2xl backdrop-blur-md text-xl font-bold rounded-md px-5 py-2.5 hover:bg-green hover:text-dark"
            @click="switchLanguage"
        >
            <FontAwesomeIcon class="pr-1" icon="fa-solid fa-globe" />
            {{ language }}   
        </button>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";

const mainStore = useNuxtApp().$mainStore as MainStore;

const language = computed(() => mainStore.state.language);

function switchLanguage() {
    mainStore.setLanguage(language.value === Language.FR ? Language.EN : Language.FR);
}
</script>
