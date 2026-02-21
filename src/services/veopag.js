const API_BASE = 'https://api.veopag.com';

/**
 * Authenticate with Veopag
 * @returns {Promise<string>} Bearer token
 */
export async function authenticateVeopag() {
    const clientId = import.meta.env.VITE_VEOPAG_CLIENT_ID || 'your_client_id';
    const clientSecret = import.meta.env.VITE_VEOPAG_CLIENT_SECRET || 'your_client_secret';

    const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret
        })
    });

    if (!response.ok) {
        throw new Error('Falha na autenticação Veopag');
    }

    const data = await response.json();
    return data.token;
}

/**
 * Create Deposit PIX
 */
export async function createPixDeposit(token, amount, customer) {
    const externalId = 'ORDER_' + new Date().getTime();

    const payload = {
        amount: amount,
        external_id: externalId,
        clientCallbackUrl: "https://hamburgueriadopai.com/callback",
        payer: {
            name: customer.name,
            email: customer.email || "cliente@hamburgueriadopai.com",
            document: customer.document.replace(/\D/g, '') // remove symbols from CPF/CNPJ
        }
        // We omit split unless requested
    };

    const response = await fetch(`${API_BASE}/api/payments/deposit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error('Falha ao gerar o PIX');
    }

    const data = await response.json();
    return data.qrCodeResponse;
}
