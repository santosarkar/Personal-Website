// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const backToTopBtn = document.querySelector('.back-to-top');
const skillBars = document.querySelectorAll('.skill-progress');
const animateElements = document.querySelectorAll('.animate-text, .animate-icon');
const counters = document.querySelectorAll('.counter');
const timelineItems = document.querySelectorAll('.timeline-content');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.querySelector('.contact-form');
const submitBtn = document.querySelector('.submit-btn');
const socialIcons = document.querySelectorAll('.social-icon');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    // Add scrolled class to navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
    
    // Animate skill bars when in view
    animateSkillBars();
    
    // Animate elements when in view
    animateOnScroll();
    
    // Animate counters when in view
    animateCounters();
    
    // Animate timeline items when in view
    animateTimelineItems();
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars when in viewport
function animateSkillBars() {
    skillBars.forEach(skillBar => {
        const skillPosition = skillBar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (skillPosition < screenPosition) {
            const width = skillBar.getAttribute('data-width');
            skillBar.style.width = width + '%';
        }
    });
}

// Animate elements when they come into view
function animateOnScroll() {
    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            const animation = element.getAttribute('data-animation');
            const delay = element.getAttribute('data-delay') || '0s';
            
            element.style.animation = `${animation} 1s ease ${delay} forwards`;
        }
    });
}

// Animate counters when in view
function animateCounters() {
    counters.forEach(counter => {
        const counterPosition = counter.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (counterPosition < screenPosition && !counter.classList.contains('animated')) {
            const target = parseInt(counter.getAttribute('data-count'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                    counter.classList.add('animated');
                }
            };
            
            updateCounter();
        }
    });
}

// Animate timeline items when in view
function animateTimelineItems() {
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
            item.style.animationPlayState = 'running';
        }
    });
}

// Add hover effects to project cards
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Form submission with animation
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Animate submit button
        submitBtn.style.transform = 'scale(0.95)';
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Simulate sending message
        setTimeout(() => {
            // Show success message
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.backgroundColor = '#4CAF50';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                submitBtn.style.backgroundColor = '';
                submitBtn.style.transform = '';
            }, 2000);
            
            // Reset form
            this.reset();
        }, 1500);
    });
}

// Add animation to social icons
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0)';
    });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial animations
    animateOnScroll();
    animateTimelineItems();
    
    // Add animation delays to animate-text elements
    const animateTextElements = document.querySelectorAll('.animate-text');
    animateTextElements.forEach((element, index) => {
        const delay = element.getAttribute('data-delay') || (index * 0.2) + 's';
        element.style.animationDelay = delay;
    });
    
    // Add animation delays to animate-icon elements
    const animateIconElements = document.querySelectorAll('.animate-icon');
    animateIconElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add floating animation to background elements with random delays
    const floatingElements = document.querySelectorAll('.floating-circle, .floating-square, .floating-triangle');
    floatingElements.forEach(element => {
        const randomDelay = Math.random() * 5;
        element.style.animationDelay = `${randomDelay}s`;
    });
    
    // Typewriter effect
    const typewriterText = document.querySelector('.typewriter-text');
    if (typewriterText) {
        const text = typewriterText.textContent;
        typewriterText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typewriterText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Reset and start again after 3 seconds
                setTimeout(() => {
                    i = 0;
                    typewriterText.textContent = '';
                    typeWriter();
                }, 3000);
            }
        };
        
        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add parallax effect to floating icons
    window.addEventListener('mousemove', (e) => {
        const floatingIcons = document.querySelectorAll('.floating-icon');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingIcons.forEach((icon, index) => {
            const speed = 0.02 + (index * 0.01);
            const x = (mouseX * speed * 100) - 50;
            const y = (mouseY * speed * 100) - 50;
            
            icon.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});