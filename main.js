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

