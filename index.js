const swiper = new Swiper('.swiper', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,

   },
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