// @todo: Темплейт карточки

// @todo: DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button')
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list')
const templateCards = document.querySelector('#card-template').content;
const cardElement = templateCards.querySelector('.places__item').cloneNode(true);
const cardName = cardElement.querySelector('.card__title')
const cardImage = cardElement.querySelector('.card__image')
const popUpElement = document.querySelector('.popup')
const popUpClose = popUpElement.querySelector('.popup__close')

// @todo: Функция создания карточки
function createCard (element) {
  popUpElement.classList.add('popup_is-opened')
  
  popUpClose.addEventListener('click', ()=>{
    popUpElement.classList.remove('popup_is-opened')
  })
}

addPlacesBtn.addEventListener('click', createCard)
// @todo: Функция удаления карточки

function deleteCard (element) {
  
}
console.log(popUpElement)
// @todo: Вывести карточки на страницу
initialCards.forEach(element => {
  const cardElement = templateCards.querySelector('.places__item').cloneNode(true);
  const cardName = cardElement.querySelector('.card__title')
  const cardImage = cardElement.querySelector('.card__image')

  cardName.textContent = element.name;
  cardImage.setAttribute('src', element.link)
  placesList.append(cardElement)
});

