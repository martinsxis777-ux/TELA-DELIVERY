import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/logo.png';

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

            <div className="flex-1 flex justify-center py-2 relative">
                <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src={logoImg}
                    alt="Açai Rino"
                    className="h-14 drop-shadow-md rounded-full object-cover bg-white p-0.5"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        document.getElementById('header-text-fallback').style.display = 'block';
                    }}
                />
                <motion.h1
                    id="header-text-fallback"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-black text-2xl tracking-tighter text-white drop-shadow-md italic hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
