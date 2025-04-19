<template>
    <div class="h-full w-full">
        <button
            class="h-full w-full flex flex-row items-center justify-center gap-1 bg-darkLight/50 shadow-2xl backdrop-blur-md rounded-md px-2.5 py-2.5 font-bold max-[350px]:text-sm max-[640px]:text-md min-[640px]:text-lg hover:bg-green hover:text-dark active:bg-green active:text-dark"
            @click="switchLanguage"
        >
            <Icon name="ic:round-language" class="flex max-[350px]:text-lg max-[640px]:text-xl min-[640px]:text-2xl" />
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
