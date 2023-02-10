import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
console.log(galleryList);

const markUp = galleryItems
  .map(
    (el) =>
      `
  <a class="gallery__item" href="${el.original}">
    <img
     class="gallery__image"
   src="${el.preview}"
      data-source="${el.original}"
       alt="${el.description}">
</a>
`
  )
  .join("");
galleryList.insertAdjacentHTML(`beforeend`, markUp);
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
