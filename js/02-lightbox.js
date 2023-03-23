import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")


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
 

    let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });


    