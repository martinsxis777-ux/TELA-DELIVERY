import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const mockCategories = [
    { id: 'combos', label: 'Combos' },
    { id: 'burgers', label: 'Lanches' },
    { id: 'drinks', label: 'Bebidas' },
    { id: 'desserts', label: 'Sobremesas' }
];

const mockProducts = [
    {
        id: 1,
        category: 'burgers',
        name: 'Big Pai',
        description: 'Dois hambúrgueres, alface, queijo, molho especial, cebola, picles no pão com gergelim.',
        price: 32.90,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 2,
        category: 'burgers',
        name: 'Duplo Cheddar',
        description: 'Dois hambúrgueres de carne bovina, molho cheddar cremoso e cebola caramelizada.',
        price: 28.90,
        image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 3,
        category: 'combos',
        name: 'Combo Big Pai',
        description: 'Big Pai + Frita Média + Refri 500ml',
        price: 45.90,
        image: 'https://images.unsplash.com/photo-1594212586711-d0b80e774fbe?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 4,
        category: 'drinks',
        name: 'Coca-Cola 500ml',
        description: 'Refrigerante Cola.',
        price: 8.90,
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400'
    }
];

export default function MenuScreen() {
    const [activeCategory, setActiveCategory] = useState('combos');

    const filteredProducts = mockProducts.filter(p => p.category === activeCategory);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.95, y: 10 },
        show: { opacity: 1, scale: 1, y: 0 }
    };

    return (
        <div className="flex flex-col flex-1 bg-gray-50 pb-32">
            <div className="flex gap-3 overflow-x-auto p-4 no-scrollbar border-b bg-white sticky top-0 z-40">
                {mockCategories.map(cat => (
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        key={cat.id}
                        className={`whitespace-nowrap px-4 py-1.5 rounded-full font-medium text-sm transition-colors ${activeCategory === cat.id
                                ? 'bg-[#FF2B62] text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 border border-gray-200'
                            }`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.label}
                    </motion.button>
                ))}
            </div>

            <motion.div
                key={activeCategory} // Force re-render animation when category changes
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-3 p-4"
            >
                {filteredProducts.map(product => (
                    <motion.div key={product.id} variants={item}>
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
