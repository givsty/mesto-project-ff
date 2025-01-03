//Темплейт карточки
const templateCards = document.querySelector('#card-template').content;

//Функция создания карточки
function createCard({name, link, deleteCard, likeCard, handleImageClick}) {
  const cardElement = templateCards
    .querySelector('.places__item')
    .cloneNode(true);
  const cardName = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const deleteCardBtn = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button')

  deleteCardBtn.addEventListener('click', deleteCard);

  cardLikeButton.addEventListener('click', likeCard);

  //Открытие модального окна у изображения, находящегося в карточке
  cardImage.addEventListener('click', () => {
    handleImageClick(name, link)
  });

  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  return cardElement;
}

//Функция удаления карточки
function deleteCard(event) {
  event.target.closest('.places__item').remove();
}

//Функция лайка карточки
function likeCard(event) {
  event.target.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, likeCard };
