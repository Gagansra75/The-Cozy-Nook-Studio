# BazaarCraft - Handmade Craft Products E-commerce Website 🎨

A beautiful, modern, and fully responsive single-page React application for selling handmade craft products online. Built with cutting-edge technologies and stunning UI/UX design.

![BazaarCraft](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### Core Features
- **🛍️ Shopping Cart System**: Fully functional cart with add/remove items, quantity updates, and real-time total calculation
- **👁️ Product Quick View**: Modal popup for detailed product information without page navigation
- **🎭 Customer Testimonials**: Auto-sliding testimonial carousel with 5-star reviews
- **🎉 Promotional Banner**: Dismissible top banner for special offers and announcements
- **⬆️ Back to Top Button**: Smooth scroll to top functionality
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🎨 Modern Animations**: Scroll-triggered animations and smooth transitions throughout

### Sections
1. **Hero Section**: Eye-catching landing with call-to-action and statistics
2. **About Section**: Brand story with feature highlights
3. **Products Section**: Grid layout with 8 products, category filters, and hover effects
4. **Testimonials Section**: Sliding customer reviews with ratings
5. **Contact Section**: Contact form, map integration, and newsletter signup
6. **Footer**: Comprehensive links, categories, and trust badges

### Interactive Elements
- ✅ Working shopping cart with persistent state
- ✅ Product quick view modal
- ✅ Add to cart from multiple locations
- ✅ Cart item counter in navigation
- ✅ Mobile-friendly hamburger menu
- ✅ Smooth scroll navigation
- ✅ Hover effects and micro-interactions

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks (useState, useEffect, useContext)
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS 3**: Utility-first CSS framework with custom color palette
- **Lucide React**: Beautiful, customizable icon library
- **Context API**: State management for shopping cart
- **Custom Hooks**: useScrollAnimation for intersection observer
- **CSS Animations**: Smooth transitions and keyframe animations

## 📁 Project Structure

```
BazaarCraft/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive nav with cart counter
│   │   ├── Hero.jsx             # Hero section with CTA
│   │   ├── About.jsx            # About section with features
│   │   ├── Products.jsx         # Product grid with modals
│   │   ├── Testimonials.jsx     # Sliding testimonials
│   │   ├── Contact.jsx          # Contact form and info
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── ShoppingCart.jsx     # Cart sidebar with context
│   │   ├── ProductModal.jsx     # Quick view modal
│   │   ├── BackToTop.jsx        # Scroll to top button
│   │   └── PromoBanner.jsx      # Top promo banner
│   ├── hooks/
│   │   └── useScrollAnimation.js # Custom scroll hook
│   ├── App.jsx                   # Main app with CartProvider
│   ├── App.css                   # App-level styles
│   └── index.css                 # Global styles with Tailwind
├── public/
│   └── logo.svg                  # Custom BazaarCraft logo
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
└── vite.config.js                # Vite configuration
```

## 🚀 Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd BazaarCraft
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors

The custom color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  craft: {
    primary: '#8B4513',   // Saddle Brown
    secondary: '#D2691E', // Chocolate
    accent: '#CD853F',    // Peru
    light: '#F5DEB3',     // Wheat
    dark: '#654321',      // Dark Brown
  },
}
```

### Adding Products

To add products, edit the `products` array in `src/components/Products.jsx`:

```javascript
{
  id: 9,
  name: 'Your Product Name',
  category: 'Category',
  price: 49.99,
  image: 'your-image-url',
  rating: 4.8,
  reviews: 100,
}
```

### Modifying Sections

Each section is a separate component in `src/components/`. Simply edit the relevant component file to customize content, layout, or styling.

## 🎯 Key Features Explained

### Shopping Cart System
- Uses React Context API for global state management
- Add/remove items functionality
- Quantity adjustment with +/- buttons
- Real-time price calculation
- Cart counter badge in navigation
- Slide-in cart sidebar

### Product Modal
- Quick view without page navigation
- Full product details
- Add to cart directly from modal
- Beautiful image display
- Feature list and description

### Testimonials Carousel
- Auto-sliding every 5 seconds
- Manual navigation with dots
- Smooth transitions
- Customer ratings and images
- Trust statistics

### Animations
- Scroll-triggered fade-in effects
- Hover transformations
- Button scale effects
- Smooth page transitions
- Loading states

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔥 Recent Updates

✅ Added shopping cart functionality  
✅ Implemented product quick view modal  
✅ Created customer testimonials section  
✅ Added back to top button  
✅ Integrated promotional banner  
✅ Enhanced animations and transitions  
✅ Improved mobile responsiveness  

## 📝 Future Enhancements

- [ ] User authentication system
- [ ] Payment gateway integration
- [ ] Product search functionality
- [ ] Wishlist feature
- [ ] Product reviews and ratings
- [ ] Order history
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Multiple language support

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is created for BazaarCraft. All rights reserved.

## 📧 Support

For support, email support@bazaarcraft.com or visit the contact page on the website.

---

**Built with ❤️ for artisans and craft lovers**
