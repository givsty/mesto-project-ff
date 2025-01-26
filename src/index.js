import { createCard, deleteCard, likeCard } from './components/card';
import { openModal, closeModal } from './components/modal';
import './pages/index.css';
import initialCards from './components/cards';
import headerLogoImg from './images/logo.svg';
import avatar from './images/avatar.jpg';
import { clearValidation, enableValidation } from './components/validation';
import { getInitialCards, getProfileName, patchProfileName, postAvatarImage, postInitialCard} from './components/api';

//DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button');
const profileImage = document.querySelector('.profile__image')
const profileEditeBtn = document.querySelector('.profile__edit-button');
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list');
const popups = document.querySelectorAll('.popup');

//Header
const headerLogo = document.querySelector('.header__logo');

//Common forms
const formProfile = document.forms['edit-profile'];
const formCard = document.forms['new-place'];
const formAvatar = document.forms['avatar'];

console.log(formAvatar)
//Popup profile
const profileTitle = document.querySelector('.profile__title');
const profileDescriptions = document.querySelector('.profile__description');
const popUpProfile = document.querySelector('.popup_type_edit');
const popUpProfileImage = document.querySelector('.popup_type_avatar')
const nameInput = popUpProfile.querySelector('.popup__input_type_name');
const jobInput = popUpProfile.querySelector('.popup__input_type_description');

//Popup Card
const popUpElementCard = document.querySelector('.popup_type_new-card');
const popUpFormNameValueCard = formCard.querySelector(
  '.popup__input_type_card-name',
);
const popUpFormLinkValueCard = formCard.querySelector('.popup__input_type_url');

//PopUpImg
const popUpElementImg = document.querySelector('.popup_type_image');
const popUpImg = popUpElementImg.querySelector('.popup__image');
const popUpDescriptions = popUpElementImg.querySelector('.popup__caption');

//Popup Avatar
const popupAvatarInput = formAvatar.querySelector('.popup__input_type_url')

//Добавление картинок
headerLogo.src = headerLogoImg;
profileImage.style.backgroundImage = `url('${avatar}')`;

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
  const profile = {
    name: nameInput.value,
    about: jobInput.value,
    _id: f87cc046b58a155a69a0b23e,
  }
  patchProfileName(profile)
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    }) 
  profileTitle.textContent = nameInput.value;
  profileDescriptions.textContent = jobInput.value;
  event.preventDefault();
  closeModal(popUpProfile);
  clearValidation(formProfile, validationConfig)
}

// Api
// getInitialCards()
//   .then((data)=>{
//     console.log(data)
//     Array.from(data).forEach((element)=>{
//       renderCard({
//         name: element.name,
//         link: element.link,
//         likeCard: likeCard,
//         handleImageClick: handleImageClick,
//         likes: element.likes,
//         deleteActive: false,
//       }, 'prepend')
//     })
//   })
//   .catch((error)=>{
//     console.log(error)
//   })

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

function renderPopupAvatar(event) {
  event.preventDefault()
  openModal(popUpProfileImage)
}

function addProfileAvatar(event) {
  event.preventDefault()
  postAvatarImage(popupAvatarInput.value)
    .then((result)=>{
      profileImage.style.backgroundImage = `url('${result.avatar}')`;
    })
    .catch((error)=>{
      console.log(error)
    })
    .then(()=>{
      closeModal(popUpProfileImage)
    })
  event.preventDefault()
}

//Создание карточки
function addNewCard(event) {
  renderCard( 
    { 
      name: popUpFormNameValueCard.value, 
      link: popUpFormLinkValueCard.value, 
      deleteCard: deleteCard, 
      likeCard: likeCard, 
      handleImageClick: handleImageClick,
      likes: []
    }, 
    'prepend', 
  )
  // card = {
  //   name: popUpFormNameValueCard.value,
  //   link: popUpFormLinkValueCard.value,
  // }
  // postInitialCard(card)
  //   .then((post)=>{
  //     console.log(post)
  //     post.userId = userid
  //     renderCard( 
  //       {  
  //         deleteCard: deleteCard, 
  //         likeCard: likeCard, 
  //         handleImageClick: handleImageClick,
  //         likes: []
  //       }, 
  //       'prepend', 
  //     )
  //   })
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
      deleteActive: false,
      likes: [],
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
profileImage.addEventListener('click', renderPopupAvatar)
formProfile.addEventListener('submit', handleProfileFormSubmit);
formAvatar.addEventListener('submit', addProfileAvatar)

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