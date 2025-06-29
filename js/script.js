

const burgerCheckbox = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const body = document.body;
let isAnimating = false;

burgerCheckbox.addEventListener("change", function () {
  if (isAnimating) return;

  if (this.checked) {
    // Open menu fullscreen
    isAnimating = true;
    body.classList.add("menu-open");
    mobileMenu.classList.remove("closing");
    mobileMenu.classList.add("active");

    setTimeout(() => {
      isAnimating = false;
    }, 800);
  } else {
    // Close menu
    isAnimating = true;
    body.classList.remove("menu-open");
    mobileMenu.classList.add("closing");
    mobileMenu.classList.remove("active");

    setTimeout(() => {
      isAnimating = false;
    }, 800);
  }
});

// Close menu when clicking on a link
const mobileNavLinks = document.querySelectorAll(
  ".mobile-nav-item .nav-link, .mobile-nav-item .login-btn"
);
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerCheckbox.checked = false;
    body.classList.remove("menu-open");
    mobileMenu.classList.add("closing");
    mobileMenu.classList.remove("active");
  });
});










