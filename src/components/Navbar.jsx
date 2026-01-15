import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from './ShoppingCart';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Products', href: '/products', isRoute: true },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  const scrollToSection = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage 
          ? 'glass-card border-b border-gray-200 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={handleLogoClick}>
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br from-craft-primary to-craft-accent rounded-xl blur group-hover:blur-lg transition-all`}></div>
              <div className="relative bg-gradient-to-br from-craft-primary to-craft-secondary p-2 rounded-xl">
                <ShoppingBag className="h-7 w-7 text-white" />
              </div>
            </div>
            <div>
              <span className={`text-xl font-black tracking-tight ${isScrolled || !isHomePage ? 'text-craft-dark' : 'text-white'}`}>
                The Cozy Nook
              </span>
              <span className={`block text-xs font-semibold ${isScrolled || !isHomePage ? 'text-craft-muted' : 'text-white/80'}`}>
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-full font-semibold transition-all hover:scale-105 ${
                    isScrolled || !isHomePage 
                      ? 'text-craft-dark hover:bg-gradient-to-r hover:from-craft-primary hover:to-craft-secondary hover:text-white' 
                      : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all hover:scale-105 ${
                    isScrolled || !isHomePage 
                      ? 'text-craft-dark hover:bg-gradient-to-r hover:from-craft-primary hover:to-craft-secondary hover:text-white' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
            
            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-3 rounded-full transition-all hover:scale-110 ${
                isScrolled || !isHomePage 
                  ? 'bg-gray-100 hover:bg-gray-200' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <ShoppingCart className={`h-5 w-5 ${isScrolled || !isHomePage ? 'text-craft-primary' : 'text-white'}`} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-craft-accent to-craft-secondary text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>
            
            <Link to="/products" className="ml-2">
              <button className="bg-gradient-to-r from-craft-primary to-craft-secondary text-white px-6 py-3 rounded-full font-bold hover:shadow-xl hover:shadow-craft-primary/50 transition-all transform hover:scale-105">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-craft-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-craft-primary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block py-2 font-medium transition-colors hover:text-craft-secondary ${
                    isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`block py-2 font-medium transition-colors hover:text-craft-secondary ${
                    isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
            <Link to="/products" className="btn-primary w-full mt-4 inline-block text-center">
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
