import { useState, useEffect } from 'react';
import { authenticateVeopag, createPixDeposit } from '../services/veopag';
import { CheckCircle2, Copy } from 'lucide-react';
import QRCode from 'react-qr-code';

export default function PixPaymentScreen({ cartTotal, customer, onReset }) {
    const [loading, setLoading] = useState(true);
    const [qrCodeData, setQrCodeData] = useState(null);
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        async function generatePix() {
            try {
                const token = await authenticateVeopag();
                const response = await createPixDeposit(token, cartTotal, customer);
                setQrCodeData(response);
            } catch (err) {
                console.error(err);
                setError('Ocorreu um erro ao gerar o PIX. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        }
        generatePix();
    }, [cartTotal, customer]);

    const handleCopy = () => {
        if (qrCodeData?.qrcode) {
            navigator.clipboard.writeText(qrCodeData.qrcode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (loading) {
        return (
            <div className="p-4 flex flex-col items-center justify-center p-8 text-center" style={{ minHeight: '60vh' }}>
                <div className="loader" style={{ width: 40, height: 40, border: '4px solid var(--color-border)', borderTopColor: 'var(--color-red)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1rem' }}></div>
                <h3 className="font-bold">Gerando PIX...</h3>
                <p className="text-secondary">Aguarde um momento enquanto preparamos seu pagamento.</p>
                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
                <div className="text-red mx-auto"><CheckCircle2 size={48} /></div>
                <h3 className="font-bold">Uh oh!</h3>
                <p className="text-secondary">{error}</p>
                <button className="bg-yellow p-4 rounded-full font-bold" onClick={onReset}>Voltar ao Início</button>
            </div>
        );
    }

    return (
        <div className="p-4 flex flex-col items-center text-center gap-4 py-8">
            <CheckCircle2 color="var(--color-yellow)" size={64} />
            <h2 className="font-black text-red" style={{ fontSize: '1.8rem' }}>Pedido Recebido!</h2>
            <p>Pague <strong>R$ {cartTotal.toFixed(2).replace('.', ',')}</strong> com PIX para a cozinha começar a preparar seu pedido.</p>

            {qrCodeData?.qrcode && (
                <div className="bg-surface p-4 rounded-md shadow-sm w-full mt-4 flex flex-col items-center">
                    <p className="font-bold text-secondary mb-4">Pague via Qr Code</p>

                    {/* Render using react-qr-code if it's a payload string, else try image tag */}
                    {qrCodeData.qrcode.startsWith('000201') || qrCodeData.qrcode.length < 500 ? (
                        <QRCode value={qrCodeData.qrcode} size={200} />
                    ) : (
                        <img
                            src={qrCodeData.qrcode.includes('data:image') ? qrCodeData.qrcode : `data:image/png;base64,${qrCodeData.qrcode}`}
                            alt="PIX QR Code"
                            style={{ width: 200, height: 200, display: 'block' }}
                        />
                    )}

                    <div className="mt-6 w-full text-center">
                        <p className="font-bold text-secondary mb-2">Pix Copia e Cola</p>

                        {/* Código removido conforme pedido do usuário para não exibir a string na tela */}

                        <button
                            onClick={handleCopy}
                            className="flex items-center justify-center gap-2 w-full p-4 border rounded-md font-bold text-primary active:bg-gray-100"
                            style={{ backgroundColor: copied ? '#4CAF50' : 'var(--color-surface)', color: copied ? 'white' : 'var(--color-text-primary)' }}
                        >
                            <Copy size={20} color={copied ? 'white' : 'var(--color-text-primary)'} />
                            {copied ? 'Copiado!' : 'Copiar Código PIX'}
                        </button>
                    </div>
                </div>
            )}

            <button className="text-red font-bold mt-8" onClick={onReset}>Concluir e Voltar ao Início</button>
        </div>
    );
}
