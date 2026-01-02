import { Heart, Award, Users, Leaf } from 'lucide-react';

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
      icon: <Leaf className="w-8 h-8" />,
      title: 'Eco-Friendly',
      description: 'Sustainable practices and natural materials for a better tomorrow.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-craft-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            The <span className="text-gradient">Cozy Nook Studio</span> Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in the magic of handmade. Every product in our collection is a testament 
            to traditional craftsmanship meeting modern design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=1000"
              alt="Artisan at work"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-craft-dark">
              Crafted by Hand, Created with Heart
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The Cozy Nook Studio was born from a passion for preserving traditional craftsmanship 
              while bringing unique, handmade products to modern homes. We work directly with 
              talented artisans who pour their heart and soul into every piece.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From wooden bookends to decorative ornaments, each item tells a story of 
              skill, patience, and artistic vision. When you choose The Cozy Nook Studio, you're not 
              just buying a product – you're becoming part of a movement that values quality, 
              sustainability, and human creativity.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-craft-primary">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center border-l-2 border-craft-light pl-4">
                <div className="text-3xl font-bold text-craft-primary">50+</div>
                <div className="text-sm text-gray-600">Skilled Artisans</div>
              </div>
              <div className="text-center border-l-2 border-craft-light pl-4">
                <div className="text-3xl font-bold text-craft-primary">10+</div>
                <div className="text-sm text-gray-600">Product Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-craft-primary/10 rounded-full mb-4 text-craft-primary">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-craft-dark mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">
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
