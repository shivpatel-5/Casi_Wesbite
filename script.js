// CASI TMU Website Logic

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOBILE NAVIGATION ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle Flex display or class
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(5,5,5,0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid #333';
            }
        });
    }

    // --- 2. SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // --- 3. SCROLL ANIMATIONS (Intersection Observer) ---
    // This watches for elements with 'fade-in-up' or 'fade-in-left' 
    // and resets/plays animation when they come into view if needed,
    // or simply lets them play once on load (CSS animation handles load).
    // For scroll-triggered animations on other sections:

    const observerOptions = {
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Select grid items that should animate in
    const cards = document.querySelectorAll('.event-card, .mission-content > div');
    cards.forEach(card => {
        // Set initial state for JS animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        scrollObserver.observe(card);
    });

});
