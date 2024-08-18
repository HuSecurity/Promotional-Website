// Creating Menu identity in JS
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu Show on click
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hide on click of X
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Mobile Menu Removal (Responsive)
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Background border when scrolling
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// Membership Swiper
let swiperMembership = new Swiper(".membership-container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 50,
    },
  },
});

// Mixitup Filtered Featured

// Link Activated

// Show Scroll Up

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(".home-title, .membership-container, .features-container");
sr.reveal(".home-subtitle", { delay: 500 });
sr.reveal('.home-elec', {delay: 600})
sr.reveal('.home-img', {delay: 800})
sr.reveal('.home-car-data', {delay: 900, interval: 100, origin: 'bottom',  })
sr.reveal('.home-button', {delay: 1000, origin: 'bottom',  })
sr.reveal('.about-group, .offer-data', {origin: 'left'})
sr.reveal('.about-data, .offer-img', {origin: 'right'})
sr.reveal('.features-map', {delay: 600,origin: 'bottom'})
sr.reveal('.features-card', {interval: 300})
sr.reveal('.footer-content', {interval: 100})