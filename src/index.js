import '../pages/index.css';
import initialCards from './cards';
import {createCard, deleteCard, likeCard} from './components/card'
import {openModal, closeModal} from './components/modal'

//DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button')
const profileEditeBtn = document.querySelector('.profile__edit-button')
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list')

//Popup profile
const popUpProfile = document.querySelector('.popup_type_edit')
const jobInput = popUpProfile.querySelector('.popup__input_type_name')
const nameInput = popUpProfile.querySelector('.popup__input_type_description')

//Popup Card
const popUpElement = document.querySelector('.popup_type_new-card')

//Popup image
const popUpElementImg = document.querySelector('.popup_type_image')

//Popup common
const popUp = document.querySelector('.popup')
const popUpContent = popUp.querySelector('.popup__content')
const popUpClose = popUpElement.querySelector('.popup__close')
const popUpForm = popUpElement.querySelector('.popup__form')

//Функция открытия модального окна профиля
function handleFormSubmit(event) {
  jobInput.textContent = jobInput.value
  nameInput.textContent = nameInput.value
}

//События открытия окна 
addPlacesBtn.addEventListener('click', (event)=> {
  const popUpFormNameValue = popUpForm.querySelector('.popup__input_type_card-name')
  const popUpFormLinkValue = popUpForm.querySelector('.popup__input_type_url')
  //Открытие формы 
  openModal(popUpElement)
  console.log(event.target)               
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

profileEditeBtn.addEventListener('click', (event) => {
  openModal(popUpProfile)
  popUpForm.addEventListener('submit', handleFormSubmit(event))
  popUpClose.addEventListener('click', ()=>{
    console.log('фафафа')
    closeModal(popUpProfile)
  })
})

//Вывести карточки на страницу
initialCards.forEach(element => placesList.append(createCard(element.name, element.link, deleteCard, likeCard)));

export {popUp};