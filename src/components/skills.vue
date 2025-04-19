<template>
    <div class="h-full w-full flex items-center justify-center relative">
        <span
            class="absolute left-0 right-0 text-center max-[350px]:top-[70px] max-[640px]:top-24 min-[640px]:top-7 max-[350px]:text-2xl min-[350px]:text-3xl font-bold"
        >
            {{ language === Language.FR ? "Compétences" : "Skills" }}
        </span>

        <div class="flex flex-col items-start justify-start max-[350px]:gap-2.5 min-[350px]:gap-5 px-5">
            <div v-for="skill in skills">
                <span class="max-[350px]:text-xs max-[640px]:text-lg min-[640px]:text-xl">{{ skill.name }}</span>
                <div
                    class="flex flex-row justify-start max-[350px]:pt-1 min-[350px]:pt-2.5 max-[350px]:gap-2.5 min-[350px]:gap-5"
                >
                    <button
                        v-for="technology in skill.technologies"
                        class="max-[350px]:h-8 max-[640px]:h-12 min-[640px]:h-20 max-[350px]:w-8 max-[640px]:w-12 min-[640px]:w-20 flex items-center justify-center bg-darkLight shadow-2xl rounded-md p-1 hover:bg-white relative transition delay-0 duration-150 ease-in-out"
                        :class="isMobileOrTablet ? 'active:bg-white' : 'hover:scale-125 hover:-translate-y-1'"
                        @mouseover="mouseOver(technology.name)"
                        @mouseleave="mouseLeave(technology.name)"
                        @touchstart="touchStart(technology.name)"
                        @touchend="touchEnd(technology.name)"
                    >
                        <Icon :name="technology.icon" class="text-9xl" />
                        <span
                            :id="technology.name"
                            class="absolute -top-10 max-[350px]:text-sm max-[640px]:text-lg min-[640px]:text-xl bg-white text-dark p-1 shadow-2xl rounded-md text-nowrap"
                            hidden
                        >
                            {{ technology.name }}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";

const isMobileOrTablet = useDevice().isMobileOrTablet;

const mainStore = useNuxtApp().$mainStore as MainStore;
const skills = computed(function () {
    return mainStore.state.skills;
});
const language = computed(() => mainStore.state.language);

function mouseOver(buttonId: string) {
    const tooltip = document.getElementById(buttonId);
    tooltip!.hidden = false;
}

function mouseLeave(buttonId: string) {
    const tooltip = document.getElementById(buttonId);
    tooltip!.hidden = true;
}

function touchStart(buttonId: string) {
    const tooltip = document.getElementById(buttonId);
    tooltip!.hidden = false;
}

function touchEnd(buttonId: string) {
    const tooltip = document.getElementById(buttonId);
    tooltip!.hidden = true;
}
</script>
