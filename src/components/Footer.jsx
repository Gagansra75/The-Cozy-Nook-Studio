import { ShoppingBag, Heart, Shield, TrendingUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-craft-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-craft-accent" />
              <span className="text-2xl font-bold">The Cozy Nook Studio</span>
            </div>
            <p className="text-craft-light mb-6">
              Bringing you authentic handcrafted treasures that transform houses into homes. 
              Each piece tells a unique story.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Heart className="text-craft-accent" size={20} />
                <span className="text-sm">100% Handmade</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-craft-light hover:text-craft-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-craft-light hover:text-craft-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-craft-light hover:text-craft-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-craft-light hover:text-craft-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-craft-light hover:text-craft-accent transition-colors">
                  Home Decor
                </a>
              </li>
              <li>
                <a href="#products" className="text-craft-light hover:text-craft-accent transition-colors">
                  Bookends
                </a>
              </li>
              <li>
                <a href="#products" className="text-craft-light hover:text-craft-accent transition-colors">
                  Wall Art
                </a>
              </li>
              <li>
                <a href="#products" className="text-craft-light hover:text-craft-accent transition-colors">
                  Kitchen & Dining
                </a>
              </li>
              <li>
                <a href="#products" className="text-craft-light hover:text-craft-accent transition-colors">
                  Ornaments
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="text-craft-accent flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-sm">Secure Payments</div>
                  <div className="text-craft-light text-sm">100% secure checkout</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-craft-accent flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-sm">Quality Guaranteed</div>
                  <div className="text-craft-light text-sm">Premium craftsmanship</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-craft-accent flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-sm">Support Artisans</div>
                  <div className="text-craft-light text-sm">Fair trade practices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-craft-primary/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-craft-light text-sm">
              © {currentYear} The Cozy Nook Studio. All rights reserved. Crafted with ❤️
            </div>
            <div className="flex gap-6 text-sm text-craft-light">
              <a href="#" className="hover:text-craft-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-craft-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-craft-accent transition-colors">
                Shipping & Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
