/* #Banner Slider
  ======================================================= */
if (document.querySelector('.banner .swiper')) {
  swiper = new Swiper(".banner .swiper", {
    autoplay: {
      delay: 5000,
    },
    loop: true,
    effect: 'fade'
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
    effect: 'fade'
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

/* #Process Experience
  ======================================================= */
if (document.querySelector('.process-experience')) {
  const processExperience = document.querySelector('.process-experience');
  const collapsibles = processExperience.querySelectorAll('.collapsible');

  processExperience.addEventListener('click', (e) => {
    let marker = 0;

    collapsibles.forEach((collapsible, index) => {
      collapsible.classList.remove('show-as-active')
    });

    collapsibles.forEach((collapsible, index) => {
      if (index > 0 && collapsible.classList.contains('show')) {
        const i = index;

        collapsibles.forEach((collapsible, ind) => {
          if (ind > i) {} else {
            collapsible.classList.add('show-as-active')
          }
        });
      }

      if (collapsible.classList.contains('show')) {
        marker++;
      } else {}
    })

    if (marker < 1) {
      processExperience.classList.add('show-first');
    } else {
      processExperience.classList.remove('show-first');
    }
  })
}

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
  easing: 'ease-out-quart'
});

/* #Post Slider 4
    ======================================================= */
if (document.querySelector('.post-slider-4 .swiper')) {
  new Swiper(".post-slider-4 .swiper", {
    loop: true,
    navigation: {
      nextEl: ".post-slider-4 .next",
      prevEl: ".post-slider-4 .prev",
    },
    breakpoints:{
      0: {
        slidesPerView: 1.1,
        centeredSlides: false
      },
      1024: {
        slidesPerView: 1.6,
        centeredSlides: true
      }
    }
  });
}

/* #Numbers Banner
    ======================================================= */
if (document.querySelector('.numbers-banner .swiper')) {
  new Swiper(".numbers-banner .swiper", {
    navigation: {
      nextEl: ".numbers-banner .next",
      prevEl: ".numbers-banner .prev",
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });
}

/* #Post Slider 5
    ======================================================= */
if (document.querySelector('.post-slider-5 .swiper')) {
  new Swiper(".post-slider-5 .swiper", {
    breakpoints:{
      0: {
        slidesPerView: 1.4,
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
}

/* #Post Slider 6
    ======================================================= */
if (document.querySelector('.post-slider-6 .swiper')) {
  new Swiper(".post-slider-6 .swiper", {
    breakpoints:{
      0: {
        slidesPerView: 1.4,
      },
      1024: {
        slidesPerView: 3.5
      }
    }
  });
}

/* #Customer Stories Banner
    ======================================================= */
if (document.querySelector('.customer-stories-banner .swiper')) {
  new Swiper(".customer-stories-banner .swiper", {
    slidesPerView: 1,
    pagination: {
      el: ".customer-stories-banner .swiper-pagination",
    },
  });
}