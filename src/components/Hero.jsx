import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50/40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-gradient-to-br from-craft-primary/20 to-craft-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-gradient-to-br from-craft-accent/20 to-craft-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-craft-primary/10 to-craft-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
          <Sparkles className="text-craft-primary" size={32} />
        </div>
      </div>
      <div className="absolute bottom-32 right-16 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
          <Zap className="text-craft-accent" size={28} />
        </div>
      </div>
      <div className="absolute top-1/3 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-xl">
          <TrendingUp className="text-craft-secondary" size={24} />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-craft-primary to-craft-secondary text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              <Sparkles size={18} />
              AI-Curated Home Decor Collection
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-craft-dark mb-8 leading-tight tracking-tighter">
            Transform Your
            <span className="block bg-gradient-to-r from-craft-primary via-craft-secondary to-craft-accent bg-clip-text text-transparent">
              Living Space
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-craft-muted mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Discover handcrafted home decor powered by intelligent recommendations. 
            Each piece is curated to bring elegance, warmth, and personality to your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#products" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
            }}>
              <button className="btn-primary group flex items-center gap-3 text-lg">
                Shop Collection
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
              </button>
            </a>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
            }}>
              <button className="btn-secondary text-lg">
                Learn More
              </button>
            </a>
          </div>

          {/* Stats with Modern Design */}
          <div className="grid grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-craft-primary to-craft-secondary bg-clip-text text-transparent mb-2">100+</div>
              <div className="text-craft-muted font-semibold">Premium Products</div>
            </div>
            <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-craft-secondary to-craft-accent bg-clip-text text-transparent mb-2">2.5K+</div>
              <div className="text-craft-muted font-semibold">Happy Customers</div>
            </div>
            <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-craft-accent to-craft-primary bg-clip-text text-transparent mb-2">4.9★</div>
              <div className="text-craft-muted font-semibold">Average Rating</div>
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
