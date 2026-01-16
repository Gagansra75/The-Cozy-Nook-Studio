import { useState } from 'react';
import { Upload, Sparkles, Send, Check } from 'lucide-react';

const CustomDesign = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    customText: '',
    designDetails: '',
    budget: '',
    deadline: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Custom Design Request:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        productType: '',
        customText: '',
        designDetails: '',
        budget: '',
        deadline: '',
      });
    }, 3000);
  };

  const productTypes = [
    'Wooden Serving Platter',
    'Throw Blanket',
    'Wall Decor',
    'Walking Cane',
    'Picture Frame',
    'Cutting Board',
    'Coasters',
    'Other',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-white to-orange-50/30 py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-craft-primary/10 to-craft-secondary/10 px-6 py-2 rounded-full mb-6">
            <Sparkles className="text-craft-primary" size={20} />
            <span className="text-craft-primary font-bold">AI-Powered Custom Design</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Create Your <span className="bg-gradient-to-r from-craft-primary via-craft-secondary to-craft-accent bg-clip-text text-transparent">Dream Design</span>
          </h1>
          <p className="text-xl text-craft-muted max-w-3xl mx-auto">
            Tell us about your vision, and our expert team will craft a unique, personalized piece just for you. 
            Add custom names, special dates, or completely unique designs!
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-3xl flex items-center gap-4 animate-fade-in">
            <div className="bg-white/20 p-3 rounded-full">
              <Check size={28} />
            </div>
            <div>
              <h3 className="font-bold text-xl">Request Submitted Successfully! 🎉</h3>
              <p>Our design team will contact you within 24 hours.</p>
            </div>
          </div>
        )}

        {/* Custom Design Form */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-gray-200/50">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-craft-dark mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-craft-primary to-craft-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-craft-dark font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-craft-dark font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-craft-dark font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 transition-all outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-craft-dark font-semibold mb-2">Product Type *</label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 transition-all outline-none bg-white"
                  >
                    <option value="">Select a product type</option>
                    {productTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Design Details */}
            <div>
              <h2 className="text-2xl font-bold text-craft-dark mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-craft-primary to-craft-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Design Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-craft-dark font-semibold mb-2">Custom Text / Names</label>
                  <input
                    type="text"
                    name="customText"
                    value={formData.customText}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 transition-all outline-none"
                    placeholder="e.g., 'The Smith Family', 'Est. 2024', names, special dates, etc."
                  />
                  <p className="text-sm text-craft-muted mt-2">Enter any text you'd like engraved or embroidered on your product</p>
                </div>

                <div>
                  <label className="block text-craft-dark font-semibold mb-2">Design Description *</label>
                  <textarea
                    name="designDetails"
                    value={formData.designDetails}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 transition-all outline-none resize-none"
                    placeholder="Describe your design vision in detail... Include colors, style preferences, dimensions, materials, inspiration, or any specific requirements."
                  ></textarea>
                  <p className="text-sm text-craft-muted mt-2">The more details you provide, the better we can bring your vision to life!</p>
                </div>

                <div>
                  <label className="block text-craft-dark font-semibold mb-2">Upload Inspiration Images (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-craft-primary transition-all cursor-pointer">
                    <Upload className="mx-auto mb-4 text-craft-muted" size={48} />
                    <p className="text-craft-dark font-semibold mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-craft-muted">PNG, JPG, or PDF (max. 5MB each)</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-craft-primary font-semibold hover:underline">Browse files</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h2 className="text-2xl font-bold text-craft-dark mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-craft-primary to-craft-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Project Timeline & Budget
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-craft-dark font-semibold mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 transition-all outline-none bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50">Under $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-500">$200 - $500</option>
                    <option value="500+">$500+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-craft-dark font-semibold mb-2">When do you need it?</label>
                  <select
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-craft-primary focus:ring-2 focus:ring-craft-primary/20 transition-all outline-none bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="flexible">Flexible / No rush</option>
                    <option value="2-weeks">Within 2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-months">Within 2 months</option>
                    <option value="specific">Specific date (mention in description)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-craft-primary via-craft-secondary to-craft-accent text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-craft-primary/50 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <Send size={24} />
                Submit Custom Design Request
              </button>
              <p className="text-center text-craft-muted mt-4">
                We'll review your request and get back to you within 24 hours
              </p>
            </div>
          </form>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-craft-primary to-craft-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">AI-Enhanced Design</h3>
            <p className="text-craft-muted">Our AI helps visualize your ideas before production begins</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-craft-secondary to-craft-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Check className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Quality Guaranteed</h3>
            <p className="text-craft-muted">100% satisfaction guarantee on all custom pieces</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-craft-accent to-craft-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Upload className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Free Revisions</h3>
            <p className="text-craft-muted">We'll work with you until it's perfect</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;
