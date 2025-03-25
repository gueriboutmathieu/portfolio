import colors from "./src/assets/colors";

export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    srcDir: "src/",
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
    css: ["@/assets/css/tailwind.css", "@/assets/css/fonts.css", "@fortawesome/fontawesome-svg-core/styles.css"],
    tailwindcss: {
        exposeConfig: true,
        config: {
            content: ["*.vue"],
            theme: {
                extend: {
                    colors: colors,
                },
            },
        },
    },
    runtimeConfig: {
        public: {
            mistral: {
                apiKey: process.env.MISTRAL_API_KEY,
                model: process.env.MISTRA_MODEL,
            },
        },
    },
});
