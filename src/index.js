import { createCard, deleteCard, likeCard } from './components/card';
import { openModal, closeModal } from './components/modal';
import './pages/index.css';
import initialCards from './components/cards';
import headerLogoImg from './images/logo.svg';
import avatar from './images/avatar.jpg';
import { clearValidation, enableValidation } from './components/validation';
import { getInitialCards } from './components/api';

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

//Common forms
const formProfile = document.forms['edit-profile'];
const formCard = document.forms['new-place'];

//Popup profile
const profileTitle = document.querySelector('.profile__title');
const profileDescriptions = document.querySelector('.profile__description');
const popUpProfile = document.querySelector('.popup_type_edit');
const nameInput = popUpProfile.querySelector('.popup__input_type_name');
const jobInput = popUpProfile.querySelector('.popup__input_type_description');

//Popup Card
const popUpElementCard = document.querySelector('.popup_type_new-card');
const popUpFormNameValueCard = formCard.querySelector(
  '.popup__input_type_card-name',
);
const popUpFormLinkValueCard = formCard.querySelector('.popup__input_type_url');

// //PopUpImg Доделать
const popUpElementImg = document.querySelector('.popup_type_image');
const popUpImg = popUpElementImg.querySelector('.popup__image');
const popUpDescriptions = popUpElementImg.querySelector('.popup__caption');

//Добавление картинок
headerLogo.src = headerLogoImg;
headerProfile.style.backgroundImage = `url('${avatar}')`;

//Набор конфига валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

//Начало работы валидации 
enableValidation(validationConfig);

//Функция открытия модального окна профиля
function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescriptions.textContent = jobInput.value;
  closeModal(popUpProfile);
  clearValidation(formProfile, validationConfig)
}

// Api
getInitialCards()
  .then((data)=>{
    Array.from(data).forEach((element)=>{
      renderCard(element, 'prepend')
    })
    console.log(data)
  })
  .catch((error)=>{
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
  nameInput.setAttribute('value', profileTitle.textContent);
  jobInput.setAttribute('value', profileDescriptions.textContent);
  openModal(popUpProfile);
}

//Добавление карточки
function addNewCard(event) {
  renderCard(
    {
      name: popUpFormNameValueCard.value,
      link: popUpFormLinkValueCard.value,
      deleteCard: deleteCard,
      likeCard: likeCard,
      handleImageClick: handleImageClick,
    },
    'prepend',
  );
  clearValidation(formCard, validationConfig)
  closeModal(popUpElementCard);
  event.preventDefault();
}

//Вывести карточки на страницу
initialCards.forEach((element) => {
  renderCard(
    {
      name: element.name,
      link: element.link,
      deleteCard: deleteCard,
      likeCard: likeCard,
      handleImageClick: handleImageClick,
    },
    'append',
  );
});

//Сохранение новой карточки
formCard.addEventListener('submit', addNewCard);

//События открытия окна с созданием карточками
addPlacesBtn.addEventListener('click', (event) => {
  openModal(popUpElementCard);
});

//Событие открытия окна с профилем
profileEditeBtn.addEventListener('click', renderPopupProfile);

formProfile.addEventListener('submit', handleProfileFormSubmit);

//Закрытие попапов
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