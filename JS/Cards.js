// script.js
const carouselInner = document.querySelector(".carousel-inner");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const scrollBar = document.getElementById("scrollBar");

let activeIndex = 0; // Track the first visible card index
const totalCards = document.querySelectorAll(".custom-card").length;
const cardsToShow = 5; // Number of cards visible at once
const cardWidth = document.querySelector(".custom-card").offsetWidth + 16; // Include margin
let isDragging = false;
let startX;
let scrollLeft;

// Scrolls the carousel
function updateCarousel(direction) {
  if (direction === "next") {
    activeIndex = (activeIndex + 1) % totalCards; // Loop back to the start
  } else if (direction === "prev") {
    activeIndex = (activeIndex - 1 + totalCards) % totalCards; // Loop back to the end
  }

  const offset = -activeIndex * cardWidth;
  carouselInner.style.transform = `translateX(${offset}px)`;
  updateScrollbar();
}

// Update scrollbar position
function updateScrollbar() {
  const scrollPercentage = (activeIndex / (totalCards - cardsToShow)) * 100;
  scrollBar.querySelector('::before').style.left = `${scrollPercentage}%`;
}

// Start scrolling on hover
function startScroll(direction) {
  scrollInterval = setInterval(() => updateCarousel(direction), 300);
}

// Stop scrolling on mouseout
function stopScroll() {
  clearInterval(scrollInterval);
}

// Event listeners for buttons
nextBtn.addEventListener("mouseover", () => startScroll("next"));
nextBtn.addEventListener("mouseout", stopScroll);

prevBtn.addEventListener("mouseover", () => startScroll("prev"));
prevBtn.addEventListener("mouseout", stopScroll);

// Event listeners for scrollbar
scrollBar.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollLeft = carouselInner.offsetLeft;
  scrollBar.classList.add("dragging");
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.pageX - startX;
  const maxScroll = carouselInner.scrollWidth - carouselInner.clientWidth;
  const percentage = (x / maxScroll) * 100;
  carouselInner.style.transform = `translateX(-${percentage}%)`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  scrollBar.classList.remove("dragging");
});

// Initialize scrollbar position
updateScrollbar();