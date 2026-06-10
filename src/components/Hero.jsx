export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-badge glass-card">Experiência premium em confeitaria artesanal</div>
        <h1>Doces que transformam momentos em memórias inesquecíveis</h1>
        <p>
          Bolos, tortas, brigadeiros gourmet e sobremesas artesanais feitos com carinho.
        </p>
        <div className="hero-actions">
          <a href="#cardapio" className="btn btn-primary">
            Ver Cardápio
          </a>
          <a href="#contato" className="btn btn-secondary">
            Fazer Pedido
          </a>
        </div>
      </div>
    </section>
  )
}