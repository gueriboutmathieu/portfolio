import type { MainStore } from "@/stores/mainStore";

export type ChatbotService = {
    init: () => Promise<void>;
    query: (prompt: string) => Promise<void>;
};

export function createChatbotService(baseUrl: string, publicKey: string, model: string, mainStore: MainStore): ChatbotService {
    const _baseUrl = baseUrl;
    const _headers: Record<string, any> = { "Content-Type": "application/json" };
    const _model = model;
    const systemPrompt = computed(() => mainStore.state.systemPrompt);

    const init = async function (): Promise<void> {
        const url = new URL(`${_baseUrl}/auth/signin`);
        url.searchParams.append("username", "portfolio");
        url.searchParams.append("public_key", publicKey);

        const response = await fetch(url, { method: "POST" });

        if (response.status === 200) {
            const body = await response.json();
            const accessToken = body.access_token;
            _headers["Authorization"] = `Bearer ${accessToken}`;
        }
        else {
            throw new Error(`Failed to initialize chatbot service, error : ${await response.json()}`);
        }
    }

    const query = async function (prompt: string): Promise<void> {
        mainStore.addChatMessage({ role: "user", content: prompt });

        const url = new URL(`${_baseUrl}/query`);
        url.searchParams.append("model", _model);
        url.searchParams.append("temperature", "0");

        const chatMessages = mainStore.state.chatMessages;
        const body = JSON.stringify([{ role: "system", content: systemPrompt.value }, ...chatMessages]);

        const response = await fetch(
            url,
            { method: "POST", headers: _headers, body: body }
        );
        const responseBody = await response.json();

        mainStore.addChatMessage(responseBody);
    };

    return { init, query };
}
