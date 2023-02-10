import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
console.log(galleryList);

galleryList.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<div class="gallery__item">
      <a class="gallery__link" href="${current.value}">
        <img
          class="gallery__image"
          src="${current.preview}"
          data-source="${current.original}"
          alt="${current.description}"
        />
      </a>
    </div>`,
  ""
);
galleryList.addEventListener(`click`, onOpenModal);
function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) return;
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
