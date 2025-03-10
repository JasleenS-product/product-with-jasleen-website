# Product with Jasleen - Portfolio Website

A modern, responsive portfolio website showcasing product management expertise, case studies, and professional services.

## 🌟 Features

- Responsive design that works across all devices
- Modern UI with smooth animations and transitions
- Mobile-first approach with hamburger menu
- Case studies showcase section
- Service offerings display
- Contact form integration
- Blog/Insights section
- Testimonials showcase
- Skills and expertise highlight

## 🛠 Tech Stack

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (Vanilla)
- Font Awesome for icons
- Google Fonts (Inter, Fraunces, JetBrains Mono)

## 📁 Project Structure

```
PWJ-8080-version/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
├── deploy.sh
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript
- Git (for version control)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/JasleenS-product/product-with-jasleen-website.git
   cd PWJ-8080-version
   ```

2. Open `index.html` in your browser to view the website locally.

3. Make changes to the files as needed:
   - `index.html` for content structure
   - `css/styles.css` for styling
   - `js/main.js` for interactivity

### Deployment

The website is configured to deploy using GitHub Pages. To deploy updates:

1. Make sure you're on the development branch:
   ```bash
   git checkout website-final-portfolio-8080
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

3. Run the deployment script:
   ```bash
   ./deploy.sh "Your deployment message"
   ```

The script will automatically:
- Commit your changes
- Push to the development branch
- Update the deployment branch (gh-pages)
- Deploy the changes to GitHub Pages

## 🎨 Customization

### Colors

The website uses CSS variables for easy customization. Main colors can be modified in `css/styles.css`:

```css
:root {
    --primary-bg: #ffffff;
    --secondary-bg: #f8fafc;
    --text-primary: #1e293b;
    --accent-primary: #1e40af;
    --accent-secondary: #3b82f6;
    /* ... other color variables ... */
}
```

### Typography

The website uses three main fonts:
- Inter (sans-serif) for body text
- Fraunces (serif) for headings
- JetBrains Mono for code snippets

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px

## 🔒 SSL/HTTPS

The website is served over HTTPS using GitHub Pages' automatic SSL certificate provisioning.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

Jasleen Suri - productwithjasleen@gmail.com

Project Link: https://github.com/JasleenS-product/product-with-jasleen-website

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for stock images 