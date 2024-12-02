// @todo: Темплейт карточки

// @todo: DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button')
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list')
const templateCards = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
function createCard (element) {
}

// @todo: Функция удаления карточки
function deleteCard (element) {
  element
}

// @todo: Вывести карточки на страницу
initialCards.forEach(element => {
  const cardElement = templateCards.querySelector('.places__item').cloneNode(true);
  const cardName = cardElement.querySelector('.card__title')
  const cardImage = cardElement.querySelector('.card__image')

  cardName.textContent = element.name;
  cardImage.setAttribute('src', element.link)
  placesList.append(cardElement)
  return createCard(element)
});

