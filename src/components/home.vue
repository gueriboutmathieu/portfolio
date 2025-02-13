<template>
    <div class="h-full w-full flex flex-col gap-20 items-center justify-center text-white">
        <img src="@/assets/profile_pic.jpeg" class="rounded-full w-[300px] h-[300px]" />
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
