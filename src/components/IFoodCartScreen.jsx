import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IFoodCartScreen() {
    const navigate = useNavigate();
    const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

    const handleFinish = () => {
        if (cartCount > 0) {
            navigate('/delivery');
        }
    };

    return (
        <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col min-h-screen bg-gray-50 pb-24 font-sans"
        >
            {/* Header Fixo */}
            <header className="sticky top-0 z-50 bg-white shadow-sm flex items-center justify-between p-4 mb-2">
                <button onClick={() => navigate(-1)} className="p-1 text-red-500 rounded-full active:bg-gray-100 transition-colors">
                    <ArrowLeft size={24} />
                </button>
                <div className="flex-1 flex justify-center items-center gap-2">
                    <h1 className="font-bold text-gray-800 text-lg">Carrinho</h1>
                    {cartCount > 0 && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>
                <div style={{ width: 32 }}></div> {/* Espaçador para centralizar */}
            </header>

            {/* Lista de Itens */}
            <div className="flex-1 bg-white p-4">
                {cartItems.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">
                        <p>Seu carrinho está vazio.</p>
                    </div>
                ) : (
                    <div className="flex flex-col divide-y">
                        {cartItems.map(item => (
                            <div key={item.id} className="py-4 flex gap-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-gray-800 font-medium text-sm">{item.name}</h3>
                                        <p className="font-bold text-gray-900 mt-1 flex justify-between items-center">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                                        </p>
                                    </div>

                                    {/* Stepper (+ / -) iFood Style */}
                                    <div className="flex items-center gap-4 mt-2 self-start">
                                        <div className="flex items-center bg-gray-50 rounded-lg p-1 border">
                                            {item.quantity === 1 ? (
                                                <motion.button whileTap={{ scale: 0.8 }} onClick={() => removeFromCart(item.id)} className="w-8 h-8 flex items-center justify-center text-red-500"><Trash2 size={16} /></motion.button>
                                            ) : (
                                                <motion.button whileTap={{ scale: 0.8 }} onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-red-500"><Minus size={16} /></motion.button>
                                            )}

                                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>

                                            <motion.button whileTap={{ scale: 0.8 }} onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-red-500"><Plus size={16} /></motion.button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Info Taxa de Entrega (Regra R$ 25) */}
            {cartTotal < 25 && cartCount > 0 && (
                <div className="bg-gray-100 p-4 text-center">
                    <p className="text-xs text-gray-500 font-medium">Taxa de entrega grátis acima de R$ 25</p>
                </div>
            )}

            {/* Rodapé Fixo (Tamanho iFood) */}
            <div className="fixed bottom-0 w-full max-w-md bg-white border-t p-4 z-50">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600 font-medium text-sm">Total</span>
                    <span className="text-gray-900 font-bold text-lg">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal)}
                    </span>
                </div>
                <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={handleFinish}
                    disabled={cartCount === 0}
                    className="w-full bg-[#FF2B62] text-white font-bold py-3.5 rounded-md disabled:opacity-50 active:bg-ifood-dark transition-colors"
                >
                    FINALIZAR PEDIDO
                </motion.button>
            </div>

        </motion.div>
    );
}
