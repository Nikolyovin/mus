const swiper = new Swiper('.swiper-welcome', {
   navigation: {
      nextEl: '.swiper-button-next-welcome',
      prevEl: '.swiper-button-prev-welcome',
   },
   pagination: {
      el: '.swiper-pagination-welcome',
      clickable: true,
      dynamicBullets: true,

   },

   loop: true,
   autoplay: {
      delay: 3000,
      stopOnlastSlide: true,
      disableOnInteraction: false,
   },
   speed: 800,

});

const progressBar = document.querySelector('.progress-bar');

progressBar.addEventListener('input', function () {
   const value = this.value;
   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

const progressVolume = document.querySelector('.progress-volume');

progressVolume.addEventListener('input', function () {
   const value = this.value;
   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})


const swiperVideo = new Swiper(".swiper-video", {
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-video-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-video-button-next',
      prevEl: '.swiper-video-button-prev',
   },
});