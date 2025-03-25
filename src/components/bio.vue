<template>
    <div class="h-full w-1/2 transform translate-x-1/2 flex items-center justify-center text-3xl">
        <div class="text-white">
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
