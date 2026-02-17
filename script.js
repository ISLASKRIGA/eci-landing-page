document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Booking Modal Logic
    const modal = document.getElementById("bookingModal");
    const openBtns = document.querySelectorAll(".open-modal-btn");
    const closeBtn = document.querySelector(".close-modal");

    openBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Simple Fade-in Animation on Scroll (Existing code below, making sure it executes)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, ob) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                ob.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Targets to animate
    const animateTargets = document.querySelectorAll('.hero-content, .logo-grid, .agitation h2, .agitation-headline, .agitation-body, .card, .scarcity-content, .testimonials, .guarantee-box');
    animateTargets.forEach(target => {
        target.classList.add('fade-in-section');
        observer.observe(target);
    });
});
