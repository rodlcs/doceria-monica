import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Função para adicionar doce ao carrinho
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                // Se já existir, aumenta a quantidade
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // Se for novo, adiciona com quantidade 1
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Função para remover ou diminuir a quantidade
    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === productId);
            if (existingItem.quantity === 1) {
                return prevCart.filter((item) => item.id !== productId);
            }
            return prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    // Limpar o carrinho após finalizar o pedido
    const clearCart = () => setCart([]);

    // Calcular o valor total do carrinho
    const cartTotal = cart.reduce((total, item) => total + item.preco * item.quantity, 0);

    // Contar o total de itens guardados
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);