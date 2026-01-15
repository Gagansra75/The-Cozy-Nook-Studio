import { X, ShoppingCart, Star } from 'lucide-react';
import { useCart } from './ShoppingCart';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-craft-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  New Arrival
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <span className="text-craft-secondary font-medium text-sm">
                    {product.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-craft-dark mb-4">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-craft-primary">
                    ${product.price}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description || 'This exquisite handcrafted piece is made with premium materials by skilled artisans. Each item is unique and showcases traditional craftsmanship with a modern touch. Perfect for adding character to your home or as a thoughtful gift.'}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3">Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-craft-primary rounded-full"></span>
                      100% Handmade
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-craft-primary rounded-full"></span>
                      Premium Quality Materials
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-craft-primary rounded-full"></span>
                      Eco-Friendly & Sustainable
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-craft-primary rounded-full"></span>
                      Free Shipping Available
                    </li>
                  </ul>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-auto"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
