<template>
    <div class="h-[100dvh] w-[100dvw] bg-dark font-[FiraSans] text-white overflow-hidden">
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
    runtimeConfig.public.api.baseUrl,
    runtimeConfig.public.api.publicKey,
    runtimeConfig.public.openai.model,
    mainStore,
);
await chatbotService.init();

nuxtApp.provide("mainStore", mainStore);
nuxtApp.provide("chatbotService", chatbotService);
</script>

<style>
body,
html {
    background-color: #282a36;
}
</style>
