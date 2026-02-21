import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Trash2 } from 'lucide-react';

export default function CheckoutScreen({ onBack, onFinalize }) {
    const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
    const [customer, setCustomer] = useState({ name: '', document: '', email: '' });

    const handleCheckout = async (e) => {
        e.preventDefault();
        if (!customer.name || !customer.document) {
            alert('Preencha os dados do cliente');
            return;
        }
        // TO DO: Implement Veopag PIX request here
        onFinalize(customer);
    };

    if (cartItems.length === 0) {
        return (
            <div className="p-4 flex flex-col items-center justify-center gap-4" style={{ height: '50vh' }}>
                <h2 className="font-bold text-red" style={{ fontSize: '1.5rem' }}>Carrinho Vazio</h2>
                <p className="text-secondary text-center">Adicione alguns lanches deliciosos para continuar.</p>
                <button className="bg-yellow p-4 rounded-full font-bold" onClick={onBack}>Voltar ao Menu</button>
            </div>
        );
    }

    return (
        <div className="p-4" style={{ paddingBottom: '120px' }}>
            <h2 className="font-black" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Meu Pedido</h2>

            <div className="flex flex-col gap-4" style={{ marginBottom: '2rem' }}>
                {cartItems.map(item => (
                    <div key={item.id} className="bg-surface p-4 rounded-md flex justify-between items-center shadow-sm">
                        <div className="flex gap-4 items-center">
                            <img src={item.image} alt={item.name} style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover' }} />
                            <div>
                                <h4 className="font-bold">{item.name}</h4>
                                <p className="font-bold text-red">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-background rounded-full p-1 border">
                                <button onClick={() => updateQuantity(item.id, -1)} className="p-1">
                                    <Minus size={16} />
                                </button>
                                <span className="font-bold" style={{ minWidth: 20, textAlign: 'center' }}>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="p-1">
                                    <Plus size={16} />
                                </button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-secondary">
                                <Trash2 size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-surface p-4 rounded-md shadow-sm mb-4">
                <h3 className="font-bold mb-4" style={{ fontSize: '1.2rem' }}>Dados do Cliente</h3>
                <form id="checkout-form" onSubmit={handleCheckout} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        className="p-4 border rounded-md"
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="CPF ou CNPJ (Somente números)"
                        className="p-4 border rounded-md"
                        value={customer.document}
                        onChange={(e) => setCustomer({ ...customer, document: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mail (opcional)"
                        className="p-4 border rounded-md"
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    />
                </form>
            </div>

            <div className="floating-cart-wrapper bg-surface" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="floating-cart-inner">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-secondary">Total do Pedido</span>
                        <span className="font-black text-red" style={{ fontSize: '1.5rem' }}>
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal)}
                        </span>
                    </div>
                    <button form="checkout-form" type="submit" className="bg-yellow w-full p-4 rounded-full font-bold text-primary" style={{ fontSize: '1.2rem' }}>
                        Finalizar c/ PIX
                    </button>
                </div>
            </div>
        </div>
    );
}
