import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyBuyFromUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}

export default App
