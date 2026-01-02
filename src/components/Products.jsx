import { ShoppingCart, Eye, Star } from 'lucide-react';
import { useState } from 'react';
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

  const categories = [
    'All Products',
    'Home Decor',
    'Bookends',
    'Wall Art',
    'Ornaments',
    'Kitchen',
    'Toys & Games',
    'Accessories',
  ];

  const products = [
    {
      id: 1,
      name: 'Handcrafted Wooden Bookend',
      category: 'Bookends',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=500',
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: 'Decorative Wall Hanging',
      category: 'Wall Art',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=500',
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: 'Rustic Candle Holder',
      category: 'Home Decor',
      price: 28.99,
      image: 'https://images.unsplash.com/photo-1602874801006-8e31c6d0f315?q=80&w=500',
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: 'Ceramic Flower Vase',
      category: 'Home Decor',
      price: 38.99,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=500',
      rating: 4.6,
      reviews: 98,
    },
    {
      id: 5,
      name: 'Wooden Chess Set',
      category: 'Toys & Games',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=500',
      rating: 5.0,
      reviews: 203,
    },
    {
      id: 6,
      name: 'Marble Soap Dish',
      category: 'Accessories',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500',
      rating: 4.8,
      reviews: 142,
    },
    {
      id: 7,
      name: 'Hand-Painted Ornament',
      category: 'Ornaments',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=500',
      rating: 4.9,
      reviews: 187,
    },
    {
      id: 8,
      name: 'Wooden Cutting Board',
      category: 'Kitchen',
      price: 42.99,
      image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?q=80&w=500',
      rating: 4.7,
      reviews: 215,
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Our <span className="text-gradient">Handcrafted</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated selection of artisan-made products. More products coming soon!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                index === 0
                  ? 'bg-craft-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-craft-primary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button 
                    onClick={() => handleQuickView(product)}
                    className="bg-white p-3 rounded-full hover:bg-craft-primary hover:text-white transition-colors"
                  >
                    <Eye size={20} />
                  </button>
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="bg-white p-3 rounded-full hover:bg-craft-primary hover:text-white transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
                <div className="absolute top-3 right-3 bg-craft-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              </div>

              <div className="p-5">
                <div className="text-sm text-craft-secondary font-medium mb-2">
                  {product.category}
                </div>
                <h3 className="text-lg font-semibold text-craft-dark mb-2 group-hover:text-craft-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-craft-primary">
                    ${product.price}
                  </span>
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="bg-craft-primary text-white p-2 rounded-lg hover:bg-craft-dark transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Products
          </button>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 bg-gradient-to-r from-craft-primary to-craft-secondary rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Looking for Custom Orders?
          </h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            We can create bespoke handcrafted items tailored to your specific needs. 
            Contact us to discuss your vision!
          </p>
          <button className="bg-white text-craft-primary px-8 py-3 rounded-lg font-semibold hover:bg-craft-light transition-colors">
            Contact Us
          </button>
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
