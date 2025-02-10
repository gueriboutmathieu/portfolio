<template>
    <div class="h-full w-full backdrop-blur-xl rounded-xl inline-block p-2.5 shadow-dark shadow-md">
        <div class="flex flex-row gap-2.5">
            <NavigationButton title="Home" icon="fa-solid fa-home" :iconColor="colors.green" @buttonClicked="navigateTo('/')" />
            <NavigationButton title="Skills" icon="fa-solid fa-palette" :iconColor="colors.purple" @buttonClicked="navigateTo('/skills')" />
            <NavigationButton title="Projects" icon="fa-solid fa-book" :iconColor="colors.lightBlue" @buttonClicked="navigateTo('/projects')" />
            <NavigationButton title="Experience" icon="fa-solid fa-briefcase" :iconColor="colors.orange" @buttonClicked="navigateTo('/')" />
            <NavigationButton title="Education" icon="fa-solid fa-graduation-cap" :iconColor="colors.red" @buttonClicked="navigateTo('/')" />
            <NavigationButton title="Contact" icon="fa-solid fa-envelope" :iconColor="colors.yellow" @buttonClicked="navigateTo('/')" />
        </div>
    </div>
</template>

<script setup lang="ts">
import colors from "@/assets/colors";

const router = useRouter();

function navigateTo(path: string) {
    router.push(path);
}
</script>
