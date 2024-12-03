// @todo: Темплейт карточки

// @todo: DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button')
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list')
const templateCards = document.querySelector('#card-template').content;
const cardElement = templateCards.querySelector('.places__item').cloneNode(true);
const deleteItem = templateCards.querySelector('.card__delete-button')
const cardName = cardElement.querySelector('.card__title')
const cardImage = cardElement.querySelector('.card__image')
const popUpElement = document.querySelector('.popup_type_new-card')
const popUpClose = popUpElement.querySelector('.popup__close')
const popupContent = popUpElement.querySelector('.popup__input popup__input_type_name')
const popUpForm = popUpElement.querySelector('.popup__form')
const popUpFormNameValue = popUpForm.querySelector('.popup__input_type_card-name')
const popUpFormLinkValue = popUpForm.querySelector('.popup__input_type_url')
const popUpFormBtn = popUpForm.querySelector('.popup__button')

// @todo: Функция создания карточки
function createCard () {
  popUpElement.classList.add('popup_is-opened')
  popUpClose.addEventListener('click', ()=>{
    popUpElement.classList.remove('popup_is-opened')
  })

  popUpFormBtn.addEventListener('submit', ()=>{
    cardName.textContent = popUpFormNameValue.value;
    cardImage.setAttribute('src', popUpFormLinkValue.value)
    placesList.append(cardElement)
  })
}

addPlacesBtn.addEventListener('click', createCard)
// @todo: Функция удаления карточки

function deleteCard () {

}

// @todo: Вывести карточки на страницу
initialCards.forEach(element => {
  const cardElement = templateCards.querySelector('.places__item').cloneNode(true);
  const cardName = cardElement.querySelector('.card__title')
  const cardImage = cardElement.querySelector('.card__image')

  cardName.textContent = element.name;
  cardImage.setAttribute('src', element.link)
  placesList.append(cardElement)
});
