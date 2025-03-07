// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.preview-card, .testimonial-card, .blog-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
};

// Intersection Observer for animations
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('skill-progress')) {
                entry.target.style.width = entry.target.dataset.progress + '%';
            }
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.2
});

// Animate timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Animate skill progress bars
document.querySelectorAll('.skill-progress').forEach(progress => {
    observer.observe(progress);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero image
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    // Set initial progress for skill bars
    document.querySelectorAll('.skill-progress').forEach(progress => {
        progress.style.setProperty('--progress', progress.dataset.progress + '%');
    });
});

// Handle mobile menu
const navLinks = document.querySelector('.nav-links');
const menuButton = document.createElement('button');
menuButton.className = 'mobile-menu-btn';
menuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.nav-container').appendChild(menuButton);

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuButton.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active')) {
        if (!e.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
            menuButton.classList.remove('active');
        }
    }
});

// Handle form submissions
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', data);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <h3>Thank You!</h3>
            <p>I'll get back to you within 24 hours.</p>
        `;
        
        form.innerHTML = '';
        form.appendChild(successMessage);
        
        // Reset form after 5 seconds
        setTimeout(() => {
            form.reset();
            form.innerHTML = form.dataset.originalHtml;
        }, 5000);
    });
});
