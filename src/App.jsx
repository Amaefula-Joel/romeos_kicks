import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';

// import Hero from './components/Hero'
// import FeaturedProducts from './components/FeaturedProducts'
// import Testimonials from './components/Testimonials'
// import WhyUs from './components/WhyBuyFromUs'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
