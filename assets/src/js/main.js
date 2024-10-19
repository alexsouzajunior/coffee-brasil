const burger = document.querySelector('.burger');
const closeMenu = document.querySelector('.close');
const menu = document.getElementById('menu');
const overlay = document.querySelector('.overlay');
const searchIcon = document.querySelectorAll('.bx-search');
const searchInput = document.querySelectorAll('.search-input');
const buttonsFilter = document.querySelectorAll('.buttons-filter .btn');
const filterCards = document.querySelectorAll('.menu__card');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

burger.addEventListener('click', () => {
    burger.classList.add('hidden-burger');
    menu.classList.add('show-menu');
    overlay.classList.add('show-overlay');
    closeMenu.classList.add('show-icon-close');
});

closeMenu.addEventListener('click', () => {
    burger.classList.remove('hidden-burger');
    menu.classList.remove('show-menu');
    overlay.classList.remove('show-overlay');
    closeMenu.classList.remove('show-icon-close');
});

searchIcon.forEach((i) => {
    i.addEventListener('click', () => {
        searchIcon.forEach((i) => {
            i.classList.toggle('bx-x');
        });
        searchInput.forEach((search) => {
            search.classList.toggle('show');
        });
    });
});

buttonsFilter.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        buttonsFilter.forEach((buttons) => {
            buttons.classList.remove('filter-active');
        });
        buttons.classList.add('filter-active');

        const valueAttr = buttons.getAttribute('data-filter');
        filterCards.forEach((card) => {
            card.style.display = 'none';
            if (card.getAttribute('data-filter').toLowerCase() == valueAttr.toLowerCase() || valueAttr == "todos") {
                card.style.display = 'block';
            }
        });
    });
});

var swiper = new Swiper('.slider', {
    effect: 'fade',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.slide-button-next',
        prevEl: '.slide-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

var testimonials = new Swiper('.testimonials-carousel', {
    slidesPerView: 3,

    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev'
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo(0,0);
});

window.addEventListener('scroll', function() {up()})

function up() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 350) {
        backToTop.classList.add('show');
    } else{
        backToTop.classList.remove('show');
    }
}

ScrollReveal({
    distance: '20px',
    duration: 1500
});

ScrollReveal().reveal('.about__content .title', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.about__content .paragraph', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.about__container .about__image', { delay: 800, origin: 'right' });
ScrollReveal().reveal('.hero__image__content .title', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.hero__image__content .subtitle', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.buttons-filter', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.hero__section__content h2', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.hero__section__content p', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.hero__section__inner .image', { delay: 800, origin: 'right' });
ScrollReveal().reveal('.testimonials-carousel', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.contact .box-location', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.contact .box-phone', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.contact .coffee__socials', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.contact form', { delay: 600, origin: 'bottom' });