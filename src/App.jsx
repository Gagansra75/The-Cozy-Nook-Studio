import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShoppingCart, { CartProvider } from './components/ShoppingCart';
import BackToTop from './components/BackToTop';
import PromoBanner from './components/PromoBanner';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen">
          <PromoBanner />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
          <ShoppingCart />
          <BackToTop />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
