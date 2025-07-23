// ================================
// MOLINA ARJAY - FUTURISTIC PORTFOLIO SCRIPTS
// ================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functions
    initNavbar();
    initAnimations();
    initSkillBars();
    initProjectFilter();
    initContactForm();
    initScrollEffects();
    
    // Add welcome message
    console.log('🚀 Molina Arjay Portfolio Loaded Successfully!');
});

// ================================
// NAVBAR FUNCTIONALITY
// ================================
function initNavbar() {
    const navbar = document.querySelector('.futuristic-nav');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 12, 16, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 255, 247, 0.2)';
        } else {
            navbar.style.background = 'rgba(11, 12, 16, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scroll for anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ================================
// ANIMATIONS
// ================================
function initAnimations() {
    // Typing animation for hero text
    const typingText = document.querySelector('.typing-animation');
    if (typingText) {
        setTimeout(() => {
            typingText.style.opacity = '1';
        }, 500);
    }
    
    // Floating animation for shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 2}s`;
    });
    
    // Profile image glow effect
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(0, 255, 247, 0.8)';
        });
        
        profileImg.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 30px rgba(0, 255, 247, 0.5)';
        });
    }
}

// ================================
// SKILL BARS ANIMATION
// ================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !bar.classList.contains('animated')) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
                bar.classList.add('animated');
                
                // Add glow effect
                setTimeout(() => {
                    bar.style.boxShadow = '0 0 20px rgba(0, 255, 247, 0.6)';
                }, 1000);
            }
        });
    };
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
}

// ================================
// PROJECT FILTERING
// ================================
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ================================
// CONTACT FORM
// ================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!firstName || !lastName || !email || !subject || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Success state
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #39ff14, #00fff7)';
                
                // Show success message
                showNotification(`Thank you ${firstName}! Your message has been sent successfully.`, 'success');
                
                // Log form data to console (for testing)
                console.log('Form submitted:', {
                    firstName, lastName, email, subject, message
                });
                
                // Reset form
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
                
            }, 2000);
        });
    }