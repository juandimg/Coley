document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('nav ul.menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Cierra el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});

let slideIndex = 0;
setInterval(() => {
    showSlides(++slideIndex);
}, 3000); // Cambia cada 3 segundos

function showSlides(n) {
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}