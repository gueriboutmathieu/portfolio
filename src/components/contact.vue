<template>
    <div class="h-full w-full flex items-center justify-center relative">
        <span
            class="
                absolute left-0 right-0 text-center max-[350px]:top-[70px] max-[640px]:top-24 min-[640px]:top-7
                max-[350px]:text-2xl min-[350px]:text-3xl font-bold
            "
        >
            Contact
        </span>

        <div class="flex flex-row items-center justify-center max-[640px]:gap-5 min-[640px]:gap-20">
            <a
                v-for="contactLink in contactLinks"
                :href="contactLink.link"
                target="_blank"
                class="relative group flex items-center justify-center transition delay-0 duration-150 ease-in-out hover:scale-125 hover:-translate-y-1"
            >
                <Icon
                    v-if="contactLink.iconType === 'nuxtIcon'"
                    :name="contactLink.icon"
                    class="
                        max-[350px]:text-5xl max-[640px]:text-7xl min-[640px]:text-9xl
                    "
                    :class="contactLink.iconExtraClasses"
                />
                <component 
                    v-else
                    :is="contactLink.icon"
                    class="
                        h-full w-full aspect-square max-[350px]:w-[3rem] max-[640px]:w-[4.5rem] min-[640px]:w-[8rem] 
                        fill-white 
                    "
                    :class="contactLink.iconExtraClasses"
                />
                <span
                    class="
                        absolute -top-10 max-[350px]:text-xl max-[640px]:text-2xl min-[640px]:text-3xl font-bold text-nowrap
                        opacity-0 group-hover:opacity-100 group-active:opacity-100
                        scale-0 group-hover:scale-100 group-active:scale-100
                    "
                    :class="'text-' + contactLink.iconColor"
                >
                    {{ contactLink.tooltip }}
                </span>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import MaltIcon from "@/assets/icons/malt.svg";

type ContactLink = {
    tooltip: string;
    iconType: "nuxtIcon" | "svg";
    icon: string;
    iconColor: string;
    iconExtraClasses: string;
    link: string;
};

const contactLinks: ContactLink[] = [
    {
        tooltip: "Github",
        iconType: "nuxtIcon",
        icon: "mdi:github",
        iconColor: "purple",
        iconExtraClasses: "group-hover:text-purple group-active:text-purple",
        link: "https://github.com/gueriboutmathieu",
    },
    {
        tooltip: "LinkedIn",
        iconType: "nuxtIcon",
        icon: "mdi:linkedin",
        iconColor: "lightBlue",
        iconExtraClasses: "group-hover:text-lightBlue group-active:text-lightBlue",
        link: "https://linkedin.com/in/mathieu-gueribout",
    },
    {
        tooltip: "Malt",
        iconType: "svg",
        icon: MaltIcon,
        iconColor: "red",
        iconExtraClasses: "group-hover:fill-red group-active:fill-red",
        link: "https://malt.fr/profile/mathieugueribout",
    },
    {
        tooltip: "Email",
        iconType: "nuxtIcon",
        icon: "ic:round-email",
        iconColor: "yellow",
        iconExtraClasses: "group-hover:text-yellow group-active:text-yellow",
        link: "mailto:gueribout.mathieu@protonmail.com",
    },
];
</script>
