import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { BrandStatement } from './components/sections/BrandStatement'
import { FeaturedCreations } from './components/sections/FeaturedCreations'
import { InspirationExplorer } from './components/sections/InspirationExplorer'
import { OrderSteps } from './components/sections/OrderSteps'
import { OrderBuilder } from './components/sections/OrderBuilder'
import { InstagramSection } from './components/sections/InstagramSection'
import { LocationSection } from './components/sections/LocationSection'
import { FinalCTA } from './components/sections/FinalCTA'
import { Footer } from './components/layout/Footer'
import { WhatsAppFab } from './components/ui/WhatsAppFab'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <FeaturedCreations />
        <InspirationExplorer />
        <OrderSteps />
        <OrderBuilder />
        <InstagramSection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default App
