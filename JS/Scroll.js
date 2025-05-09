let previousScrollPosition = window.pageYOffset;
const navbar = document.getElementById("navbar");
const backToTopButton = document.getElementById("back-to-top");
const float_button = document.getElementById("openModal");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  // Navbar hide/show on scroll
  if (previousScrollPosition > currentScrollPosition) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-68px";
  }
  previousScrollPosition = currentScrollPosition;

  // Show/hide Back to Top button
  if (currentScrollPosition > 300) {
    backToTopButton.style.opacity = "1";
    backToTopButton.style.visibility = "visible";
    float_button.style.right = "90px"
  } else {
    backToTopButton.style.opacity = "0";
    backToTopButton.style.visibility = "hidden";
    float_button.style.right = "30px"
  }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.getElementById("openModal").onclick = function () {
  document.getElementById("myModal").style.display = "block";
};

// إغلاق المودال
document.getElementById("closeModal").onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

// كمان لو ضغط بره المودال يقفله
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};