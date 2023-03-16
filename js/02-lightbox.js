import { galleryItems } from './gallery-items.js';
// Change code below this line
// import SimpleLightbox from '/node_modules/simplelightbox/simple-lightbox.js';
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

galleryContainer.addEventListener('click', onPictureClick)

galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({description, original, preview}) => {
        return `
        <div class="gallery">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
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
         handleModalWindow()
};
function handleModalWindow() {
    let gallery = new SimpleLightbox('.gallery a');
    
    gallery.defaultOptions.captionsData = "alt";
    console.log("🚀 ~ gallery.defaultOptions.captionsData:", gallery.defaultOptions.captionsData)

    gallery.defaultOptions.captionDelay = 250;
    console.log("🚀 ~ gallery.defaultOptions.captionDelay:", gallery.defaultOptions.captionDelay)
  };

    