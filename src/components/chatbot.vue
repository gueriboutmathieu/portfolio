<template>
    <div class="flex flex-col items-end gap-5 absolute right-5 max-[350px]:top-16 max-[640px]:top-20 min-[640px]:bottom-5">
        <div
            class="
                h-[75vh] w-[50vw] max-w-screen-md min-w-[30rem] max-[640px]:hidden
                bg-darkLight/50 backdrop-blur-2xl rounded-md shadow-2xl p-5 flex flex-col gap-5 justify-center
            "
            v-if="showChatbot"
        >
            <div class="flex flex-row items-start justify-between">
                <button
                    class="
                        aspect-square bg-dark text-lightBlue rounded-md flex items-center justify-center p-1
                        hover:bg-lightBlue active:bg-lightBlue hover:text-dark active:text-dark
                    "
                    @click="resetChat"
                >
                    <Icon name="bi:trash3-fill" class="max-[350px]:text-2xl min-[350px]:text-3xl" />
                </button>
                <span class="font-bold text-center text-2xl">
                    {{
                        language === Language.FR
                            ? "Une question à propos de Mathieu ? "
                            : "You have a question about Mathieu ? "
                    }}
                    <br />
                    {{ language === Language.FR ? "Posez-lui !" : "Ask him !" }}
                </span>
                <button
                    class="
                        aspect-square bg-dark text-red rounded-md flex items-center justify-center p-1
                        hover:bg-red active:bg-red hover:text-dark active:text-dark
                    "
                    @click="toggleChatbotView"
                >
                    <Icon name="ic:round-close" class="max-[350px]:text-2xl min-[350px]:text-3xl" />
                </button>
            </div>

            <div class="w-full flex flex-col gap-5 overflow-auto grow" ref="messagesContainer">
                <div class="w-full flex flex-col gap-1">
                    <div
                        v-for="chatMessage in chatMessages"
                        class="w-full flex flex-col gap-1"
                        :class="chatMessage.role === 'user' ? 'items-end' : 'items-start'"
                    >
                        <span class="font-bold text-center">
                            {{ chatMessage.role === "user" ? (language === Language.FR ? "Vous" : "You") : "Mathieu" }}
                        </span>
                        <p
                            class="px-2.5 py-1 rounded-md text-dark"
                            :class="chatMessage.role === 'user' ? 'bg-green' : 'bg-purple'"
                        >
                            {{ chatMessage.content }}
                        </p>
                    </div>                    
                </div>
            </div>
            <div class="w-full flex flex-row gap-5 items-center">
                <input
                    type="text"
                    class="h-10 bg-white text-dark flex flex-grow rounded-md border-none shadow-none outline-none p-2.5"
                    v-model="userPrompt"
                    @keyup.enter="queryChatbot"
                />
                <button
                    @click="queryChatbot"
                    class="aspect-square rounded-md p-1 text-yellow hover:text-dark hover:bg-yellow"
                >
                    <Icon name="ic:round-send" class="max-[350px]:text-2xl min-[350px]:text-3xl" />
                </button>
            </div>
        </div>

        <button
            id="chatbotButton"
            class="aspect-square rounded-md p-2.5 bg-darkLight/50 backdrop-blur-3xl shadow-2xl hover:bg-green hover:text-dark"
            :class="showChatbot ? ' bg-green text-dark' : ''"
            @click="toggleChatbotView"
        >
            <Icon name="mage:robot-happy-fill" class="max-[350px]:text-2xl max-[640px]:text-3xl min-[640px]:text-5xl" />
        </button>
    </div>

    <div
        class="
            h-full w-full absolute bottom-0 top-0 left-0 right-0 min-[640px]:hidden
            bg-darkLight/50 backdrop-blur-2xl rounded-md shadow-2xl p-5 flex flex-col gap-5 justify-start
        "
        v-if="showChatbot"
    >
        <div class="flex flex-row items-start justify-between gap-2.5">
            <button
                class="
                    aspect-square bg-dark text-lightBlue rounded-md flex items-center justify-center p-1
                    hover:bg-lightBlue active:bg-lightBlue hover:text-dark active:text-dark
                "
                @click="resetChat"
            >
                <Icon name="bi:trash3-fill" class="max-[350px]:text-2xl min-[350px]:text-3xl" />
            </button>
            <span class="font-bold text-center max-[350px]:text-md max-[640px]:text-xl min-[640px]:text-2xl">
                {{
                    language === Language.FR
                        ? "Une question à propos de Mathieu ? "
                        : "You have a question about Mathieu ? "
                }}
                <br />
                {{ language === Language.FR ? "Posez-lui !" : "Ask him !" }}
            </span>
            <button
                class="
                    aspect-square bg-dark text-red rounded-md flex items-center justify-center p-1
                    hover:bg-red active:bg-red hover:text-dark active:text-dark
                "
                @click="toggleChatbotView"
            >
                <Icon name="ic:round-close" class="max-[350px]:text-2xl min-[350px]:text-3xl" />
            </button>
        </div>

        <div class="w-full flex flex-col grow gap-5 overflow-auto" ref="fullSizeMessagesContainer">
            <div class="w-full flex flex-col gap-1">
                <div
                    v-for="chatMessage in chatMessages"
                    class="w-full flex flex-col gap-1"
                    :class="chatMessage.role === 'user' ? 'items-end' : 'items-start'"
                >
                    <span class="font-bold text-center">
                        {{ chatMessage.role === "user" ? (language === Language.FR ? "Vous" : "You") : "Mathieu" }}
                    </span>
                    <p
                        class="px-2.5 py-1 rounded-md text-dark"
                        :class="chatMessage.role === 'user' ? 'bg-green' : 'bg-purple'"
                    >
                        {{ chatMessage.content }}
                    </p>
                </div>                    
            </div>
        </div>
        <div class="w-full flex flex-row gap-5 items-center">
            <input
                type="text"
                class="bg-white text-dark flex flex-grow rounded-md border-none shadow-none outline-none p-2.5"
                v-model="userPrompt"
                @keyup.enter="queryChatbot"
            />
            <button
                @click="queryChatbot"
                class="aspect-square rounded-md p-1 text-yellow hover:text-dark hover:bg-yellow"
            >
                <Icon name="ic:round-send" class="max-[350px]:text-2xl min-[350px]:text-3xl" />
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
const userPrompt = ref<string>("");
const chatMessages = computed(() => mainStore.state.chatMessages);
const smallMessagesContainer = ref<HTMLElement | null>(null);
const fullSizeMessagesContainer = ref<HTMLElement | null>(null);

function toggleChatbotView() {
    showChatbot.value = !showChatbot.value;
}

function resetChat() {
    mainStore.resetChat();
}

async function queryChatbot() {
    if (userPrompt.value.trim() === "") {
        return;
    }

    const prompt = userPrompt.value;
    userPrompt.value = "";
    await chatbotService.query(prompt);
}

watch(chatMessages, async () => {
    await nextTick();
    if (smallMessagesContainer.value) {
        smallMessagesContainer.value.scrollTop = smallMessagesContainer.value.scrollHeight;
    }
    if (fullSizeMessagesContainer.value) {
        fullSizeMessagesContainer.value.scrollTop = fullSizeMessagesContainer.value.scrollHeight;
    }
}, { immediate: true });
</script>
