import { createCard, deleteCard, likeCard } from './components/card';
import { openModal, closeModal, closeModalOnBg } from './components/modal';
import { keyHandler } from './components/modal';
import '../pages/index.css';
import initialCards from './cards';
import headerLogoImg from '../images/logo.svg';
import avatar from '../images/avatar.jpg';

//DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button');
const profileEditeBtn = document.querySelector('.profile__edit-button');
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list');

//Header
const headerLogo = document.querySelector('.header__logo');

//Section profile
const headerProfile = document.querySelector('.profile__image');

//Popup profile
const profileTitle = document.querySelector('.profile__title');
const profileDescriptions = document.querySelector('.profile__description');
const popUpProfile = document.querySelector('.popup_type_edit');
const popUpFormProfie = popUpProfile.querySelector('.popup__form');
const popUpCloseProfile = popUpProfile.querySelector('.popup__close');
const nameInput = popUpProfile.querySelector('.popup__input_type_name');
const jobInput = popUpProfile.querySelector('.popup__input_type_description');

//Popup Card
const popUpElement = document.querySelector('.popup_type_new-card');
const popUpClose = popUpElement.querySelector('.popup__close');
const popUpForm = popUpElement.querySelector('.popup__form');

//Добавление картинок
headerLogo.src = headerLogoImg;
headerProfile.style.backgroundImage = `url('${avatar}')`;

//Функция открытия модального окна профиля
function handleFormSubmit(event) {
  event.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescriptions.textContent = jobInput.value;

  nameInput.setAttribute('value', profileTitle.textContent);
  jobInput.setAttribute('value', profileDescriptions.textContent);
}

nameInput.setAttribute('value', profileTitle.textContent);
jobInput.setAttribute('value', profileDescriptions.textContent);

//События открытия окна с карточками
addPlacesBtn.addEventListener('click', (event) => {
  const popUpFormNameValue = popUpForm.querySelector(
    '.popup__input_type_card-name',
  );
  const popUpFormLinkValue = popUpForm.querySelector('.popup__input_type_url');
  //Открытие формы
  openModal(popUpElement);
  //Сохранение новой карточки
  popUpForm.addEventListener('submit', (event) => {
    placesList.prepend(
      createCard(
        popUpFormNameValue.value,
        popUpFormLinkValue.value,
        deleteCard,
        likeCard,
      ),
    );
    event.preventDefault();
    event.target.reset();
  });

  //Закрытие формы
  popUpClose.addEventListener('click', (event) => {
    closeModal(popUpElement, event);
  });

  window.addEventListener('keydown', (event) => {
    keyHandler(event, popUpElement);
  });

  closeModalOnBg(popUpElement);
});

//Событие открытия окна с профилем
profileEditeBtn.addEventListener('click', () => {
  openModal(popUpProfile);

  popUpFormProfie.addEventListener('submit', (event) => {
    handleFormSubmit(event);
  });

  popUpCloseProfile.addEventListener('click', (event) => {
    closeModal(popUpProfile, event);
  });

  window.addEventListener('keydown', (event) => {
    keyHandler(event, popUpProfile);
  });

  closeModalOnBg(popUpProfile);
});

//Вывести карточки на страницу
initialCards.forEach((element) =>
  placesList.append(
    createCard(element.name, element.link, deleteCard, likeCard),
  ),
);

export { placesList, popUpClose, handleFormSubmit, popUpProfile };