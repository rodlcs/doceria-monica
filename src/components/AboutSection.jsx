export function AboutSection() {
  return (
    <section className="section section-soft" id="sobre">
      <div className="container about-grid">
        <div className="about-image-panel glass-card">
          <img
            src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=1200&q=80"
            alt="Confeitaria artesanal preparando doces"
          />
        </div>

        <div className="about-content">
          <span className="eyebrow">Sobre a marca</span>
          <h2>Carinho, delicadeza e excelência em cada receita</h2>
          <p>
            A Doceria Mônica nasceu da paixão por transformar ingredientes especiais em
            experiências afetivas. Nossa história é feita de celebrações, encontros e sabores
            que marcam momentos importantes.
          </p>
          <p>
            Trabalhamos com ingredientes de alta qualidade, produção artesanal e atenção aos
            mínimos detalhes para entregar sobremesas com sabor memorável e apresentação
            encantadora.
          </p>
          <div className="about-highlights">
            <div>
              <strong>Receitas exclusivas</strong>
              <span>Combinações autorais com acabamento premium.</span>
            </div>
            <div>
              <strong>Qualidade sem concessões</strong>
              <span>Seleção cuidadosa de insumos para garantir frescor e sabor.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}