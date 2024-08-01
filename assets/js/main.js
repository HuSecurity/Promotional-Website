// Creating Menu identity in JS
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu Show on click
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Menu hide on click of X
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Mobile Menu Removal (Responsive)
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Background border when scrolling
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// Membership Swiper
let swiperMembership = new Swiper(".membership__container", {
    loop:true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        1024: {
            spaceBetween: 50,
        }

    }
})

/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/