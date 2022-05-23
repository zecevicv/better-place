/* #Banner Slider
  ======================================================= */
if (document.querySelector('.banner .swiper')) {
  swiper = new Swiper(".banner .swiper", {
    autoplay: {
      delay: 5000,
    },
    loop: true
  });
}

/* #Post Slider
  ======================================================= */
if (document.querySelector('.post-slider .swiper')) {
  swiper = new Swiper(".post-slider .swiper", {
    centeredSlides: true,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2
      }, 
      1024: {
        slidesPerView: 4
      }
    },
    navigation: {
      nextEl: ".post-slider .next",
      prevEl: ".post-slider .prev",
    },
  });
}

/* #Reviews Slider
  ======================================================= */
if (document.querySelector('.reviews .swiper')) {
  swiper = new Swiper(".reviews .swiper", {
    centeredSlides: true,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.6
      }, 
      1024: {
        slidesPerView: 5.1
      }
    }
  });
}

/* #Post Slider 2 Sliders
  ======================================================= */
if (document.querySelector('.post-slider-2 .slider-1 .swiper') && document.querySelector('.post-slider-2 .slider-2 .swiper')) {
  const slider2 = new Swiper(".post-slider-2 .slider-2 .swiper", {
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
  });
  
  const slider1 = new Swiper(".post-slider-2 .slider-1 .swiper", {
    loop: true,
    slidesPerView: 1,
    controller: {
      control: slider2
    },
    navigation: {
      nextEl: ".post-slider-2 .slider-1 .next",
      prevEl: ".post-slider-2 .slider-1 .prev",
    },
  });
}

/* #Post Slider 3 Sliders
  ======================================================= */
if (document.querySelector('.post-slider-3 .slider-1 .swiper') && document.querySelector('.post-slider-3 .slider-2 .swiper')) {
  const slider2 = new Swiper(".post-slider-3 .slider-2 .swiper", {
    loop: true,
    slidesPerView: 2,
    allowTouchMove: false,
  });
  
  const slider1 = new Swiper(".post-slider-3 .slider-1 .swiper", {
    loop: true,
    slidesPerView: 1,
    controller: {
      control: slider2
    },
    navigation: {
      nextEl: ".post-slider-3 .slider-1 .next",
      prevEl: ".post-slider-3 .slider-1 .prev",
    },
  });
}