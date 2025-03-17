// Initialize EmailJS with your user ID
(function() {
    emailjs.init("iEVYozcjNDUQ9o_AE");
})();

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Get form data
    const formData = {
        to_email: "productwithjasleen@gmail.com",
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        subject: "New Contact Form Submission"
    };

    // Send email using EmailJS
    emailjs.send("service_mgwn0k8", "contact_form", formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            alert('Thank you! Your message has been sent successfully.');
            
            // Reset form
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Oops! Something went wrong. Please try again later.');
        })
        .finally(function() {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
}); 