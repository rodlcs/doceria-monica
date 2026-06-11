export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div>
          <a href="#inicio" className="logo footer-logo">
            Artesanal Mônica
          </a>
          <p>
            Sobremesas artesanais criadas para celebrar histórias, encontros e momentos
            inesquecíveis.
          </p>
          <div className="social-list">
            <a href="https://www.instagram.com/artesanalmonica" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://wa.me/5581996404900" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3>Contato</h3>
          <ul>
            <li>Endereço: aldeia camaragibe</li>
            <li>WhatsApp: (81) 99640-4900</li>
            <li>Instagram: @artesanalmonica</li>
            <li>E-mail: monicaferreirao164@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3>Funcionamento</h3>
          <ul>
            <li>Segunda a Sexta: 9h às 19h</li>
            <li>Sábado: 9h às 18h</li>
            <li>Domingo: sob encomenda</li>
            <li>Feriados: sob encomenda</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Artesanal Mônica. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}