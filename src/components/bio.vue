<template>
    <div class="h-full w-full flex items-center justify-center relative">
        <span class="absolute top-7 text-3xl font-bold">Bio</span>
        <div class="w-1/2 text-white text-3xl">
            <p v-html="bio" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";

const mainStore = useNuxtApp().$mainStore as MainStore;

const bio = computed(() => {
    return mainStore.state.bio.replace(/\n/g, "<br />");
});
</script>
