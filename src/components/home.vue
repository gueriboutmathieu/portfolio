<template>
    <div class="h-full w-full flex items-center justify-center">
        <div class="flex flex-col gap-2.5 item-start justify-center">
            <img src="@/assets/images/profile.jpeg" class="h-[25vh] w-fit flex self-center rounded-full" />
            <span class="max-[350px]:text-sm max-[640px]:text-lg min-[640px]:text-xl pt-10">{{ language === Language.FR ? "Hello, je suis" : "Hi, I'm" }}</span>
            <span class="max-[350px]:text-3xl max-[640px]:text-4xl min-[640px]:text-6xl text-green">Mathieu Gueribout</span>
            <span class="max-[350px]:text-sm max-[640px]:text-xl min-[640px]:text-2xl">
                {{ language === Language.FR ? "Un développeur full stack freelance." : "A freelance full stack developer."}}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";

const mainStore = useNuxtApp().$mainStore as MainStore;

const language = computed(() => mainStore.state.language);
</script>
