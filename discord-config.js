// Configuración centralizada para Discord
export const DISCORD_CONFIG = {
    webhookURL:"https://discord.com/api/webhooks/1439260115575246848/Cwnc3T0fckRQKoEjyIZD4qJzhroC50l4OzomDVoGBFiE16P9m3kNJZWJlYCmJuqmBABs"};

// Función helper para enviar mensajes a Discord
export async function sendToDiscord(payload) {
    try {
        const response = await fetch(DISCORD_CONFIG.webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        return response;
    } catch (error) {
        console.error("Error enviando a Discord:", error);
        throw error;
    }
}