<template>
    <div class="h-full w-full flex items-center justify-center relative">
        <span
            class="
                absolute left-0 right-0 text-center max-[350px]:top-[70px] max-[640px]:top-24 min-[640px]:top-7
                max-[350px]:text-2xl min-[350px]:text-3xl font-bold
            "
        >
            Bio
        </span>
        
        <div class="max-[640px]:w-5/6 min-[640px]:w-1/2 text-white max-[350px]:text-sm max-[640px]:text-lg min-[640px]:text-3xl">
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
