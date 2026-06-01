// ================================================================
// PROFESSIONAL PORTFOLIO - JAVASCRIPT
// Enhanced Interactivity & Form Handling
// ================================================================

// Typing Effect Animation
const typeText = "Full Stack Developer & AI Enthusiast";
const typingElement = document.getElementById("typing");
let typeIndex = 0;
let displayText = "";

function startTypingEffect() {
    if (typeIndex < typeText.length) {
        displayText += typeText.charAt(typeIndex);
        
        // Use safe textContent to prevent XSS
        if (typingElement) {
            typingElement.textContent = displayText;
        }
        
        typeIndex++;
        setTimeout(startTypingEffect, 80);
    }
}

// Initialize typing effect when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startTypingEffect);
} else {
    startTypingEffect();
}

// ================================================================
// SMOOTH SCROLLING & NAVIGATION
// ================================================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// ================================================================
// NAVBAR INTERACTIONS
// ================================================================

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Hamburger menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (navLinks) {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            hamburger.classList.toggle('active');
        }
    });
}

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#2563eb';
        } else {
            link.style.color = '';
        }
    });
});

// ================================================================
// FORM HANDLING
// ================================================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    // Get form values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();
    
    // Validation
    if (!name || !email || !subject || !message) {
        showAlert('error', 'Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAlert('error', 'Please enter a valid email address');
        return;
    }
    
    if (message.length < 10) {
        showAlert('error', 'Message must be at least 10 characters long');
        return;
    }
    
    // Simulate form submission
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate API call
    setTimeout(() => {
        // In production, send to backend
        console.log('Form submitted:', { name, email, subject, message });
        
        // Success response
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent Successfully!';
        submitBtn.style.background = '#10b981';
        
        showAlert('success', 'Thank you! Your message has been sent successfully.');
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 2000);
    }, 1500);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Alert notification system
function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="alert-close">&times;</button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Trigger animation
    setTimeout(() => alertDiv.classList.add('show'), 10);
    
    // Close functionality
    const closeBtn = alertDiv.querySelector('.alert-close');
    closeBtn.addEventListener('click', () => {
        alertDiv.classList.remove('show');
        setTimeout(() => alertDiv.remove(), 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => alertDiv.remove(), 300);
    }, 5000);
}

// Add alert styles dynamically
const alertStyles = `
    .alert {
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 2000;
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
        font-weight: 600;
    }
    
    .alert.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .alert-success {
        border-left: 5px solid #10b981;
        color: #10b981;
    }
    
    .alert-success i {
        font-size: 1.3rem;
    }
    
    .alert-error {
        border-left: 5px solid #ef4444;
        color: #ef4444;
    }
    
    .alert-error i {
        font-size: 1.3rem;
    }
    
    .alert-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 12px;
        opacity: 0.6;
        transition: opacity 0.3s;
    }
    
    .alert-close:hover {
        opacity: 1;
    }
    
    @media (max-width: 480px) {
        .alert {
            right: 10px;
            left: 10px;
            transform: translateY(-400px);
        }
        
        .alert.show {
            transform: translateY(0);
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = alertStyles;
document.head.appendChild(styleSheet);

// ================================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards for fade-in animation
document.querySelectorAll('.card, .project-card, .experience-card, .education-card, .stat-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});

// ================================================================
// PROJECT LINKS HANDLER
// ================================================================

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showAlert('success', 'Project link feature coming soon!');
    });
});

// ================================================================
// PARALLAX EFFECT
// ================================================================

const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// ================================================================
// PERFORMANCE OPTIMIZATION
// ================================================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================================================
// INITIALIZATION
// ================================================================

console.log('✨ Welcome to A B Kamal Portfolio');
console.log('📧 Contact: kooollkamal@gmail.com');
console.log('🔗 GitHub: https://github.com/kooollkamal');
