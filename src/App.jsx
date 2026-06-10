import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { AboutSection } from './components/AboutSection'
import { FeaturesSection } from './components/FeaturesSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  )
}

export default App