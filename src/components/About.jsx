import { Heart, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Each product is crafted with passion and attention to detail by skilled artisans.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'We use only the finest materials to ensure durability and timeless beauty.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Supporting Artisans',
      description: 'Your purchase directly supports local craftspeople and their families.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI-Curated',
      description: 'Smart recommendations powered by AI to match your unique style preferences.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-craft-primary/10 to-craft-secondary/10 px-6 py-2 rounded-full mb-6">
            <span className="text-craft-primary font-bold">✨ Our Story</span>
          </div>
          <h2 className="section-title">
            The <span className="bg-gradient-to-r from-craft-primary via-craft-secondary to-craft-accent bg-clip-text text-transparent">Cozy Nook Studio</span> Story
          </h2>
          <p className="text-xl text-craft-muted max-w-3xl mx-auto font-medium">
            We believe in the magic of handmade home decor powered by intelligent curation. Every piece in our collection is a testament 
            to traditional craftsmanship meeting modern AI-enhanced design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-craft-primary/20 to-craft-secondary/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=1000"
                alt="Artisan at work"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-4xl font-black text-craft-dark">
              Crafted by Hand, <span className="bg-gradient-to-r from-craft-primary to-craft-secondary bg-clip-text text-transparent">Curated by AI</span>
            </h3>
            <p className="text-craft-muted leading-relaxed text-lg">
              The Cozy Nook Studio combines traditional craftsmanship with cutting-edge AI technology 
              to bring unique, handmade home decor to modern living spaces. We work directly with 
              talented artisans while using intelligent algorithms to match you with perfect pieces.
            </p>
            <p className="text-craft-muted leading-relaxed text-lg">
              From elegant serving platters to decorative wall art, each item tells a story of 
              skill, patience, and artistic vision enhanced by smart curation. When you choose The Cozy Nook Studio, you're not 
              just buying decor – you're experiencing the perfect fusion of human creativity and AI precision. 
              sustainability, and human creativity.
            </p>
            <div className="flex gap-8 pt-6">
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-craft-primary to-craft-secondary bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-craft-muted font-semibold mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-craft-secondary to-craft-accent bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-craft-muted font-semibold mt-1">Skilled Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-craft-accent to-craft-primary bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-craft-muted font-semibold mt-1">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 card-hover text-center group border border-gray-200/50"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-craft-primary/10 to-craft-secondary/10 rounded-2xl mb-6 text-craft-primary group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-craft-dark mb-3">
                {feature.title}
              </h4>
              <p className="text-craft-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
