// @todo: Темплейт карточки
const templateCards = document.querySelector('#card-template').content;

// @todo: DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button')
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list')


//Popup 
const popUpElement = document.querySelector('.popup_type_new-card')
const popUpClose = popUpElement.querySelector('.popup__close')
const popUpForm = popUpElement.querySelector('.popup__form')


// @todo: Функция создания карточки
function createCard (name, link, deleteCard) {
  const cardElement = templateCards.querySelector('.places__item').cloneNode(true);
  const cardName = cardElement.querySelector('.card__title')
  const cardImage = cardElement.querySelector('.card__image')

  cardName.textContent = name;
  cardImage.setAttribute('src', link)
  return placesList.append(cardElement)
}

addPlacesBtn.addEventListener('click', ()=>{
  const popUpFormNameValue = popUpForm.querySelector('.popup__input_type_card-name')
  const popUpFormLinkValue = popUpForm.querySelector('.popup__input_type_url')
  const popUpFormBtn = popUpForm.querySelector('.popup__button')
  popUpElement.classList.add('popup_is-opened')

  //Сохранение новой карточки
  popUpFormBtn.addEventListener('input', ()=>{
    createCard(popUpFormNameValue.value, popUpFormLinkValue.value)
    console.log(popUpFormNameValue.value, popUpFormLinkValue.value)
  })
  
  //Закрытие карточки
  popUpClose.addEventListener('click', ()=>{
    popUpElement.classList.remove('popup_is-opened')
  })
})

// @todo: Функция удаления карточки

function deleteCard () {

}

// @todo: Вывести карточки на страницу
initialCards.forEach(element => {
  createCard(element.name, element.link)
});
