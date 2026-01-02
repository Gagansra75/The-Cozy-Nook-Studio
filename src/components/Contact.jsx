import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-craft-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-craft-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-craft-primary/10 p-3 rounded-lg">
                    <Mail className="text-craft-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-craft-dark mb-1">Email</h4>
                    <p className="text-gray-600">support@thecozynookstudio.com</p>
                    <p className="text-gray-600">orders@thecozynookstudio.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-craft-primary/10 p-3 rounded-lg">
                    <Phone className="text-craft-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-craft-dark mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-craft-primary/10 p-3 rounded-lg">
                    <MapPin className="text-craft-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-craft-dark mb-1">Address</h4>
                    <p className="text-gray-600">123 Craft Street</p>
                    <p className="text-gray-600">Artisan District, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-craft-dark mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-craft-primary text-white p-3 rounded-lg hover:bg-craft-dark transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-craft-primary text-white p-3 rounded-lg hover:bg-craft-dark transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-craft-primary text-white p-3 rounded-lg hover:bg-craft-dark transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-craft-primary text-white p-3 rounded-lg hover:bg-craft-dark transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Map Preview */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7292555110294!2d-118.39896368478365!3d34.063308580553644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf37f0ff54f%3A0x500c2b7c3c1b0b0b!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-craft-dark mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-craft-dark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-craft-dark mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-craft-dark mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-craft-primary rounded-2xl p-12 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-xl mb-6 text-craft-light">
            Get updates on new products, special offers, and artisan stories delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-800 outline-none"
            />
            <button className="bg-craft-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-craft-dark/80 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
