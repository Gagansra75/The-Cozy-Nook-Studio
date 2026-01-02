import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-craft-dark/90 to-craft-primary/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2000"
          alt="Handmade crafts"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Decoration Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Sparkles className="text-craft-accent opacity-50" size={40} />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce delay-100">
        <Sparkles className="text-craft-light opacity-50" size={30} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-craft-accent/20 text-craft-light px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-craft-light/30">
              ✨ Handcrafted with Love
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Unique
            <span className="block text-craft-accent">Handmade Treasures</span>
          </h1>

          <p className="text-xl md:text-2xl text-craft-light mb-10 max-w-2xl mx-auto">
            Transform your home with artisan-crafted products that tell a story. 
            Each piece is lovingly made by skilled craftspeople.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#products" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
            }}>
              <button className="btn-primary group flex items-center gap-2">
                Explore Products
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </a>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
            }}>
              <button className="btn-secondary">
                Our Story
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-craft-light">Unique Products</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-craft-light">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-craft-light">Handcrafted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
