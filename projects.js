let slideInterval;

function showSlide(card, index) {
  const slides = card.querySelectorAll(".slide");
  const projectItems = card.querySelectorAll(".project-item");

  slides.forEach((slide) => (slide.style.display = "none"));
  projectItems.forEach((item) => (item.style.display = "none"));

  slides[index].style.display = "block";
  projectItems[index].style.display = "block";
}

function nextSlide(card) {
  const slides = card.querySelectorAll(".slide");
  let currentSlide = Array.from(slides).findIndex(
    (slide) => slide.style.display === "block"
  );

  if (currentSlide !== undefined) {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }
}

function prevSlide(card) {
  const slides = card.querySelectorAll(".slide");
  let currentSlide = Array.from(slides).findIndex(
    (slide) => slide.style.display === "block"
  );

  if (currentSlide !== undefined) {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }
}

function startSlide(card) {
  slideInterval = setInterval(() => nextSlide(card), 5000);
}

function stopSlide() {
  clearInterval(slideInterval);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".project-card").forEach((card) => {
    showSlide(card, 0);

    card
      .querySelector(".right-button")
      .addEventListener("click", () => nextSlide(card));
    card
      .querySelector(".left-button")
      .addEventListener("click", () => prevSlide(card));

    card.addEventListener("mouseover", () => startSlide(card));
    card.addEventListener("mouseout", stopSlide);
  });
});
