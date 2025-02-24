document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const sliderItems = document.querySelectorAll(".slider-item");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".slider-dots");

  let currentIndex = 0;

  // Create dots
  sliderItems.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add(index === 0 ? "active" : "");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("button");

  const updateSlider = () => {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  const goToSlide = (index) => {
    currentIndex = index;
    updateSlider();
  };

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
  });
});
