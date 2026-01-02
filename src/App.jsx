import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ShoppingCart, { CartProvider } from './components/ShoppingCart';
import BackToTop from './components/BackToTop';
import PromoBanner from './components/PromoBanner';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <PromoBanner />
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
        <Footer />
        <ShoppingCart />
        <BackToTop />
      </div>
    </CartProvider>
  );
}

export default App;
