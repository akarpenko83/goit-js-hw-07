import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery")

galleryContainer.addEventListener('click', onPictureClick)

galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

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
function onPictureClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return
    }
    const imgLink = evt.target.dataset.source;

    handleModalWindow(imgLink)
};
function handleModalWindow(link) {
    const instance = basicLightbox.create(`
    <img src="${link}">
    `)
    instance.show()

    document.addEventListener('keydown', evt => {
    if (evt.code !== "Escape") {
        return;
    }
        instance.close();
        document.removeEventListener('keydown', evt);
    })
};
