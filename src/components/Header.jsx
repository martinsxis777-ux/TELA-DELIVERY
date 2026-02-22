import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Header({ onViewChange, currentView }) {
    const { cartCount } = useCart();

    return (
        <header className="app-header flex items-center justify-between shadow-md z-50">
            <div className="flex-1 flex justify-start">
                {currentView === 'checkout' && (
                    <button className="flex items-center gap-2" onClick={() => onViewChange('menu')}>
                        <ArrowLeft color="white" size={24} />
                        <span className="font-bold text-white">Voltar</span>
                    </button>
                )}
            </div>

            <div className="flex-1 flex justify-center py-3">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-black text-2xl tracking-tighter text-white drop-shadow-md italic"
                >
                    Açai Rino
                </motion.h1>
            </div>

            <div className="flex-1 flex justify-end">
                {/* O carrinho agora é gerenciado pelo CartSheet, espaço reservado */}
            </div>
        </header>
    );
}
