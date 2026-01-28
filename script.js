/* Personal Profile Website JavaScript */

// Run after page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Personal profile website loaded successfully!");

    smoothScroll();
    fadeInSections();
});

/* Smooth scroll for internal links (future ready) */
function smoothScroll() {
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}

/* Fade-in animation on scroll */
function fadeInSections() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
}
