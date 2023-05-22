// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
            </li>`;
    })
    .join('');
}

gallery.innerHTML = createGalleryItemsMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom'
});


console.log(galleryItems);
