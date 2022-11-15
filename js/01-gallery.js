import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const imgGalleryRef = CreateAndRenderMarkupGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', imgGalleryRef);
function CreateAndRenderMarkupGallery(galleryItems) {
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
        </div >
`;
    })
      .join('');
};

galleryRef.addEventListener('click', onImageGallaryClick);
function onImageGallaryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
    return
    };
    const modalWindow = basicLightbox.create(`
    <img src = "${event.target.dataset.source}"> width = "800" height = "600"
    `);
    modalWindow.show();
    console.log(event);
};
