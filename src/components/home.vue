<template>
    <div class="h-full w-full flex flex-col gap-20 items-center justify-center text-white">
        <img src="@/assets/images/profile.jpeg" class="rounded-full h-[25vh] w-auto" />
        <p v-html="title" />
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";

const mainStore = useNuxtApp().$mainStore as MainStore;

const title = computed(() => {
    return mainStore.state.title.replace(/\n/g, "<br />");
});
</script>
