import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShoppingCart, { CartProvider } from './components/ShoppingCart';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Checkout from './pages/Checkout';
import CustomDesign from './pages/CustomDesign';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/custom-design" element={<CustomDesign />} />
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
