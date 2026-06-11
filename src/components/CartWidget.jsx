import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export function CartWidget() {
    const { cart, removeFromCart, cartTotal, cartCount, clearCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    // Função que monta a mensagem estruturada e abre o link do WhatsApp
    const enviarParaWhatsApp = () => {
        if (cart.length === 0) return;

        let mensagem = `*Novo Pedido - Doceria Mônica*\n\n`;
        
        cart.forEach(item => {
            mensagem += `• ${item.quantity}x ${item.nome} - R$ ${(item.preco * item.quantity).toFixed(2)}\n`;
        });

        mensagem += `\n*Total do Pedido:* R$ ${cartTotal.toFixed(2)}`;

        // Coloque aqui o número da doceria com o DDD (Exemplo fictício abaixo)
        const numeroWhatsapp = "5581996404900"; 
        const link = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;
        
        window.open(link, '_blank');
        clearCart(); 
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
            {/* Botão Redondo */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{ padding: '15px 20px', borderRadius: '50px', backgroundColor: '#e066a2', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', fontWeight: 'bold' }}
            >
                🛒 Carrinho ({cartCount})
            </button>

            {/* Modal Lateral do Carrinho */}
            {isOpen && (
                <div style={{ position: 'absolute', bottom: '70px', right: '0', width: '320px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', padding: '20px', color: '#333' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>Seu Pedido</h3>
                    <hr style={{ border: '0', borderTop: '1px solid #eee', marginBottom: '10px' }} />
                    {cart.length === 0 ? (
                        <p style={{ color: '#777', fontSize: '14px' }}>O carrinho está vazio.</p>
                    ) : (
                        <>
                            <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '15px' }}>
                                {cart.map(item => (
                                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '14px' }}>
                                        <div>
                                            <span style={{ fontWeight: 'bold' }}>{item.quantity}x</span> {item.nome}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <span>R$ ${(item.preco * item.quantity).toFixed(2)}</span>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                style={{ backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '4px', padding: '2px 6px', cursor: 'pointer', fontWeight: 'bold' }}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr style={{ border: '0', borderTop: '1px solid #eee', marginBottom: '10px' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '15px' }}>
                                <span>Total:</span>
                                <span>R$ {cartTotal.toFixed(2)}</span>
                            </div>
                            <button 
                                onClick={enviarParaWhatsApp}
                                style={{ width: '100%', padding: '12px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
                            >
                                ✅ Enviar via WhatsApp
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}