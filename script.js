// Secure typing effect with textContent to prevent XSS
const text = "Full Stack Developer";
const typingElement = document.getElementById("typing");

let index = 0;
let displayText = "";

function typeEffect() {
    if (index < text.length) {
        // Use safe string concatenation
        displayText += text.charAt(index);
        
        // Use textContent instead of innerHTML for security (prevents XSS)
        if (typingElement) {
            typingElement.textContent = displayText;
        }
        
        index++;
        setTimeout(typeEffect, 100);
    }
}

// Ensure DOM is ready before executing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', typeEffect);
} else {
    typeEffect();
}