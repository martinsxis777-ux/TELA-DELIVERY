import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const mockCategories = [
    { id: '1', label: 'Os mais pedidos' },
    { id: '2', label: 'Novidade na casa' },
    { id: '3', label: 'Lanches tradicional' },
    { id: '4', label: 'Lanches artesanal' },
    { id: '5', label: 'Porção' },
    { id: '6', label: 'Refrigerante' }
];

// Funcao auxiliar para converter string de brl para numero float
const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^\d,-]/g, '').replace(',', '.'));
}

const mockProducts = [
    // Os mais pedidos
    {
        id: 'p1', category: '1', name: 'Combo casal x-tudo 2 lanche 1 porção de batata frita',
        description: 'no Vai 1 burguer bacon mussarela presunto ovo milho cheddar alface tomate 1 porção de batata frita com cheddar e bacon',
        price: parsePrice('R$ 56,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1744838035504blob'
    },
    {
        id: 'p2', category: '1', name: 'Xereta 2l',
        description: 'Xereta maçã ou Guaraná',
        price: parsePrice('R$ 10,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1718841383626blob'
    },
    {
        id: 'p3', category: '1', name: 'X-burguer',
        description: '1 hambúrguer, presunto e mussarela no pão de hambúrguer',
        price: parsePrice('R$ 14,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1765596664771blob'
    },

    // Novidade na casa
    {
        id: 'p4', category: '2', name: 'Coalho burguer',
        description: 'Nessa delícia vai 1 burguer de 160g 100 gramas de queijo coalho queijo cheddar bacon e mel no pao de brioche',
        price: parsePrice('R$ 29,99'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1758305487673blob'
    },
    {
        id: 'p5', category: '2', name: 'Burgueritos',
        description: 'Burgueritos vai 1 burguer de 160gr, bacon, queijo cheddar, doritos e maionese verde no pao de brioche',
        price: parsePrice('R$ 26,99'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1760124519032blob'
    },
    {
        id: 'p6', category: '2', name: 'Smash bacon',
        description: 'No smash bacon vai 1 burguer de 90gr, queijo cheddar, bacon e maionese verde no pao de brioche',
        price: parsePrice('R$ 17,99'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1761675948977blob'
    },

    // Lanches tradicional
    {
        id: 'p7', category: '3', name: 'X- bacon',
        description: '1 hambúrguer, presunto e mussarela, bacon alface tomate no pão de hambúrguer',
        price: parsePrice('R$ 22,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1765596787361blob'
    },
    {
        id: 'p8', category: '3', name: 'X-salada',
        description: '1 hambúrguer, presunto e mussarela, alface tomate no pão de hambúrguer',
        price: parsePrice('R$ 17,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1765596731788blob'
    },
    {
        id: 'p9', category: '3', name: 'X-tudo',
        description: '1 hambúrguer, presunto e mussarela, bacon, ovo molho cheddar, milho alface e tomate no pão de hambúrguer',
        price: parsePrice('R$ 24,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1744838925557blob'
    },
    {
        id: 'p10', category: '3', name: 'X- egg',
        description: '1 hambúrguer, presunto e mussarela, ovo, alface tomate no pão de hambúrguer',
        price: parsePrice('R$ 18,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1765596766019blob'
    },
    {
        id: 'p11', category: '3', name: 'X-INFARTO',
        description: 'No lanche vai 3 hamburguer mussarela presunto milho cheddar bacon creme chess 1 ovo alface e tomate',
        price: parsePrice('R$ 36,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1744838889764blob'
    },

    // Lanches artesanal
    {
        id: 'p12', category: '4', name: 'catupireza burguer',
        description: 'hamburguer de 160 gramas catupiry empanado mussarela bacon e creme chess no pao de brioche',
        price: parsePrice('R$ 33,99'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1765596819216blob'
    },
    {
        id: 'p13', category: '4', name: 'tudo pai',
        description: 'vai 1 hamburguer de 160 gramas mussarela bacon ovo alface tomate e cebola roxa no pao de brioche',
        price: parsePrice('R$ 29,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1755118335993blob'
    },
    {
        id: 'p14', category: '4', name: 'Cebolinha pai',
        description: 'hambúrguer de 160 gramas, mussarela derretida, bacon crocante, Onion Rings e catchup no pão macio',
        price: parsePrice('R$ 28,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1718840795171blob'
    },
    {
        id: 'p15', category: '4', name: 'duplo queijo',
        description: 'vai 2 hamburguer de 160gramas creme chess e cheddar bacon e cebola roxa no pao de brioche',
        price: parsePrice('R$ 37,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1744838989383blob'
    },

    // Porção
    {
        id: 'p16', category: '5', name: '1 porção de batata frita Porção pequena serve 2 pessoa',
        description: '1 porção de batata frita com cheddar e bacon aproximadamente 250 a 300 grama',
        price: parsePrice('R$ 12,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/202306050114_vo9w_'
    },
    {
        id: 'p17', category: '5', name: 'Porção mista na caixa',
        description: '10 anéis de cebola, 10 chicken seara supremo, Batata fritas com cheddar e bacon',
        price: parsePrice('R$ 39,99'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1730668756538blob'
    },

    // Refrigerante
    {
        id: 'p18', category: '6', name: 'Coca lata',
        description: 'cola lata gelada',
        price: parsePrice('R$ 8,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1718841530467blob'
    },
    {
        id: 'p19', category: '6', name: 'coca coca 2 litros',
        description: 'coca gelada',
        price: parsePrice('R$ 15,00'), image: 'https://client-assets.anota.ai/produtos/64977445df9d9c0012600bca/-1718843516064blob'
    }
];

export default function MenuScreen() {
    const [activeCategory, setActiveCategory] = useState('1');

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
