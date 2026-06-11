import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

// Componente do Card de Produto Ajustado
function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card glass-card">
      <div className="product-image-wrapper">
        <img src={product.imagem} alt={product.nome} className="product-image" />
      </div>
      <div className="product-content">
        <div className="product-header">
          <h3>{product.nome}</h3>
          {/* Formatando o preço dinamicamente para Real */}
          <span className="product-price">
            {Number(product.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <p>{product.descricao}</p>
        
        {/* Ativando a função de clique para salvar no carrinho! */}
        <button 
          className="btn btn-primary product-button"
          onClick={() => addToCart(product)}
        >
          Adicionar ao Pedido
        </button>
      </div>
    </article>
  )
}

export function MenuSection() {
  const [listaProdutos, setListaProdutos] = useState([]);

  // Busca os produtos direto do nosso servidor SQLite (Porta 3001)
  useEffect(() => {
    fetch('http://localhost:3001/api/produtos')
      .then((res) => res.json())
      .then((data) => setListaProdutos(data))
      .catch((err) => console.error("Erro ao buscar doces do banco:", err));
  }, []);

  return (
    <section className="section" id="cardapio">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Cardápio</span>
          <h2>Seleção especial para adoçar os seus melhores momentos</h2>
          <p>
            Um cardápio pensado para unir sofisticação, sabor e apresentação impecável.
          </p>
        </div>

        <div className="product-grid">
          {/* Renderiza a lista vinda direto do banco de dados */}
          {listaProdutos.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}