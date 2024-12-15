//Темплейт карточки
const templateCards = document.querySelector('#card-template').content;
//Функция создания карточки
function createCard (name, link, deleteCard, likeCard) {
  const cardElement = templateCards.querySelector('.places__item').cloneNode(true);
  const cardName = cardElement.querySelector('.card__title')
  const cardImage = cardElement.querySelector('.card__image')
  const deleteCardBtn = cardElement.querySelector('.card__delete-button')
  const likeBtn = cardElement.querySelector('.card__like-button')

  deleteCardBtn.addEventListener('click', (event) => deleteCard(event.target))
  likeBtn.addEventListener('click', (event) => likeCard(event))
  cardImage.addEventListener('click', ()=> console.log('нажали на картинку'))

  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  
  return cardElement
}

//Функция удаления карточки
function deleteCard (element) {
  element.closest('.places__item').remove()
}

//Функция лайка карточки
function likeCard(event) {
  console.log('кнопка лайка')
}


export {createCard, deleteCard, likeCard};