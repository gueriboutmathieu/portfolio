<template>
    <div class="h-full w-full flex flex-row gap-20 items-center justify-center">
        <a
            href="https://github.com/gueriboutmathieu"
            target="_blank"
            class="relative group transition delay-0 duration-150 ease-in-out hover:scale-125 hover:-translate-y-1"
        >
            <FontAwesomeIcon
                class="text-white hover:text-purple"
                icon="fa-brands fa-github"
                size="6x"
            />
            <span class="absolute -top-10 left-1/2 -translate-x-1/2 text-xl text-purple font-bold opacity-0 group-hover:opacity-100 text-nowrap">
                Github
            </span>
        </a>
        <a
            href="https://linkedin.com/in/mathieu-gueribout"
            target="_blank"
            class="relative group transition delay-0 duration-150 ease-in-out hover:scale-125 hover:-translate-y-1"
        >
            <FontAwesomeIcon
                class="text-white hover:text-lightBlue"
                icon="fa-brands fa-linkedin"
                size="6x"
            />
            <span class="absolute -top-10 left-1/2 -translate-x-1/2 text-xl text-lightBlue font-bold opacity-0 group-hover:opacity-100 text-nowrap">
                LinkedIn
            </span>
        </a>
        <a
            href="https://malt.fr/profile/mathieugueribout"
            target="_blank"
            class="relative group transition delay-0 duration-150 ease-in-out hover:scale-125 hover:-translate-y-1"
        >
            <MaltIcon class="w-[6em] h-[6em] fill-white hover:fill-red" />
            <span class="absolute -top-10 left-1/2 -translate-x-1/2 text-xl text-red font-bold opacity-0 group-hover:opacity-100">
                Malt
            </span>
        </a>
        <a
            href="mailto:gueribout.mathieu@protonmail.com"
            class="relative group transition delay-0 duration-150 ease-in-out hover:scale-125 hover:-translate-y-1"
        >
            <FontAwesomeIcon
                class="text-white hover:text-yellow"
                icon="fa-solid fa-envelope"
                size="6x"
            />
            <span class="absolute -top-10 left-1/2 -translate-x-1/2 text-xl text-yellow font-bold opacity-0 group-hover:opacity-100 text-nowrap">
                Email
            </span>
        </a>
    </div>
</template>

<script setup lang="ts">
import MaltIcon from "@/assets/icons/malt.svg";
</script>
