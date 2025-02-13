<template>
    <div class="h-full w-full bg-dark">
        <section
            id="home"
            class="section h-full w-full"
            @wheel="(e) => scrollTo(e, 'bio', 'home')"
            @touchmove="(e) => touchTo(e, 'bio', 'home')"
        >
            <Home />
        </section>
        <section
            id="bio"
            class="section h-full w-full"
            @wheel="(e) => scrollTo(e, 'skills', 'home')"
            @touchmove="(e) => touchTo(e, 'skills', 'home')"
        >
            <Bio />
        </section>
        <section
            id="skills"
            class="section h-full w-full"
            @wheel="(e) => scrollTo(e, 'projects', 'bio')"
            @touchmove="(e) => touchTo(e, 'projects', 'bio')"
        >
            <Skills />
        </section>
        <section
            id="projects"
            class="section h-full w-full"
            @wheel="(e) => scrollTo(e, 'experience', 'skills')"
            @touchmove="(e) => touchTo(e, 'experience', 'skills')"
        >
            <Projects />
        </section>
        <section
            id="experience"
            class="section h-full w-full"
            @wheel="(e) => scrollTo(e, 'education', 'projects')"
            @touchmove="(e) => touchTo(e, 'education', 'projects')"
        >
            <Experience />
        </section>
        <section
            id="education"
            class="section h-full w-full"
            @wheel="(e) => scrollTo(e, 'contact', 'experience')"
            @touchmove="(e) => touchTo(e, 'contact', 'experience')"
        >
            <Education />
        </section>
        <section
            id="contact"
            class="section h-full w-full"
            @wheel="(e) => scrollTo(e, 'contact', 'education')"
            @touchmove="(e) => touchTo(e, 'contact', 'education')"
        >
            <Contact />
        </section>
    </div>
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <Bar @onNavigateTo="navigateTo" />
    </div>
    <div class="absolute top-5 right-5">
        <LanguageSwitcher />
    </div>
    <div class="absolute bottom-5 right-5">
        <Chatbot />
    </div>
</template>

<script setup lang="ts">
const isScrolling = ref<boolean>(false);
const currentYPosition = ref<number>(0);

function touchTo(event: TouchEvent, nextSection: string, previousSection: string) {
    const newYPosition = event.touches[0].clientY;
    const delta = newYPosition - currentYPosition.value;
    if (delta < 0) {
        navigateTo(nextSection);
    } else {
        navigateTo(previousSection);
    }
    currentYPosition.value = newYPosition;
}

function scrollTo(event: WheelEvent, nextSection: string, previousSection: string) {
    if (isScrolling.value) return;
    isScrolling.value = true;

    let section: string = nextSection;
    const delta = event.deltaY;
    if (delta < 0 && previousSection !== undefined) {
        section = previousSection;
    }
    navigateTo(section);

    setTimeout(() => { isScrolling.value = false; }, 100);
}

function navigateTo(section: string) {
    const targetSection = document.getElementById(section);
    targetSection!.scrollIntoView({ behavior: "smooth" });
}
</script>