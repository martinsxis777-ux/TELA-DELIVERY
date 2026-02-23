import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    // Static available coupons for the R$ 100 welcome splash
    const availableCoupons = [
        { code: 'BEMVINDO30', title: '30% OFF', description: 'Até R$ 15 de desconto', type: 'percent', value: 30, maxDiscount: 15 },
        { code: 'BEMVINDO60', title: '60% OFF', description: 'Até R$ 90 de desconto, min. R$ 150', type: 'percent', value: 60, maxDiscount: 90, minOrder: 150 },
        { code: 'RINO25', title: 'R$ 25 OFF', description: 'Em pedidos acima de R$ 80', type: 'fixed', value: 25, minOrder: 80 },
        { code: 'RINO20', title: 'R$ 20 OFF', description: 'Em pedidos acima de R$ 60', type: 'fixed', value: 20, minOrder: 60 }
    ];

    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        toast.success(`${product.name} adicionado ao carrinho`, { duration: 2000 });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
        toast.info("Item removido do carrinho", { duration: 2000 });
    };

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(0, item.quantity + delta);
                return newQuantity === 0 ? null : { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(Boolean));
    };

    const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const applyCoupon = (code) => {
        const c = code.toUpperCase();
        const found = availableCoupons.find(coupon => coupon.code === c);

        if (found) {
            if (found.minOrder && cartTotal < found.minOrder) {
                toast.error(`Valor mínimo para este cupom é R$ ${found.minOrder.toFixed(2)}`, { duration: 2000 });
                return false;
            }
            setAppliedCoupon(found);
            toast.success("Cupom aplicado com sucesso!", { duration: 2000 });
            return true;
        }

        // Keep legacy text coupons working just in case
        if (c === 'PRIMEIRA50') {
            setAppliedCoupon({ code: c, type: 'percent', value: 50, maxDiscount: 50 });
            toast.success("Cupom de 50% aplicado!", { duration: 2000 });
            return true;
        }

        toast.error("Cupom inválido ou expirado", { duration: 2000 });
        return false;
    };

    const removeCoupon = () => {
        setAppliedCoupon(null);
        toast.info("Cupom removido", { duration: 2000 });
    };

    let discountAmount = 0;
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percent') {
            const calculated = cartTotal * (appliedCoupon.value / 100);
            discountAmount = appliedCoupon.maxDiscount ? Math.min(calculated, appliedCoupon.maxDiscount) : calculated;
        } else if (appliedCoupon.type === 'fixed') {
            discountAmount = Math.min(cartTotal, appliedCoupon.value);
        }
    }

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartTotal,
            cartCount,
            isCartOpen,
            setIsCartOpen,
            clearCart,
            appliedCoupon,
            applyCoupon,
            removeCoupon,
            discountAmount,
            availableCoupons
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
