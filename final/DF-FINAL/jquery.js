/*--------CHANGING BG COLOR IN NAVBAR--------*/

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("nav").addClass("bgcolor");
      $("nav").addClass("new-wrapper");

      $(".nav-link").addClass("new-color");
      $(".navbar-brand").addClass("new-brand");
      $(".navbar-toggler").addClass("new-toggler");
    } else {
      $("nav").removeClass("bgcolor");
      $("nav").removeClass("new-wrapper");
      $(".nav-link").removeClass("new-color");
      $(".navbar-brand").removeClass("new-brand");
      $(".navbar-toggler").removeClass("new-toggler");
    }
  });
});

//CAROUSEL
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".carousel-button--left");
const nextButton = document.querySelector(".carousel-button--right");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

//arranging the slides next to one another
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//moving slides
const moveToSlides = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
// moving indicators
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};
//moving slide to right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;

  //move to next slide
  moveToSlides(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});

//moving the slide to left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;

  //move to next slide
  moveToSlides(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});

//nav indicators move uopn slides-------------------------------------------------

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlides(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
