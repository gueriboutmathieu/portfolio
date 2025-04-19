<template>
    <div class="h-full w-full bg-dark z-0">
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
    <div class="absolute bottom-5 left-5 right-5 flex items-center justify-center">
        <div>
            <Bar @onNavigateTo="navigateTo" />
        </div>
    </div>
    <div class="absolute top-5 left-5">
        <DownloadResumeButton />
    </div>
    <div class="absolute top-5 right-5">
        <LanguageSwitcher />
    </div>
    <!-- <div class="absolute bottom-5 right-5">
        <Chatbot />
    </div> -->
</template>

<script setup lang="ts">
definePageMeta({ path: "/" });

const isScrolling = ref<boolean>(false);
const currentYPosition = ref<number>(0);
const currentSection = ref<string>("home");
const sections = ["home", "bio", "skills", "projects", "experience", "education", "contact"];

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
    currentSection.value = section;
    navigateTo(section);

    setTimeout(() => {
        isScrolling.value = false;
    }, 100);
}

function navigateTo(section: string) {
    const targetSection = document.getElementById(section);
    targetSection!.scrollIntoView({ behavior: "smooth" });
}

onMounted(() => window.addEventListener("keydown", handleKey));

onBeforeUnmount(() => window.removeEventListener("keydown", handleKey));

function handleKey(event: KeyboardEvent) {
    const currentIndex = sections.indexOf(currentSection.value);

    if (event.key === "ArrowDown") {
        if (currentIndex === sections.length - 1) return;
        currentSection.value = sections[currentIndex + 1];
        navigateTo(sections[currentIndex + 1]);
    } else if (event.key === "ArrowUp") {
        if (currentIndex === 0) return;
        currentSection.value = sections[currentIndex - 1];
        navigateTo(sections[currentIndex - 1]);
    }
}
</script>
