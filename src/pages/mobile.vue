<template>
    <div class="h-full w-full flex flex-col items-center justify-center px-10">
        <p class="text-2xl text-center">
            Hello there, <br />
            malheureusement mon portfolio n'est pas encore responsive sur mobile 😢. <br />
            Mais promis, ça arrive !
        </p>

        <div class="flex flex-col items-center pt-20 gap-5">
            <span class="text-lg text-center"
                >Si besoin de me contacter ou bien checker mes réseaux c'est par ici
            </span>
            <FontAwesomeIcon
                class="bg-darkLight text-white p-1 aspect-square rounded-full animate-bounce"
                icon="fa-solid fa-arrow-down"
                size="2x"
            />
            <div class="flex flex-row gap-5">
                <a href="https://github.com/gueriboutmathieu" target="_blank">
                    <FontAwesomeIcon class="text-purple hover:text-purple" icon="fa-brands fa-github" size="4x" />
                </a>
                <a href="https://linkedin.com/in/mathieu-gueribout" target="_blank">
                    <FontAwesomeIcon
                        class="text-lightBlue hover:text-lightBlue"
                        icon="fa-brands fa-linkedin"
                        size="4x"
                    />
                </a>
                <a href="https://malt.fr/profile/mathieugueribout" target="_blank">
                    <MaltIcon class="w-[4em] h-[4em] fill-red hover:fill-red" />
                </a>
                <a href="mailto:gueribout.mathieu@protonmail.com">
                    <FontAwesomeIcon class="text-yellow hover:text-yellow" icon="fa-solid fa-envelope" size="4x" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ path: "/mobile" });

import MaltIcon from "@/assets/icons/malt.svg";
</script>
