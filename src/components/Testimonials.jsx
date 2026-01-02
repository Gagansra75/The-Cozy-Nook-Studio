import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
      rating: 5,
      text: 'Absolutely love the handcrafted bookends I purchased! The quality is exceptional and they add such a unique touch to my living room. The attention to detail is remarkable.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      rating: 5,
      text: 'BazaarCraft has become my go-to for unique home decor. Every piece tells a story and the craftsmanship is outstanding. Fast shipping and beautiful packaging too!',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Art Collector',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
      rating: 5,
      text: 'I bought the wooden chess set as a gift and my friend was blown away! Supporting artisans while getting beautiful products is a win-win. Highly recommend!',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
      rating: 5,
      text: 'The custom order I placed exceeded all expectations. The team was responsive and the final product was even better than I imagined. True artisans at work!',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-craft-light/20 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our happy customers!
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 transform ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                  <Quote className="text-craft-accent opacity-20 mb-6" size={48} />
                  
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-craft-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-craft-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-craft-primary'
                    : 'w-3 bg-gray-300 hover:bg-craft-secondary'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-craft-primary mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center border-l-2 border-r-2 border-craft-light/50">
            <div className="text-4xl font-bold text-craft-primary mb-2">1000+</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-craft-primary mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
