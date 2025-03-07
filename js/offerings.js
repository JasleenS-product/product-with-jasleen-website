// Modal functionality
const modal = document.getElementById('contactModal');
const closeModal = document.querySelector('.close-modal');
const contactForm = document.getElementById('contactForm');
const packageSelect = document.getElementById('package');

// Open modal with pre-selected package
function openContactModal(packageType) {
    modal.style.display = 'block';
    packageSelect.value = packageType;
}

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        package: packageSelect.value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', formData);
    
    // Show success message
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <h2>Thank You!</h2>
        <p>I've received your message and will get back to you within 24 hours.</p>
        <button class="submit-btn" onclick="closeModal.click()">Close</button>
    `;
});

// Animate cards on scroll
const cards = document.querySelectorAll('.overview-card, .package-card');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
}); 