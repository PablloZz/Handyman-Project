const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

// ============== HIDE AND SHOW ITEMS ON PAGE FOUR ============== //
const list = document.getElementById('hidden-list');
list.classList.toggle('hide');
const showListArr = document.querySelector('.show-list');
const hideListArr = document.querySelector('.hide-list');
const section = document.querySelector('section');


function showList(e) {
  if (e.target.matches('[data-show]') === true) {
    list.classList.toggle('hide');
    showListArr.setAttribute('id', 'hide');
  }
}

function hideList(e) {
  if (e.target.matches('[data-close]') === true) {
    list.classList.toggle('hide')
    showListArr.removeAttribute('id', 'hide')
  }
}

showListArr.addEventListener('click', showList);
hideListArr.addEventListener('click', hideList);

// ============== HIDE NAVIGATION BUTTONS ON FIFTH PAGE (MAX-WIDTH: 400PX) ============== //
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let wWidth = window.innerWidth;

if (wWidth <= 450) {
  prev.style.display = "none";
  next.style.display = "none";
}

if (wWidth > 450) {
  prev.style.display = "block";
  next.style.display = "block";
}

function isLess() {
  let wWidth = window.innerWidth;
  if (wWidth <= 450) {
    prev.style.display = "none";
    next.style.display = "none";
  }
}

function isMore() {
  let wWidth = window.innerWidth;
  if (wWidth > 450) {
    prev.style.display = "block";
    next.style.display = "block";
  }
}

window.addEventListener('resize', isLess)
window.addEventListener('resize', isMore)

// ============== SHOW SLIDESHOW ON THE SECOND PAGE (MAX-WIDTH: 1000PX) ============== //
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
  }

  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
}

nextSlide.addEventListener('click', plusSlide);
prevSlide.addEventListener('click', previousSlide)





