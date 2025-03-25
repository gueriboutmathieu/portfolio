<template>
    <button
        class="rounded-lg p-2.5 transition delay-0 duration-150 ease-in-out hover:scale-150 hover:-translate-y-1 active:opacity-50"
        @click="navigationButtonClicked"
        @mouseover="hover"
        @mouseleave="leave"
    >
        <FontAwesomeIcon :icon="icon" size="2x" :style="{ color: iconColor }" />
        <span
            v-if="showTooltip"
            class="absolute -top-5 left-1/2 transform -translate-x-1/2 font-bold text-sm"
            :style="{ color: iconColor }"
        >
            {{ title }}
        </span>
    </button>
</template>

<script setup lang="ts">
import colors from "@/assets/colors";

const props = defineProps<{
    title: string;
    icon: string;
    iconColor: string;
}>();
const emit = defineEmits<{ buttonClicked: [boolean] }>();

const iconColor = ref<string>(colors.white);
const showTooltip = ref<boolean>(false);

function hover() {
    iconColor.value = props.iconColor;
    showTooltip.value = true;
}

function leave() {
    iconColor.value = colors.white;
    showTooltip.value = false;
}

function navigationButtonClicked() {
    emit("buttonClicked", true);
}
</script>
