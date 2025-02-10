import colors from "./src/assets/colors";

export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    srcDir: "src/",
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
    css: [
        "@/assets/css/tailwind.css",
        "@fortawesome/fontawesome-svg-core/styles.css",
    ],
    tailwindcss: {
        exposeConfig: true,
        config: {
            content: ["**/*.vue"],
            theme: {
                extend: {
                    colors: colors,
                },
            },
        },
    },
});
