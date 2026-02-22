import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { acaiRinoMenu } from '../data/acaiRinoMenu';
import { useCart } from '../context/CartContext';

export default function MenuScreen() {
    const [activeCategory, setActiveCategory] = useState('1');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useCart();

    const categories = acaiRinoMenu.map(c => ({ id: c.id, label: c.title }));
    const activeCategoryData = acaiRinoMenu.find(c => c.id === activeCategory);
    const filteredProducts = activeCategoryData ? activeCategoryData.products : [];

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
                {categories.map(cat => (
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        key={cat.id}
                        className={`whitespace-nowrap px-4 py-1.5 rounded-full font-medium text-sm transition-colors ${activeCategory === cat.id
                            ? 'bg-[#6B21A8] text-white shadow-md'
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
                        <ProductCard
                            product={product}
                            onClick={() => setSelectedProduct(product)}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Overlay de Customização (iFood Add-on flow) */}
            <ProductModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onAdd={(itemWithAddons) => {
                    addToCart(itemWithAddons);
                    setSelectedProduct(null);
                }}
            />
        </div>
    );
}
