// Animate skill bars on scroll
document.addEventListener('DOMContentLoaded', function () {
    // Skill bar animation
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.progress-bar');
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth + '%';
        });
    };

    // Intersection Observer for skill bars
    const skillSection = document.querySelector('.skill-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (skillSection) {
        observer.observe(skillSection);
    }

    // Smooth scroll for hire me button
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});