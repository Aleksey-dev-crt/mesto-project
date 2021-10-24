import { config } from "./config";
import { openPopup, closePopup } from "./modal";

const createCard = (cardData) => {
  const cardElement = config.cardTemplate.querySelector(config.cardElement).cloneNode(true);
  const elementImage = cardElement.querySelector(config.elementImage);
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  elementImage.addEventListener("click", () => {
    const image = config.image;
    image.src = cardData.link;
    image.alt = cardData.name;
    config.popupPictureCaption.textContent = cardData.name;
    openPopup(document.querySelector(`.${config.popupImage}`));
  });
  cardElement.querySelector(config.cardTitle).textContent = cardData.name;
  cardElement
    .querySelector(config.cardDelete)
    .addEventListener("click", event => event.target.parentElement.remove());
  cardElement
    .querySelector(config.cardLike)
    .addEventListener("click", event => event.target.classList.toggle(config.cardLikeActive));
  return cardElement;
}

const addCard = () => {
  const newCard = {};
  newCard.name = config.placeInputTitle.value;
  newCard.link = config.placeInputLink.value;
  config.cardsContainer.prepend(createCard(newCard));
  config.createPlace.reset();
  closePopup(document.querySelector(`.${config.popupCardAdd}`));
}

const initial = (data, container) => {
  data.forEach(card => container.append(createCard(card)));
}

export {createCard, addCard, initial};








