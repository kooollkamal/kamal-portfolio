// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks) {
            navLinks.style.display = 'none';
            if (hamburger) hamburger.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .stat').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email');
            return;
        }

        // Show success message
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Message Sent! ✓';
        btn.style.background = '#4caf50';

        // Log form data (in a real app, this would send to a server)
        console.log('Form submitted:', { name, email, message });

        // Reset form and button after 2 seconds
        setTimeout(() => {
            contactForm.reset();
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Active nav link on scroll
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

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#667eea';
        } else {
            link.style.color = '';
        }
    });
});

// Parallax effect on hero
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// Project card click handlers
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Check out this awesome project! 🚀');
    });
});

// Add ripple effect on button click
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Attach ripple effect to all buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add ripple style dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Log initialization
console.log('Portfolio loaded successfully! 🎉');
