import { createCard, deleteCard, likeCard } from "./components/card";
import { openModal, closeModal } from "./components/modal";
import "./pages/index.css";
import headerLogoImg from "./images/logo.svg";
import { clearValidation, enableValidation } from "./components/validation";
import {
  getInitialCards,
  getProfileName,
  patchProfileName,
  postAvatarImage,
  postInitialCard,
} from "./components/api";
//DOM узлы
const addPlacesBtn = document.querySelector(".profile__add-button");
const profileImage = document.querySelector(".profile__image");
const profileEditeBtn = document.querySelector(".profile__edit-button");
const places = document.querySelector(".places");
const placesList = places.querySelector(".places__list");
const popups = document.querySelectorAll(".popup");
let userId;

//Header
const headerLogo = document.querySelector(".header__logo");

//Common forms
const formProfile = document.forms["edit-profile"];
const formCard = document.forms["new-place"];
const formAvatar = document.forms["avatar"];

const popupBtn = document.querySelector('.popup__button')

//Popup profile
const profileTitle = document.querySelector(".profile__title");
const profileDescriptions = document.querySelector(".profile__description");
const popUpProfile = document.querySelector(".popup_type_edit");
const popUpProfileImage = document.querySelector(".popup_type_avatar");
const nameInput = popUpProfile.querySelector(".popup__input_type_name");
const jobInput = popUpProfile.querySelector(".popup__input_type_description");

//Popup Card
const popUpElementCard = document.querySelector(".popup_type_new-card");
const popUpFormNameValueCard = formCard.querySelector(
  ".popup__input_type_card-name"
);
const popUpFormLinkValueCard = formCard.querySelector(".popup__input_type_url");

//PopUpImg
const popUpElementImg = document.querySelector(".popup_type_image");
const popUpImg = popUpElementImg.querySelector(".popup__image");
const popUpDescriptions = popUpElementImg.querySelector(".popup__caption");

//Popup Avatar
const popupAvatarInput = formAvatar.querySelector(".popup__input_type_url");

//Добавление картинок
headerLogo.src = headerLogoImg;

//Набор конфига валидации
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//Начало работы валидации
enableValidation(validationConfig);

//Функция открытия модального окна профиля
function handleProfileFormSubmit(event) {
  const profile = {
    name: nameInput.value,
    about: jobInput.value,
  };
  renderLoadind(true, event.target)
  patchProfileName(profile)
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescriptions.textContent = data.about;
      closeModal(popUpProfile);
      clearValidation(formProfile, validationConfig);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoadind(false, event.target)
    });
  event.preventDefault();
}

//Загрузка данных пользователя и карточек
Promise.all([getInitialCards(), getProfileName()]).then(([cards, user])=>{
  Array.from(cards).forEach((element) => {
    userId = user._id
    profileTitle.textContent = user.name;
    profileDescriptions.textContent = user.about;
    profileImage.style.backgroundImage = `url('${user.avatar}')`;
    renderCard(
      {
        name: element.name,
        link: element.link,
        likeCard: likeCard,
        deleteCard: deleteCard,
        handleImageClick: handleImageClick,
        likes: element.likes,
        _id: element._id,
        profile_id: element.owner._id,
        userId: userId,
      },
      "prepend"
    );
  });
}).catch((error)=>{
  console.log(error)
})

//Выбор метода
function renderCard(element, method) {
  const cardElement = createCard(element);
  placesList[method](cardElement);
}

function handleImageClick(name, link) {
  popUpImg.src = link;
  popUpImg.alt = name;
  popUpDescriptions.textContent = name;
  openModal(popUpElementImg);
}

function renderPopupProfile() {
  getProfileName()
    .then((data) => {
      const name = data.name;
      const job = data.about;
      nameInput.setAttribute("value", name);
      jobInput.setAttribute("value", job);
    })
    .catch((err) => {
      console.log(err);
    });
  openModal(popUpProfile);
}

function renderPopupAvatar(event) {
  event.preventDefault();
  openModal(popUpProfileImage);
}

function addProfileAvatar(event) {
  renderLoadind(true, event.target)
  postAvatarImage(popupAvatarInput.value)
    .then((data) => {
      profileImage.style.backgroundImage = `url('${data.avatar}')`;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      renderLoadind(false, event.target)
      closeModal(popUpProfileImage);
    });
  event.preventDefault();
}

//Создание карточки
function addNewCard(event) {
  renderLoadind(true, event.target)
  postInitialCard({
    name: popUpFormNameValueCard.value,
    link: popUpFormLinkValueCard.value,
  })
    .then((post) => {
      renderCard(
        {
          name: post.name,
          link: post.link,
          deleteCard: deleteCard,
          likeCard: likeCard,
          handleImageClick: handleImageClick,
          likes: post.likes,
          _id: post._id,
          profile_id: post.owner._id,
          userId: userId,
        },
        "prepend"
      );
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(()=>{
      renderLoadind(false, event.target)
    })
  clearValidation(formCard, validationConfig);
  closeModal(popUpElementCard);
  event.preventDefault();
}

//Состояние сохраненияç
function renderLoadind(isLoading, buttonElement) {
  const button = buttonElement.querySelector('.popup__button')
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

//Сохранение новой карточки
formCard.addEventListener("submit", addNewCard);

//События открытия окна с созданием карточками
addPlacesBtn.addEventListener("click", (event) => {
  openModal(popUpElementCard);
});

//Событие открытия окна с профилем
profileEditeBtn.addEventListener("click", renderPopupProfile);
profileImage.addEventListener("click", renderPopupAvatar);
formProfile.addEventListener("submit", handleProfileFormSubmit);
formAvatar.addEventListener("submit", addProfileAvatar);

//Закрытие попапов
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (event) => {
    if (
      event.target.classList.contains("popup_is-opened") ||
      event.target.classList.contains("popup__close")
    ) {
      closeModal(popup);
    }
  });
});
