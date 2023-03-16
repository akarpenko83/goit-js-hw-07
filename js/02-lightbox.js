import { galleryItems } from './gallery-items.js';
// Change code below this line
// import SimpleLightbox from '/node_modules/simplelightbox/simple-lightbox.js';
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

// galleryContainer.addEventListener('click', onPictureClick)

galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({description, original, preview}) => {
        return `
        <div class="gallery">
            <a href="${original}">
                <img src="${preview}" alt="${description}" title=""/>
            </a>
        </div>
        `;
    })
    .join("");
};
 
/*
<div class="gallery">
    <a href="images/image1.jpg">
    <img src="images/thumbs/thumb1.jpg" 
        alt="" 
        title=""/></a>

    <a href="images/image2.jpg">
    <img src="images/thumbs/thumb2.jpg" 
    alt="" 
    title="Beautiful Image"/></a>
</div>
*/