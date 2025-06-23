const toggle = document.getElementById("burger");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");

toggle.addEventListener("click", () => {
  navLeft.classList.toggle("active");
  navRight.classList.toggle("active");
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Sort buttons
const sortButtons = document.querySelectorAll(".sort-btn");
sortButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    sortButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Pagination
const paginationButtons = document.querySelectorAll(".pagination button");
paginationButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent !== "←" && btn.textContent !== "→") {
      paginationButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    }
  });
});
