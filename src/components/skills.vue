<template>
    <div class="h-full w-full flex flex-col items-center justify-center">
        <div v-for="skill in skills" class="flex flex-col">
            <span>{{ skill.name }}</span>
            <div v-for="image in skill.images" class="flex flex-row">
                <img
                    :src="image.src"
                    class="w-10 h-10"
                >
                <span>{{ image.tooltip }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";

const mainStore = useNuxtApp().$mainStore as MainStore;
const skills = computed(function() {
    return mainStore.state.skills;
});

</script>