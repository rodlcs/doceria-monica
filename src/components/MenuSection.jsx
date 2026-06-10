import { products } from '../data/products'

function ProductCard({ product }) {
  return (
    <article className="product-card glass-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-content">
        <div className="product-header">
          <h3>{product.name}</h3>
          <span>{product.price}</span>
        </div>
        <p>{product.description}</p>
        <button className="btn btn-primary product-button">Adicionar ao Pedido</button>
      </div>
    </article>
  )
}

export function MenuSection() {
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}