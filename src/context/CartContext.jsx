import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [appliedCoupon, setAppliedCoupon] = useState(null);

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
        if (c === 'PRIMEIRA50') {
            setAppliedCoupon({ code: c, type: 'percent', value: 50 });
            toast.success("Cupom de 50% aplicado!", { duration: 2000 });
            return true;
        } else if (c === 'RINO10' || c === 'RINO20' || c === 'RINO30') {
            const val = parseInt(c.replace('RINO', ''));
            setAppliedCoupon({ code: c, type: 'fixed', value: val });
            toast.success(`Cupom de R$ ${val} aplicado!`, { duration: 2000 });
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
            discountAmount = cartTotal * (appliedCoupon.value / 100);
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
            discountAmount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
