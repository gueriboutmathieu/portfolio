<template>
    <div class="h-screen w-screen bg-dark font-[FiraSans] text-white overflow-hidden">
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import { createMainStore } from "@/stores/mainStore";
import { type ChatbotService, createChatbotService } from "@/services/chatbot";

const runtimeConfig = useRuntimeConfig();
const nuxtApp = useNuxtApp();

const mainStore = createMainStore();
const chatbotService: ChatbotService = createChatbotService(
    runtimeConfig.public.mistral.apiKey,
    runtimeConfig.public.mistral.model,
    mainStore
);

nuxtApp.provide("mainStore", mainStore);
nuxtApp.provide("chatbotService", chatbotService);
</script>

<style>
body, html {
    background-color: #282A36;
}
</style>
