import { OpenAI } from "openai";
import type { MainStore } from "@/stores/mainStore";

export type ChatbotService = {
    query: (prompt: string) => Promise<void>;
};

export function createChatbotService(apiKey: string, model: string, mainStore: MainStore): ChatbotService {
    const client = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
    const _model = model;
    const systemPrompt = computed(function () {
        return mainStore.state.systemPrompt;
    });

    const query = async function (prompt: string): Promise<void> {
        mainStore.addChatMessage({ role: "user", content: prompt });

        const chatMessages = mainStore.state.chatMessages;

        const response = await client.chat.completions.create({
            model: _model,
            temperature: 0,
            messages: [
                { role: "system", content: systemPrompt.value },
                ...chatMessages,
            ],
        });
        
        mainStore.addChatMessage({ role: "assistant", content: response.choices[0].message.content as string });
    };

    return { query };
}
