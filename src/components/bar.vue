<template>
    <div
        class="h-full w-full max-[640px]:w-[90vw] min-[640px]:gap-5 flex flex-row items-center justify-between bg-darkLight/50 shadow-2xl backdrop-blur-md rounded-md p-2.5"
    >
        <button
            v-for="section in sections"
            class="flex items-center justify-center"
            :class="!isMobileOrTablet ? 'transition delay-0 duration-150 ease-in-out hover:scale-150 hover:-translate-y-1 active:opacity-50' : ''"
            @click="navigateTo(section.path)"
            @mouseover="mouseOver(section.title, section.iconColor)"
            @mouseleave="mouseLeave(section.title)"
            @touchstart="touchStart(section.title, section.iconColor)"
            @touchend="touchEnd(section.title)"
        >
            <Icon
                :id="'icon-' + section.title"
                :name="section.icon"
                class="max-[350px]:text-2xl max-[640px]:text-3xl min-[640px]:text-5xl"
            />
            <span
                :id="'tooltip-' + section.title"
                class="absolute -top-5 font-bold text-sm"
                :style="{ color: section.iconColor }"
                hidden
            >
                {{ section.title }}
            </span>
        </button>
    </div>
</template>

<script setup lang="ts">
import colors from "@/assets/colors";
import type { MainStore } from "@/stores/mainStore";

const emit = defineEmits<{ onNavigateTo: [string] }>();

const isMobileOrTablet = useDevice().isMobileOrTablet;

const mainStore = useNuxtApp().$mainStore as MainStore;
const sections = computed(() => mainStore.state.sections);

function navigateTo(path: string) {
    emit("onNavigateTo", path);
}

function mouseOver(buttonId: string, iconColor: string) {
    const tooltip = document.getElementById('tooltip-' + buttonId);
    tooltip!.hidden = false;
    const title = document.getElementById("icon-" + buttonId);
    title!.style.color = iconColor;
}

function mouseLeave(buttonId: string) {
    const tooltip = document.getElementById('tooltip-' + buttonId);
    tooltip!.hidden = true;
    const title = document.getElementById("icon-" + buttonId);
    title!.style.color = colors.white;
}

function touchStart(buttonId: string, iconColor: string) {
    const tooltip = document.getElementById('tooltip-' + buttonId);
    tooltip!.hidden = false;
    const title = document.getElementById("icon-" + buttonId);
    title!.style.color = iconColor;
}

function touchEnd(buttonId: string) {
    const tooltip = document.getElementById('tooltip-' + buttonId);
    tooltip!.hidden = true;
    const title = document.getElementById("icon-" + buttonId);
    title!.style.color = colors.white;
}
</script>
