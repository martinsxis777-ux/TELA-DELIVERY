const TELEGRAM_TOKEN = '8428722640:AAF67f39wkPrE2F6NJZmHZjz9yGS102bPas';
// Permite que o CHAT_ID seja lido tanto da env VITE_ quanto da ENV node local mapeada no vite.config.js
const CHAT_ID = import.meta.env.VITE_CHAT_ID || process.env.CHAT_ID || '';

export const notifyTelegram = async (msg) => {
    if (!CHAT_ID) {
        console.warn("[Telegram] CHAT_ID não definido. Notificação ignorada.");
        return;
    }

    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: msg
            })
        });
        console.log(`[Telegram] Mensagem enviada: ${msg}`);
    } catch (error) {
        console.error("[Telegram] Falha ao enviar mensagem:", error);
    }
};
