document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Observe all target elements
    const targets = document.querySelectorAll('.f1, .f2, .f3, .f4, .f5, .imobut1, .imobut2, .imobut3, .imobut4, .imobut5');
    targets.forEach(target => observer.observe(target));
});
