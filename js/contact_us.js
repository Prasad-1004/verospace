const toggle = document.getElementById("burger");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");

toggle.addEventListener("click", () => {
  navLeft.classList.toggle("active");
  navRight.classList.toggle("active");
});

// FAQ Section

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question, index) => {
    question.addEventListener("click", function () {
      const faqItem = faqItems[index];
      const isActive = faqItem.classList.contains("active");

      // Close all other FAQ items
      faqItems.forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
        }
      });

      // Toggle current FAQ item
      if (isActive) {
        faqItem.classList.remove("active");
      } else {
        faqItem.classList.add("active");
      }
    });

    // Handle keyboard navigation
    question.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        question.click();
      }
    });
  });

  // Handle escape key to close all dropdowns
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      faqItems.forEach((item) => {
        item.classList.remove("active");
      });
    }
  });
});
