import { ShoppingCart, Eye, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './ShoppingCart';
import ProductModal from './ProductModal';

const Products = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const products = [
    {
      id: 1,
      name: 'Pizza Wooden Serving Platter Tray',
      category: 'Home Decor',
      price: 34.99,
      image: '/products/Pizza Wooden Serving Platter Tray-1.png',
      rating: 5.0,
      reviews: 48,
      description: 'Elevate your dining experience with this beautifully handcrafted wooden pizza serving platter. Perfect for family gatherings and dinner parties, this artisan tray adds rustic charm to any table setting. Its natural wood grain and spacious design make it ideal for serving pizzas, charcuterie boards, or appetizers.',
    },
    {
      id: 2,
      name: 'Cotton Black Grid Throw Blanket',
      category: 'Home Decor',
      price: 24.99,
      image: '/products/Cotton Black Grid Throw Blanket-1.png',
      rating: 5.0,
      reviews: 62,
      description: 'Wrap yourself in comfort with this premium cotton throw blanket featuring a modern grid pattern. The perfect blend of style and coziness, this versatile blanket complements any home décor. Ideal for your sofa, bed, or as a thoughtful gift for loved ones.',
    },
    {
      id: 3,
      name: 'Walking Cane',
      category: 'Home Decor',
      price: 39.99,
      image: '/products/Walking-Cane-1.png',
      rating: 5.0,
      reviews: 35,
      description: 'Combine elegance with functionality with this beautifully crafted walking cane. Expertly designed for both support and style, this cane features exquisite detailing and a comfortable grip. Makes a distinguished accessory for daily use or special occasions.',
    },
    {
      id: 4,
      name: 'Large Wall Mounted Hanging Angel Flying Wing',
      category: 'Home Decor',
      price: 74.99,
      image: '/products/Large Wall Mounted Hanging Angel Flying Wing-1.png',
      rating: 5.0,
      reviews: 71,
      description: 'Transform your space into a heavenly sanctuary with these stunning angel wings. This majestic wall décor piece adds a touch of ethereal beauty and spiritual elegance to any room. Perfect for creating a dramatic focal point in living rooms, bedrooms, or meditation spaces.',
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white via-amber-50/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-craft-primary/10 to-craft-secondary/10 px-6 py-2 rounded-full mb-6">
            <span className="text-craft-primary font-bold">✨ Featured Collection</span>
          </div>
          <h2 className="section-title">
            Premium <span className="bg-gradient-to-r from-craft-primary via-craft-secondary to-craft-accent bg-clip-text text-transparent">Home Decor</span>
          </h2>
          <p className="text-xl text-craft-muted max-w-3xl mx-auto font-medium">
            AI-curated handcrafted pieces designed to transform your living space
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="glass-card rounded-3xl overflow-hidden card-hover group border border-gray-200/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-craft-primary/10 to-craft-secondary/10 z-0"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <button 
                    onClick={() => handleQuickView(product)}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl hover:bg-gradient-to-r hover:from-craft-primary hover:to-craft-secondary hover:text-white transition-all transform hover:scale-110 shadow-xl"
                  >
                    <Eye size={22} />
                  </button>
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl hover:bg-gradient-to-r hover:from-craft-primary hover:to-craft-secondary hover:text-white transition-all transform hover:scale-110 shadow-xl"
                  >
                    <ShoppingCart size={22} />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-craft-accent to-craft-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🔥 Hot
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-craft-primary bg-craft-primary/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-craft-dark">{product.rating}</span>
                    <span className="text-xs text-craft-muted">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-craft-dark mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-craft-primary group-hover:to-craft-secondary group-hover:bg-clip-text transition-all line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-black bg-gradient-to-r from-craft-primary to-craft-secondary bg-clip-text text-transparent">
                      ${product.price}
                    </span>
                  </div>
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="bg-gradient-to-r from-craft-primary to-craft-secondary text-white p-3 rounded-2xl hover:shadow-xl hover:shadow-craft-primary/50 transition-all transform hover:scale-110"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Link to="/products">
            <button className="btn-primary text-lg">
              Explore Full Collection →
            </button>
          </Link>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-24 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-craft-primary via-craft-secondary to-craft-accent"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-96 h-96 -top-48 -left-48 bg-white rounded-full blur-3xl"></div>
            <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative p-16 text-center text-white">
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              🎨 Looking for Custom Designs?
            </h3>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium opacity-95">
              Our AI-powered design team can create bespoke home decor pieces perfectly tailored to your unique space and style preferences.
            </p>
            <button className="bg-white text-craft-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              Get Started Free →
            </button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Products;
