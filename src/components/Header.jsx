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

            <div className="flex-1 flex justify-center py-2">
                <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src="/assets/logo.png"
                    alt="Hamburgueria do Pai Logo"
                    className="h-16 w-auto object-contain drop-shadow-md rounded-full bg-white p-1"
                />
            </div>

            <div className="flex-1 flex justify-end">
                {/* O carrinho agora é gerenciado pelo CartSheet, espaço reservado */}
            </div>
        </header>
    );
}
