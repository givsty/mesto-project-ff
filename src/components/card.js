import initialCards from '../cards';
import {placesList} from '../index'
import { openModal, closeModal} from "./modal";
//Темплейт карточки
const templateCards = document.querySelector('#card-template').content;

//Popup image
const popUpElementImg = document.querySelector('.popup_type_image')
const popUpImg = popUpElementImg.querySelector('.popup__image')
const popUpDescriptions = popUpElementImg.querySelector('.popup__caption')

//Функция создания карточки
function createCard (name, link, deleteCard, likeCard) {
  const cardElement = templateCards.querySelector('.places__item').cloneNode(true);
  const cardName = cardElement.querySelector('.card__title')
  const cardImage = cardElement.querySelector('.card__image')
  const deleteCardBtn = cardElement.querySelector('.card__delete-button')
  const cardElementCheked = document.querySelectorAll('.places__item')

  deleteCardBtn.addEventListener('click', (event) => deleteCard(event.target))

  placesList.addEventListener('click', (event) => {
    cardElementCheked.length === initialCards.length - 1 ? likeCard(event) : '';
  });

  //Открытие модального окна у изображения, находящегося в карточке
  cardImage.addEventListener('click', (event)=> {
    popUpImg.src = link
    popUpDescriptions.textContent = name
    openModal(popUpElementImg)
    popUpElementImg.addEventListener('click', (event)=>{
      closeModal(popUpElementImg, event)
    })
    popUpElementImg.addEventListener('keydown', (event)=>{
      console.log(event.key)
      closeModal(popUpElementImg, event)
    })
  })
  cardImage.addEventListener('keydown', (event)=>{
    console.log(event.key)
  })
  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  
  return cardElement;
}

//Функция удаления карточки
function deleteCard (element) {
  element.closest('.places__item').remove()
}

//Функция лайка карточки
function likeCard(event) {
  if(event.target.classList.contains('card__like-button')) {
    event.target.classList.toggle('card__like-button_is-active')
  }
}

export {createCard, deleteCard, likeCard};