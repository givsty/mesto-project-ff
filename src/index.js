import {createCard, deleteCard, likeCard} from './components/card'
import {openModal, closeModal} from './components/modal'
import '../pages/index.css';
import initialCards from './cards';
import headerLogoImg from '../images/logo.svg'
import avatar from '../images/avatar.jpg'

//DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button')
const profileEditeBtn = document.querySelector('.profile__edit-button')
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list')

//Header Logo
const headerLogo = document.querySelector('.header__logo')

//Header profile
const headerProfile = document.querySelector('.profile__image')

//Popup profile
const popUpProfile = document.querySelector('.popup_type_edit')
const popUpCloseProfile = popUpProfile.querySelector('.popup__close')
const jobInput = popUpProfile.querySelector('.popup__input_type_name')
const nameInput = popUpProfile.querySelector('.popup__input_type_description')

//Popup Card
const popUpElement = document.querySelector('.popup_type_new-card')

//Popup common
const popUp = document.querySelector('.popup')
const popUpContent = popUp.querySelector('.popup__content')
const popUpClose = popUpElement.querySelector('.popup__close')
const popUpForm = popUpElement.querySelector('.popup__form')

//Добавление картинок
headerLogo.src = headerLogoImg
headerProfile.style.backgroundImage = `url('${avatar}')`

//Функция открытия модального окна профиля
function handleFormSubmit(event) {
  jobInput.textContent = jobInput.value
  nameInput.textContent = nameInput.value
}


//События открытия окна с карточками
addPlacesBtn.addEventListener('click', (event)=> {
  const popUpFormNameValue = popUpForm.querySelector('.popup__input_type_card-name')
  const popUpFormLinkValue = popUpForm.querySelector('.popup__input_type_url')
  //Открытие формы 
  openModal(popUpElement)           
  //Сохранение новой карточки
  popUpForm.addEventListener('submit', (event)=>{
    placesList.append(createCard(popUpFormNameValue.value, popUpFormLinkValue.value, deleteCard, likeCard))
    event.preventDefault()
    event.target.reset()
  })
   
  //Закрытие формы 
  popUpClose.addEventListener('click', ()=>{
    closeModal(popUpElement)
  })
})

//Событие открытия окна с профилем
profileEditeBtn.addEventListener('click', (event) => {

  event.preventDefault()
  openModal(popUpProfile)
  popUpForm.addEventListener('submit', handleFormSubmit(event))
  popUpCloseProfile.addEventListener('click', ()=>{
    closeModal(popUpProfile)
  })
})

//Вывести карточки на страницу
initialCards.forEach(element => placesList.append(createCard(element.name, element.link, deleteCard, likeCard)));

export {popUp, placesList};