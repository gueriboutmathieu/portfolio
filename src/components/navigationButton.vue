<template>
    <button
        class="
            rounded-lg p-2.5
            transition delay-0 duration-150 ease-in-out
            hover:scale-125 hover:-translate-y-1 active:opacity-50 
        "
        :title="title"
        @click="navigationButtonClicked"
        @mouseover="hover"
        @mouseleave="leave"
    >
        <FontAwesomeIcon
            :icon="icon"
            size="2x"
            :style="{color: iconColor}"
        />
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

function hover() {
    iconColor.value = props.iconColor;
}

function leave() {
    iconColor.value = colors.white;
}

function navigationButtonClicked() {
    emit("buttonClicked", true);
}
</script>
