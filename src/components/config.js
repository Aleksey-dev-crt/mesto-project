export const config = {
  popupImage: "popup_type_picture",
  popupCardAdd: "popup_type_card_add",
  popupProfile: "popup_type_profile",
  popupCloseBtn: "popup__button-close",
  cardsContainer: document.querySelector(".elements__list"),
  cardTemplate: document.querySelector("#card-template").content,
  cardElement: ".element",
  elementImage: ".element__image",
  image: document.querySelector(".popup__image"),
  popupPictureCaption: document.querySelector(".popup__picture-caption"),
  cardTitle: ".element__title",
  cardDelete: ".element__delete",
  cardLike: ".element__like",
  cardLikeActive: "element__like_active",
  popupOpened: "popup_opened",
  createPlace: document.forms.place,
  placeInputTitle: document.forms.place.elements.title,
  placeInputLink: document.forms.place.elements.link,
  editProfile: document.querySelector(".profile__edit-button"),
  profileInputName: document.forms.profile.elements.name,
  profileInputJob: document.forms.profile.elements.job,
  saveProfile: document.forms.profile,
  popupInputs: document.querySelectorAll(".popup__input"),
  inputErrorClass: "popup__input_error",
  profileTitle: document.querySelector(".profile__title"),
  profileSubTitle: document.querySelector(".profile__subtitle"),
  addPlace: document.querySelector(".profile__add-button"),

  initialCards: [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ]
}
