// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const refs = {
  galleryContainer: document.querySelector('.gallery'),
  image: document.createElement('img'),
    imageItem: document.querySelectorAll('.gallery__item'),


}

const createGalleryItem = ({ preview, original, description }) =>

    `
  <a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt='${description}';
      />
  </a>
`;

// alt=${description }
const galleryCreate = galleryItems.reduce((acc, item) =>
  acc + createGalleryItem(item), "");


refs.galleryContainer.insertAdjacentHTML('afterbegin', galleryCreate);

 new SimpleLightbox('.gallery .gallery__item', {
    // captionSelector: "image",
    // captionSelector:returnAlt(),
    
    captionsData: 'alt',
  captionPosition: "bottom",
    captionDelay: 250
    
});
