# Product with Jasleen - Professional Portfolio Website

A modern, responsive portfolio website showcasing product management expertise, case studies, and professional services.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-with-jasleen
   ```

2. **Setup Local Development**
   - Option 1: Using Python's built-in server
     ```bash
     python3 -m http.server 8090
     ```
   - Option 2: Using Node.js live-server
     ```bash
     npm install -g live-server
     live-server --port=8090
     ```

3. **View the Website**
   - Open your browser and navigate to `http://localhost:8090`
   - The website should now be running locally

## 🎨 Features

### Design System
- Modern and clean UI with consistent spacing
- Responsive design that works on all devices
- Custom color scheme with accent colors
- Typography system using Inter, Fraunces, and JetBrains Mono fonts
- Smooth animations and transitions

### Pages
1. **Home** (`index.html`)
   - Hero section with CTA
   - Services overview
   - Featured case studies
   - Testimonials

2. **About** (`about.html`)
   - Professional introduction
   - Experience timeline
   - Certifications
   - Professional values

3. **Offerings** (`offerings.html`)
   - Detailed services
   - Process explanation
   - Service packages

4. **Case Studies** (`case-studies.html`)
   - Portfolio of work
   - Project details
   - Results and metrics

5. **Contact** (`contact.html`)
   - Contact form
   - Professional information
   - Social links

## 🛠 Technical Details

### File Structure
```
product-with-jasleen/
├── index.html
├── about.html
├── offerings.html
├── case-studies.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── contact.js
└── images/
    └── hero-image.jpg
```

### CSS Architecture
- CSS Custom Properties (variables) for consistent styling
- Mobile-first responsive design
- BEM-like naming convention
- Modular component styles
- Flexible grid system

### JavaScript Features
- Smooth scrolling
- Form validation
- Interactive animations
- Mobile navigation handling

## 🎯 Design Elements

### Color Palette
```css
--primary-bg: #ffffff
--secondary-bg: #f8fafc
--text-primary: #1e293b
--text-secondary: #64748b
--accent-primary: #1e40af
--accent-secondary: #3b82f6
--accent-tertiary: #dbeafe
```

### Typography
- Headings: Fraunces (serif)
- Body: Inter (sans-serif)
- Code: JetBrains Mono (monospace)

### Components
- Custom buttons with hover effects
- Card components with animations
- Navigation with smooth transitions
- Form elements with validation styles
- Hero sections with gradient overlays

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px

## 🔧 Customization

### Modifying Colors
1. Open `css/styles.css`
2. Locate the `:root` section
3. Modify the color variables to match your brand

### Updating Content
- Edit the HTML files directly
- Images can be added to the `images/` directory
- Update the JavaScript files for custom functionality

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👩‍💼 Contact
For any queries or suggestions, please reach out through the contact form on the website.

## 🙏 Acknowledgments
- Icons: Font Awesome
- Fonts: Google Fonts
- Images: Unsplash
- Design Inspiration: Modern Product Management Practices 