// Case Studies Data
const caseStudies = {
    'gamification': {
        title: 'Gamification for User Retention',
        subtitle: 'How We Turned Retention Struggles into a 25% Growth Story',
        category: 'Retention',
        metrics: [
            { value: '25%', label: 'Growth in Retention' },
            { value: '60%', label: 'Higher Engagement' }
        ],
        challenge: `Imagine putting in all the effort to acquire new users, only to see them disappear after a few days. That was exactly what our client was facing. Users would sign up, explore the platform briefly, and then abandon it, leading to stagnant growth and high churn rates.`,
        solution: {
            overview: 'We needed to make staying engaged irresistible. The answer? A 14-day gamified habit-tracking system.',
            points: [
                'Daily Milestones: Small, achievable challenges to create momentum',
                'Achievement Badges: Tangible rewards to boost motivation',
                'Incentivized Rewards: Digital monetary incentives to keep users coming back'
            ]
        },
        impact: [
            '25% increase in user retention',
            'Higher in-app purchase conversions',
            'Increased lifetime value of customers'
        ],
        takeaway: 'Gamification isn't just fun—it's a powerful business tool that turns engagement into long-term growth and profitability.'
    },
    'post-purchase': {
        title: 'Boosting Post-Purchase Engagement & Subscription Renewals',
        subtitle: 'Keeping Customers Hooked After Purchase',
        category: 'Engagement',
        metrics: [
            { value: '45%', label: 'Engagement Increase' },
            { value: '40%', label: 'Higher Renewals' }
        ],
        challenge: 'Our client struggled with low repeat purchases and a dip in renewal rates because there was no structured post-purchase experience.',
        solution: {
            overview: 'We crafted a highly engaging post-purchase journey using modern communication channels.',
            points: [
                'WhatsApp Business API (WABA): Personalized messages with order confirmations, reminders, and exclusive offers',
                'Follow-Up Calls: Meaningful conversations that built trust and provided direct customer support',
                'Automated Engagement System: Timely triggers for maximum impact'
            ]
        },
        impact: [
            '40%-45% increase in post-purchase engagement',
            'Higher renewal rates',
            'Increased cross-selling opportunities'
        ],
        takeaway: 'A great product isn't enough—staying connected with customers post-purchase is what turns them into loyal, high-value users.'
    },
    'unified-cart': {
        title: 'Enhancing Conversions & Cart Value Through a Unified Cart System',
        subtitle: 'From Checkout Chaos to Higher Conversions',
        category: 'Conversion',
        metrics: [
            { value: '30%', label: 'Cart Value Increase' },
            { value: '15%', label: 'Conversion Boost' }
        ],
        challenge: 'Users were abandoning their carts because the system forced them to complete multiple checkouts for different product categories.',
        solution: {
            overview: 'We streamlined the shopping experience with a Unified Cart System.',
            points: [
                'Single Checkout Process: Users could add products from different categories into one cart',
                'Wallet System with Cashback: Incentives for repeat purchases',
                'Optimized Checkout Flow: Reduced friction and abandoned carts'
            ]
        },
        impact: [
            '20%-30% increase in cart value',
            '15% boost in conversion rates',
            'Higher repeat purchases'
        ],
        takeaway: 'A smoother shopping experience = happier customers and more revenue. Simple changes can create a massive ROI impact.'
    },
    'ai-assistant': {
        title: 'Smart AI Assistant for Healthcare Providers',
        subtitle: 'How AI Transformed Patient Engagement',
        category: 'AI Solution',
        metrics: [
            { value: '30%', label: 'Faster Response' },
            { value: '40%', label: 'Staff Efficiency' }
        ],
        challenge: 'Healthcare providers were overwhelmed by patient queries, causing slow response times and staff burnout.',
        solution: {
            overview: 'We introduced a Smart AI Assistant powered by ChatGPT API.',
            points: [
                'Instant AI-Powered Responses: Answering routine queries in real time',
                'Smart Case Routing: Categorizing urgent vs. non-urgent queries',
                'Continuous Learning: AI refined its responses based on feedback'
            ]
        },
        impact: [
            '30% Faster Response Rate',
            'Higher Engagement & Compliance',
            'Optimized Provider Efficiency'
        ],
        takeaway: 'This AI-powered assistant transformed patient interactions, making healthcare more efficient, responsive, and engaging.'
    }
};

// DOM Elements
const modal = document.getElementById('caseStudyModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');
const filterButtons = document.querySelectorAll('.filter-btn');
const caseStudyCards = document.querySelectorAll('.case-study-card');

// Filter Functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter cards
        caseStudyCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Modal Functionality
function openCaseStudy(id) {
    const study = caseStudies[id];
    if (!study) return;
    
    const content = `
        <div class="case-study-full">
            <div class="case-study-header">
                <span class="category-tag">${study.category}</span>
                <div class="metrics">
                    ${study.metrics.map(metric => `
                        <div class="metric">
                            <span class="metric-value">${metric.value}</span>
                            <span class="metric-label">${metric.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <h2>${study.title}</h2>
            <p class="subtitle">${study.subtitle}</p>
            
            <div class="case-study-section">
                <h3><i class="fas fa-exclamation-circle"></i> The Challenge</h3>
                <p>${study.challenge}</p>
            </div>
            
            <div class="case-study-section">
                <h3><i class="fas fa-lightbulb"></i> The Solution</h3>
                <p>${study.solution.overview}</p>
                <ul>
                    ${study.solution.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
            
            <div class="case-study-section">
                <h3><i class="fas fa-chart-line"></i> The Impact</h3>
                <ul>
                    ${study.impact.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
            
            <div class="case-study-section">
                <h3><i class="fas fa-star"></i> Key Takeaway</h3>
                <p>${study.takeaway}</p>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal functionality
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add animation classes to cards on load
document.addEventListener('DOMContentLoaded', () => {
    caseStudyCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 100);
    });
}); 