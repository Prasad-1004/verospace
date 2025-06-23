const toggle = document.getElementById("burger");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");

toggle.addEventListener("click", () => {
  navLeft.classList.toggle("active");
  navRight.classList.toggle("active");
});

// Experts Section

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // Mobile (1 card)
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },
      // Small screens (2 cards)
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // Medium screens (3 cards)
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // Large screens (4 cards)
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });
});

// Companies Section

document.addEventListener('DOMContentLoaded', function() {
  const trustedSwiper = new Swiper('.trusted-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    speed: 5000, // Adjust speed here (lower = faster)
    autoplay: {
      delay: 0, // Immediate transition
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
      640: {
        spaceBetween: 25,
      },
      1024: {
        spaceBetween: 30,
      }
    }
  });
});
