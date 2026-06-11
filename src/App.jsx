import React, { useState } from 'react' // 1. Importamos o useState
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { AboutSection } from './components/AboutSection'
import { FeaturesSection } from './components/FeaturesSection'
import { Footer } from './components/Footer'
import { CartProvider } from './context/CartContext'
import { CartWidget } from './components/CartWidget'
import { AdminPanel } from './components/AdminPanel'

function App() {
  // 2. Criamos o estado que controla a visibilidade do painel (começa false = escondido)
  const [mostrarAdmin, setMostrarAdmin] = useState(false)

  return (
    <CartProvider>
      <>
        <Header />
        <main>
          <Hero />
          <MenuSection />
          <AboutSection />
          <FeaturesSection />
          
          {/* 3. O painel só será renderizado se 'mostrarAdmin' for verdadeiro */}
          {mostrarAdmin && <AdminPanel />}
        </main>
        
        <Footer />
        <CartWidget />

        {/* 4. Botão "Secreto" no rodapé da página para alternar o painel */}
        <div style={{ textAlign: 'center', padding: '10px', backgroundColor: '#fcf8f9' }}>
          <button 
            onClick={() => setMostrarAdmin(!mostrarAdmin)}
            style={{
              background: 'none',
              border: 'none',
              color: '#bbb', // Cor bem clarinha para passar batido pelos clientes
              fontSize: '11px',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {mostrarAdmin ? '🔒 Fechar Painel Restrito' : '⚙️ Acesso Restrito'}
          </button>
        </div>
      </>
    </CartProvider>
  )
}

export default App