const slides = document.getElementsByClassName(".slide");
const dotsContainer = document.querySelector(".dot-navigation");
let currentSlide = 0;
let slideInterval;

slides[currentSlide].classList.add("active");

slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot-navigation-item");
    dot.addEventListener("click", () => navigateToSlide(index));
    dotsContainer.appendChild(dot);
});

function navigateToSlide(index) {
    clearInterval(slideInterval);

    slides.forEach((slide) => slide.classList.remove("active"));
    const dots = dotsContainer.querySelectorAll(".dot-navigation-item");
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;

    slideInterval = setInterval(nextSlide, 3000);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    navigateToSlide(currentSlide);
}
