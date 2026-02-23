import { ArrowLeft, Instagram, Info, MapPin, Star, Bike, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function Header({ onViewChange, currentView }) {
    return (
        <div className="bg-gray-50 flex flex-col mb-2 relative">
            {/* Capa / Background Superior (Pode ser uma cor sólida roxa ou uma imagem de açaí) */}
            <div className="h-32 bg-gradient-to-r from-purple-800 to-purple-600 w-full relative">
                {currentView === 'checkout' && (
                    <button
                        className="absolute top-4 left-4 z-50 flex items-center gap-2 bg-black/20 hover:bg-black/30 backdrop-blur px-3 py-1.5 rounded-full transition-colors"
                        onClick={() => onViewChange('menu')}
                    >
                        <ArrowLeft color="white" size={20} />
                        <span className="font-bold text-white text-sm">Voltar</span>
                    </button>
                )}
            </div>

            {/* Container Branco com as Informações da Loja */}
            <div className="bg-white rounded-t-[2rem] -mt-6 pt-12 pb-4 px-4 flex flex-col items-center shadow-sm relative z-10">

                {/* Logo Centralizada sobrepondo a borda */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 rounded-full p-1 bg-white shadow-md">
                    <img
                        src={logoImg}
                        alt="Açai Rino"
                        className="w-24 h-24 rounded-full object-cover border-4 border-purple-800"
                    />
                </div>

                <h1 className="text-2xl font-black text-purple-900 mt-2 tracking-tight">Açai Rino Delivery</h1>

                {/* Botões Sociais e de Informação */}
                <div className="flex gap-3 mt-3 mb-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-purple-200 text-purple-700 flex items-center justify-center hover:bg-purple-50 transition-colors">
                        <Instagram size={20} />
                    </a>
                    <button className="w-10 h-10 rounded-full border border-purple-200 text-purple-700 flex items-center justify-center hover:bg-purple-50 transition-colors">
                        <Info size={20} />
                    </button>
                </div>

                {/* Grid de Informações de Entrega */}
                <div className="w-full max-w-sm flex flex-col gap-2 text-sm text-gray-600 font-medium">
                    {/* Linha 1: Pedido Mínimo e Tempo */}
                    <div className="flex items-center justify-center gap-4">
                        <span className="flex items-center gap-1.5"><Wallet size={16} className="text-gray-400" /> Pedido Mín r$ 10,00</span>
                        <span className="text-gray-300">•</span>
                        <span className="flex items-center gap-1.5 text-blue-600 font-bold border border-blue-200 rounded-full px-2 py-0.5 bg-blue-50">
                            <Bike size={16} /> 30-50 min <span className="text-green-600">Grátis</span>
                        </span>
                    </div>

                    {/* Linha 2: Localização */}
                    <div className="flex items-center justify-center gap-1.5">
                        <MapPin size={16} className="text-gray-400" />
                        <span>São José do Rio Preto - SP <span className="text-gray-400">•</span> <span className="text-blue-600 underline decoration-blue-300 underline-offset-2">1,6km de você</span></span>
                    </div>

                    {/* Linha 3: Avaliação */}
                    <div className="flex items-center justify-center mt-1">
                        <span className="flex items-center gap-1 font-bold text-gray-800 bg-gray-50 border px-3 py-1 rounded-full">
                            <Star size={16} className="text-yellow-400 fill-yellow-400" /> 4,9
                            <span className="text-gray-400 font-normal ml-1">(2.136 avaliações)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
