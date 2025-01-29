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
  putLikes,
} from "./components/api";
//DOM узлы
const addPlacesBtn = document.querySelector(".profile__add-button");
const profileImage = document.querySelector(".profile__image");
const profileEditeBtn = document.querySelector(".profile__edit-button");
const places = document.querySelector(".places");
const placesList = places.querySelector(".places__list");
const popups = document.querySelectorAll(".popup");

//Header
const headerLogo = document.querySelector(".header__logo");

//Common forms
const formProfile = document.forms["edit-profile"];
const formCard = document.forms["new-place"];
const formAvatar = document.forms["avatar"];

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
  patchProfileName(profile)
    .then((data) => {
      console.log(data);
      profileTitle.textContent = data.name;
      profileDescriptions.textContent = data.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      closeModal(popUpProfile);
      clearValidation(formProfile, validationConfig);
    });
  event.preventDefault();
}

// Получение карточек
getInitialCards()
  .then((data) => {
    Array.from(data).forEach((element) => {
      console.log(element)
      renderCard(
        {
          name: element.name,
          link: element.link,
          likeCard: likeCard,
          deleteCard: deleteCard,
          handleImageClick: handleImageClick,
          likes: element.likes,
          _id: element._id,
          profile_id: element.owner._id
        },
        "prepend"
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

//Получение данных профиля
getProfileName()
  .then((data) => {
    console.log(data._id);
    profileTitle.textContent = data.name;
    profileDescriptions.textContent = data.about;
    profileImage.style.backgroundImage = `url('${data.avatar}')`;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {});

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
  event.preventDefault();
  postAvatarImage(popupAvatarInput.value)
    .then((data) => {
      profileImage.style.backgroundImage = `url('${data.avatar}')`;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      closeModal(popUpProfileImage);
    });
  event.preventDefault();
}

//Создание карточки
function addNewCard(event) {
  postInitialCard({
    likes: [],
    _id: "f87cc046b58a155a69a0b23e",
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
        },
        "prepend"
      );
    })
    .catch((error) => {
      console.log(error);
    });
  clearValidation(formCard, validationConfig);
  closeModal(popUpElementCard);
  event.preventDefault();
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

getProfileName()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err);
  });