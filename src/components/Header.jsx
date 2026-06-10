import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setIsOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="header-shell">
      <div className="container header">
        <a href="#inicio" className="logo" aria-label="Doceria Mônica - Página inicial">
          Doceria Mônica
        </a>

        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contato" className="nav-cta" onClick={() => setIsOpen(false)}>
            Pedir Agora
          </a>
        </nav>

        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}