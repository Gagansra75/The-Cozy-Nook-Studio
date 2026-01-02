import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from './ShoppingCart';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, '#home')}>
            <div className="relative">
              <ShoppingBag className={`h-8 w-8 ${isScrolled ? 'text-craft-primary' : 'text-white'}`} />
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${isScrolled ? 'bg-craft-secondary' : 'bg-craft-accent'}`}></div>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-craft-primary' : 'text-white'}`}>
              The Cozy Nook Studio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-medium transition-colors hover:text-craft-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ShoppingCart className={`h-6 w-6 ${isScrolled ? 'text-craft-primary' : 'text-white'}`} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-craft-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {getTotalItems()}
                </span>
              )}
            </button>
            
            <button className="btn-primary">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-craft-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-craft-primary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block py-2 font-medium transition-colors hover:text-craft-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">
              Shop Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
