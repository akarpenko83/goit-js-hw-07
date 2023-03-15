import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery")


galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

galleryContainer.addEventListener('clic', onPictureClick)

function onPictureClick(evt) {
    evt.preventDefault();
    console.log(evt.currentTarget);
};

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({description, original, preview}) => {
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
        </div>
        `;
    })
    .join("");
 };

