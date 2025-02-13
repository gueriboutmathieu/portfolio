import { Mistral } from "@mistralai/mistralai";
import type { MainStore } from "@/stores/mainStore";

export type ChatbotService = {
    query: (prompt: string) => Promise<string>;
};

export function createChatbotService(apiKey: string, model: string, mainStore: MainStore): ChatbotService {
    const client = new Mistral({apiKey: apiKey});
    const _model = model;
    const systemPrompt = computed(function() {
        return mainStore.state.systemPrompt;
    });

    const query = async function(prompt: string): Promise<string> {
        const response = await client.chat.complete({
            model: _model,
            temperature: 0,
            messages: [
                {role: "system", content: systemPrompt.value},
                {role: "user", content: prompt}
            ]
        });
        return response.choices![0].message.content as string;
    };

    return { query };
};
