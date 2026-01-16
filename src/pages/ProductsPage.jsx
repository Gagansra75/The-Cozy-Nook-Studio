import { useState } from 'react';
import { ShoppingCart, Sparkles, Star, Eye } from 'lucide-react';
import { useCart } from '../components/ShoppingCart';
import ImageGalleryModal from '../components/ImageGalleryModal';

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Pizza Wooden Serving Platter Tray',
      price: 39.99,
      category: 'Home Decor',
      rating: 5.0,
      reviews: 48,
      description: 'Elevate your dining experience with this beautifully handcrafted wooden pizza serving platter. Perfect for family gatherings and dinner parties, this artisan tray adds rustic charm to any table setting. Its natural wood grain and spacious design make it ideal for serving pizzas, charcuterie boards, or appetizers.',
      image: 'products/pizza-wooden-serving-platter-tray-1.png',
      images: [
        'products/pizza-wooden-serving-platter-tray-1.png',
        'products/pizza-wooden-serving-platter-tray-2.png',
        'products/pizza-wooden-serving-platter-tray-3.png',
        'products/pizza-wooden-serving-platter-tray-4.png',
      ],
    },
    {
      id: 2,
      name: 'Cotton Black Grid Throw Blanket',
      price: 39.99,
      category: 'Home Decor',
      rating: 5.0,
      reviews: 62,
      description: 'Wrap yourself in comfort with this premium cotton throw blanket featuring a modern grid pattern. The perfect blend of style and coziness, this versatile blanket complements any home décor. Ideal for your sofa, bed, or as a thoughtful gift for loved ones.',
      image: 'products/cotton-black-grid-throw-blanket-1.png',
      images: [
        'products/cotton-black-grid-throw-blanket-1.png',
        'products/cotton-black-grid-throw-blanket-2.png',
        'products/cotton-black-grid-throw-blanket-3.png',
      ],
    },
    {
      id: 3,
      name: 'Walking Cane',
      price: 39.99,
      category: 'Home Decor',
      rating: 5.0,
      reviews: 35,
      description: 'Combine elegance with functionality with this beautifully crafted walking cane. Expertly designed for both support and style, this cane features exquisite detailing and a comfortable grip. Makes a distinguished accessory for daily use or special occasions.',
      image: 'products/walking-cane-1.png',
      images: [
        'products/walking-cane-1.png',
        'products/walking-cane-2.png',
        'products/walking-cane-3.png',
      ],
    },
    {
      id: 4,
      name: 'Large Wall Mounted Hanging Angel Flying Wing',
      price: 39.99,
      category: 'Home Decor',
      rating: 5.0,
      reviews: 71,
      description: 'Transform your space into a heavenly sanctuary with these stunning angel wings. This majestic wall décor piece adds a touch of ethereal beauty and spiritual elegance to any room. Perfect for creating a dramatic focal point in living rooms, bedrooms, or meditation spaces.',
      image: 'products/large-wall-mounted-hanging-angel-flying-wing-1.png',
      images: [
        'products/large-wall-mounted-hanging-angel-flying-wing-1.png',
        'products/large-wall-mounted-hanging-angel-flying-wing-2.png',
        'products/large-wall-mounted-hanging-angel-flying-wing-3.png',
      ],
    },
  ];

  const handleProductClick = (product, e) => {
    // Don't open gallery if clicking the add to cart button
    if (e.target.closest('.add-to-cart-btn')) {
      return;
    }
    setSelectedProduct(product);
    setIsGalleryOpen(true);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-white to-orange-50/30">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-craft-primary via-craft-secondary to-craft-accent text-white py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-white rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <Sparkles size={20} />
            <span className="font-bold">AI-Curated Premium Collection</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">Our Home Decor Collection</h1>
          <p className="text-2xl max-w-3xl mx-auto font-medium opacity-95">
            Discover handcrafted pieces powered by intelligent curation to transform your space
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                onClick={(e) => handleProductClick(product, e)}
                className="glass-card rounded-3xl overflow-hidden card-hover cursor-pointer group border border-gray-200/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-craft-primary/5 to-craft-secondary/5 z-0"></div>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="relative w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay with enhanced UI */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-craft-dark flex items-center gap-3 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Eye size={22} />
                      View {product.images.length} Photos
                    </div>
                  </div>
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-gradient-to-r from-craft-accent to-craft-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-1">
                      🔥 Hot
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-craft-dark px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                      {product.images.length} images
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-xl">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-craft-dark">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-craft-primary bg-craft-primary/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-xs text-craft-muted font-semibold">
                      {product.reviews} reviews
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-craft-dark group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-craft-primary group-hover:to-craft-secondary group-hover:bg-clip-text transition-all mb-4 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-3xl font-black bg-gradient-to-r from-craft-primary to-craft-secondary bg-clip-text text-transparent">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <button 
                      onClick={(e) => handleAddToCart(product, e)}
                      className="add-to-cart-btn bg-gradient-to-r from-craft-primary to-craft-secondary text-white px-6 py-3 rounded-full hover:shadow-xl hover:shadow-craft-primary/50 transition-all flex items-center gap-2 font-bold transform hover:scale-105"
                    >
                      <ShoppingCart size={18} />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
        images={selectedProduct?.images || []}
        productName={selectedProduct?.name || ''}
      />
    </div>
  );
};

export default ProductsPage;
