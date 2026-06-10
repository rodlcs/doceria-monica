import { features } from '../data/products'

export function FeaturesSection() {
  return (
    <section className="section" aria-label="Diferenciais da Doceria Mônica">
      <div className="container">
        <div className="section-heading compact">
          <span className="eyebrow">Diferenciais</span>
          <h2>Excelência pensada para tornar cada pedido especial</h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card glass-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}