export default function gallery() {
   const pictureInnerContainer = document.querySelector('.picture-inner-container');

   let srcGallery = [`assets/img/galery1.jpg`, `assets/img/galery2.jpg`,
      `assets/img/galery3.jpg`, `assets/img/galery4.jpg`, `assets/img/galery5.jpg`,
      `assets/img/galery6.jpg`, `assets/img/galery7.jpg`, `assets/img/galery8.jpg`,
      `assets/img/galery9.jpg`, `assets/img/galery10.jpg`, `assets/img/galery11.jpg`,
      `assets/img/galery12.jpg`, `assets/img/galery13.jpg`, `assets/img/galery14.jpg`,
      `assets/img/galery15.jpg`];

   function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
      return array;
   }
   shuffle(srcGallery);

   for (let i = 0; i < srcGallery.length; i++) {
      const img = document.createElement('img');
      img.classList.add('gallery-img')
      img.src = srcGallery[i];
      pictureInnerContainer.append(img);
   }
}