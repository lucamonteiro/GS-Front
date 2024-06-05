let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', function() {
    showSlide(currentSlide - 1);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

// Exibindo o primeiro slide inicialmente
showSlide(0);
