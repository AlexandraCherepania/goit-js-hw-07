import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
const lightboxRef = document.querySelector(".gallery");
const lightboxMarkup = createBoxItem(galleryItems);
lightboxRef.insertAdjacentHTML(`afterbegin`, lightboxMarkup);


function createBoxItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div >`;
    })
      .join('');
};

lightboxRef.addEventListener("click", onBoxRefClick);


function onBoxRefClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}