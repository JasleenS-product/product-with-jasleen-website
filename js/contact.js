document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            try {
                // Here you would typically send the data to your email service
                // For demonstration, we'll show a success message
                showNotification('Message sent successfully! We\'ll get back to you soon.');
                contactForm.reset();
            } catch (error) {
                showNotification('There was an error sending your message. Please try again.', 'error');
            }
        });
    }

    // Chatbot Functionality
    const chatbotIcon = document.getElementById('chatbotIcon');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatbotMessages = document.getElementById('chatbotMessages');

    // Simple responses for the chatbot
    const botResponses = {
        'hello': 'Hi there! How can I help you today?',
        'hi': 'Hello! What can I do for you?',
        'services': 'We offer various product management services including Agile Roadmap & Scrum, User Research, and more. Would you like to know more about any specific service?',
        'contact': 'You can reach us at productwithjasleen@gmail.com or fill out the contact form on this page.',
        'pricing': 'Our pricing varies based on project requirements. Would you like to schedule a consultation to discuss your needs?',
        'default': 'I\'m not sure about that. Would you like to speak with Jasleen directly? You can fill out the contact form or email us at productwithjasleen@gmail.com.'
    };

    // Toggle chatbot window
    chatbotIcon.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
    });

    closeChat.addEventListener('click', function() {
        chatbotWindow.classList.remove('active');
    });

    // Send message function
    function sendChatMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Get bot response
        setTimeout(() => {
            const response = getBotResponse(message.toLowerCase());
            addMessage(response, 'bot');
        }, 500);
    }

    // Send message on button click or enter key
    sendMessage.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });

    // Add message to chat
    function addMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'user' ? 'user-message' : 'bot-message';
        messageDiv.textContent = message;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Get bot response based on user input
    function getBotResponse(input) {
        // Check for keywords in the input
        for (const [key, response] of Object.entries(botResponses)) {
            if (input.includes(key)) {
                return response;
            }
        }
        return botResponses.default;
    }

    // Notification function
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 2rem',
            backgroundColor: type === 'success' ? '#4CAF50' : '#f44336',
            color: 'white',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            zIndex: '1000',
            animation: 'slideIn 0.3s ease-out'
        });

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add necessary styles for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}); 