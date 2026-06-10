export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div>
          <a href="#inicio" className="logo footer-logo">
            Doceria Mônica
          </a>
          <p>
            Sobremesas artesanais criadas para celebrar histórias, encontros e momentos
            inesquecíveis.
          </p>
          <div className="social-list">
            <a href="#contato">Instagram</a>
            <a href="#contato">Facebook</a>
            <a href="#contato">WhatsApp</a>
          </div>
        </div>

        <div>
          <h3>Contato</h3>
          <ul>
            <li>Endereço: personalize com o endereço da loja</li>
            <li>Telefone: personalize com o telefone comercial</li>
            <li>WhatsApp: personalize com o número de atendimento</li>
            <li>E-mail: personalize com o e-mail oficial</li>
          </ul>
        </div>

        <div>
          <h3>Funcionamento</h3>
          <ul>
            <li>Segunda a Sexta: 9h às 19h</li>
            <li>Sábado: 9h às 18h</li>
            <li>Domingo: sob encomenda</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Doceria Mônica. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}