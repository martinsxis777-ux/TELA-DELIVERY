import express from 'express';
// Servidor Express ultra-leve para receber webhooks do banco (ex: Veopag) e notificar o Telegram
// Deve ser rodado com: node webhook.js

const app = express();
app.use(express.json());

const TELEGRAM_TOKEN = '8428722640:AAF67f39wkPrE2F6NJZmHZjz9yGS102bPas';
const CHAT_ID = process.env.CHAT_ID || ''; // Lera o export CHAT_ID=... no terminal

const notifyTelegram = async (msg) => {
    if (!CHAT_ID) {
        console.warn("[Webhook Telegram] CHAT_ID não exportado no terminal.");
        return;
    }

    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
        // Usamos fetch nativo (suportado no Node 18+)
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
        console.log(`[Webhook Telegram] Mensagem enviada: ${msg}`);
    } catch (error) {
        console.error("[Webhook Telegram] Erro HTTP:", error);
    }
};

// Quando o webhook do banco (ex: /pix/callback) confirmar o pagamento
app.post('/pix/callback', async (req, res) => {
    console.log("[Webhook] Recebeu callback de pagamento PIX:", req.body);

    // Supondo a logica padrao, onde status === 'CONCLUIDA' reflete pix pago.
    // Adapte o if se o payload do banco for diferente.
    // if (req.body.status === 'CONCLUIDA') { ... }

    // Independentemente do payload exato pra este mock, disparamos a notificação "Pix caiu"
    // Adicione a logica de updatePixPaid() no backend/firebase real se existir
    await notifyTelegram("Pix acabou de cair no manguito!!");

    res.status(200).json({ received: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n================================`);
    console.log(`📡 Webhook Server online!`);
    console.log(`🚪 Porta: ${PORT}`);
    console.log(`🔗 Ngrok: Execute 'ngrok http ${PORT}' em outro terminal`);
    console.log(`================================\n`);
    if (!CHAT_ID) {
        console.log("⚠️ AVISO: A variável de ambiente CHAT_ID não foi identificada.");
        console.log("👉 Por favor pare o servidor e rode: export CHAT_ID=seu_id && node webhook.js");
    }
});
