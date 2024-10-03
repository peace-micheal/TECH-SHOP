let search = document.querySelector(".search-box");
let cart = document.querySelector('.cart');
let user = document.querySelector('.user');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');
const image = document.querySelector('.image');
const fadeElements = document.querySelectorAll('.fade-in');




document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle('active');
  cart.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector("#cart-icon").onclick =() => {
  cart.classList.toggle('active');
  search.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector("#user-icon").onclick =() => {
  user.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector("#menu-icon").onclick =() => {
  navbar.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  user.classList.remove('active');
}

window.onscroll = () => {
  search.classList.remove('active');
  cart.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
})

image.classList.add('zoom-in');



// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     }
//   });
// }, { threshold: 1.0 });

// fadeElements.forEach((element) => {
//   observer.observe(element);
// });





var swiper = new Swiper(".new-arrival", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 0,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});