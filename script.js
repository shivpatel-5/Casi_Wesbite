document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOBILE NAVIGATION ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
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
                target.scrollIntoView({ behavior: 'smooth' });
                if (window.innerWidth <= 768 && navLinks) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // --- 3. TEAM TOGGLE DROPDOWN ---
    const teamBtn = document.getElementById('team-toggle-btn');
    const extraTeam = document.getElementById('extra-team');

    if (teamBtn && extraTeam) {
        teamBtn.addEventListener('click', () => {
            const isOpen = extraTeam.classList.toggle('is-open');
            teamBtn.classList.toggle('active');

            if (isOpen) {
                teamBtn.innerHTML = `Show Less <i class="fas fa-chevron-down"></i>`;
            } else {
                teamBtn.innerHTML = `Show All Members <i class="fas fa-chevron-down"></i>`;
                // Scroll back to the top of the team section for better user experience
                document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // --- 4. SCROLL ANIMATIONS ---
    const observerOptions = { threshold: 0.1 };
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.event-card, .mission-content > div');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        scrollObserver.observe(el);
    });

});
