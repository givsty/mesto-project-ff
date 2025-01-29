import { deleteInitialCard, putLikes } from "./api";

//Темплейт карточки
const templateCards = document.querySelector("#card-template").content;
//Функция создания карточки
function createCard({
  name,
  link,
  deleteCard,
  likeCard,
  handleImageClick,
  likes,
  _id,
  profile_id,
}) {
  const cardElement = templateCards
    .querySelector(".places__item")
    .cloneNode(true);
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const deleteCardBtn = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const likesValue = cardElement.querySelector(".card__like-counter");

  deleteCardBtn.addEventListener("click", (event)=>{
    deleteCard(event, _id)
  });
  cardLikeButton.addEventListener("click", (event)=>{
    likeCard(event, _id)
  });
  //Открытие модального окна у изображения, находящегося в карточке
  cardImage.addEventListener("click", () => {
    handleImageClick(name, link);
  });

  if (!(profile_id === 'f87cc046b58a155a69a0b23e')) {
    deleteCardBtn.remove();
  }

  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  likesValue.textContent = likes.length;
  return cardElement;
}

//Функция удаления карточки
function deleteCard(event, _id) {
  deleteInitialCard(_id)
    .then((result)=>{
      console.log(result)
      event.target.closest(".places__item").remove();
    })
    .catch((error)=>{
      console.log(error)
    })
  event.target.closest(".places__item").remove();
}

//Функция лайка карточки
function likeCard(event, _id) {
  putLikes(_id)
    .then(()=>{
      event.target.classList.toggle("card__like-button_is-active");
    })
    .catch((error)=>{
      console.log(error)
    })
}

export { createCard, deleteCard, likeCard };