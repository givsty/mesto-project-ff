import { createCard, deleteCard, likeCard } from './components/card';
import { openModal, closeModal } from './components/modal';
import './pages/index.css';
import initialCards from './components/cards';
import headerLogoImg from './images/logo.svg';
import avatar from './images/avatar.jpg';

//DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button');
const profileEditeBtn = document.querySelector('.profile__edit-button');
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list');
const popups = document.querySelectorAll('.popup');
//Header
const headerLogo = document.querySelector('.header__logo');

//Section profile
const headerProfile = document.querySelector('.profile__image');

//Popup profile
const profileTitle = document.querySelector('.profile__title');
const profileDescriptions = document.querySelector('.profile__description');
const popUpProfile = document.querySelector('.popup_type_edit');
const popUpFormProfie = popUpProfile.querySelector('.popup__form');
const nameInput = popUpProfile.querySelector('.popup__input_type_name');
const jobInput = popUpProfile.querySelector('.popup__input_type_description');

//Popup Card
const popUpElementCard = document.querySelector('.popup_type_new-card');
const popUpFormCard = popUpElementCard.querySelector('.popup__form');
const popUpFormNameValueCard = popUpFormCard.querySelector(
  '.popup__input_type_card-name',
);
const popUpFormLinkValueCard = popUpFormCard.querySelector(
  '.popup__input_type_url',
);

// //PopUpImg Доделать
const popUpElementImg = document.querySelector('.popup_type_image');
const popUpImg = popUpElementImg.querySelector('.popup__image');
const popUpDescriptions = popUpElementImg.querySelector('.popup__caption');

//Добавление картинок
headerLogo.src = headerLogoImg;
headerProfile.style.backgroundImage = `url('${avatar}')`;

//Функция открытия модального окна профиля
function handleProfileFormSubmit(event) {
  event.preventDefault();
  
  profileTitle.textContent = nameInput.value;
  profileDescriptions.textContent = jobInput.value;

  closeModal(popUpProfile);
}

function handleImageClick(name, link) {
  popUpImg.src = link;
  popUpImg.alt = name;
  popUpDescriptions.textContent = name;
  openModal(popUpElementImg);
}

function renderPopupProfile() {
  nameInput.setAttribute('value', profileTitle.textContent);
  jobInput.setAttribute('value', profileDescriptions.textContent);
  openModal(popUpProfile);
}

function addNewCard(event) {
  placesList.prepend(
    createCard(
      popUpFormNameValueCard.value,
      popUpFormLinkValueCard.value,
      deleteCard,
      likeCard,
      handleImageClick,
    ),
  );
  closeModal(popUpElementCard);
  event.preventDefault();
}

//Вывести карточки на страницу
initialCards.forEach((element) =>
  placesList.append(
    createCard(
      element.name,
      element.link,
      deleteCard,
      likeCard,
      handleImageClick,
    ),
  ),
);

//Сохранение новой карточки
popUpFormCard.addEventListener('submit', addNewCard);

//События открытия окна с созданием карточками
addPlacesBtn.addEventListener('click', (event) => {
  openModal(popUpElementCard);
});

//Событие открытия окна с профилем
profileEditeBtn.addEventListener('click', renderPopupProfile);

popUpFormProfie.addEventListener('submit', handleProfileFormSubmit);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (event) => {
    if (
      event.target.classList.contains('popup_is-opened') ||
      event.target.classList.contains('popup__close')
    ) {
      closeModal(popup);
    }
  });
});
