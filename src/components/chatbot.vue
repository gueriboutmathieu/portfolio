<template>
    <div class="h-full w-full flex flex-col items-end">
        <div
            class="h-[calc(100vh*0.75)] w-[calc(100vw*0.3)] bg-darkLight/50 backdrop-blur-md rounded-md shadow-2xl p-5 flex flex-col justify-end mr-2.5 mb-2.5"
            v-if="showChatbot"
        >
            <div class="w-full flex flex-col gap-5 overflow-auto">
                <span class="font-bold text-center text-2xl">
                    {{
                        language === Language.FR
                            ? "Une question à propos de Mathieu ? "
                            : "You have a question about Mathieu ? "
                    }}
                    <br />
                    {{ language === Language.FR ? "Posez-la !" : "Ask for it !" }}
                </span>
                <div class="w-full flex flex-col items-end gap-1" v-if="userQuestion !== ''">
                    <span class="font-bold text-center">
                        {{ language === Language.FR ? "Vous" : "You" }}
                    </span>
                    <p class="px-2.5 py-1 bg-green rounded-md text-dark">{{ userQuestion }}</p>
                </div>
                <div class="w-full flex flex-col items-start gap-1" v-if="chatbotResponse !== null">
                    <span class="font-bold">Chatbot</span>
                    <ContentRenderer
                        class="prose bg-purple rounded-md px-2.5 py-1 text-dark"
                        :value="chatbotResponse"
                    />
                </div>
            </div>
            <div class="w-full flex flex-row gap-5 mt-5 items-center">
                <input
                    type="text"
                    class="h-10 bg-white text-dark flex flex-grow rounded-md border-none shadow-none outline-none p-2.5"
                    v-model="prompt"
                    @keyup.enter="queryChatbot"
                />
                <button
                    @click="queryChatbot"
                    class="h-full rounded-md px-2.5 text-yellow hover:text-dark hover:bg-yellow"
                >
                    <FontAwesomeIcon icon="fa-solid fa-paper-plane" size="xl" />
                </button>
            </div>
        </div>
        <div
            :class="
                'flex flex-row items-center  rounded-md p-2.5 ' +
                (showChatbot ? 'bg-transparent' : 'bg-darkLight/50 shadow-2xl backdrop-blur-md')
            "
        >
            <div v-if="!showChatbot" class="px-2.5">
                <span>
                    {{
                        language === Language.FR
                            ? "Une question à propos de Mathieu ? Posez-la !"
                            : "You have a question about Mathieu ? Ask for it !"
                    }}
                </span>
            </div>
            <button
                id="chatbotButton"
                :class="'rounded-md p-2.5 hover:bg-green hover:text-dark' + (showChatbot ? ' bg-green text-dark' : '')"
                @click="toggleChatbotView"
            >
                <FontAwesomeIcon icon="fa-solid fa-robot" size="2x" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ChatbotService } from "@/services/chatbot";
import type { MainStore } from "@/stores/mainStore";
import { Language } from "@/models/language";

const chatbotService = useNuxtApp().$chatbotService as ChatbotService;
const mainStore = useNuxtApp().$mainStore as MainStore;
const language = computed(() => mainStore.state.language);
const showChatbot = ref<boolean>(false);
const prompt = ref<string>("");
const userQuestion = ref<string>("");
const chatbotResponse = ref<any>(null);

function toggleChatbotView() {
    showChatbot.value = !showChatbot.value;
}

async function queryChatbot() {
    chatbotResponse.value = null;
    const userPrompt = prompt.value;
    userQuestion.value = prompt.value;
    prompt.value = "";
    const rawResponse = await chatbotService.query(userPrompt);
    chatbotResponse.value = await parseMarkdown(rawResponse);
}
</script>
