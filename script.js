document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".animated-image");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    images.forEach(image => observer.observe(image));
});
