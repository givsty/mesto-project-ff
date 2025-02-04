import { deleteInitialCard, deletLikes, putLikes} from "./api";

//Темплейт карточки
const templateCards = document.querySelector("#card-template").content

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
  userId,
}) {
  const cardElement = templateCards
    .querySelector(".places__item")
    .cloneNode(true);
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const deleteCardBtn = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const likesValue = cardElement.querySelector(".card__like-counter");

  deleteCardBtn.addEventListener("click", (event) => {
    deleteCard(event, _id);
  });

  cardLikeButton.addEventListener("click", handleLikeCard);
  let checked = likes.some((element) => {
    return element._id === userId;
  });
  if (checked) {
    cardLikeButton.classList.add("card__like-button_is-active");
  }
  //Обработка лайка
  function handleLikeCard(event) {
    if (checked) {
      deleteLikeCard(event, _id, {
        likes,
        likesValue,
      });
      checked = false;
    } else {
      likeCard(event, _id, {
        likes,
        likesValue,
      });
      checked = true;
    }
  }
  //Открытие модального окна у изображения, находящегося в карточке
  cardImage.addEventListener("click", () => {
    handleImageClick(name, link);
  });

  if (!(profile_id === userId)) {
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
    .then(() => {
      event.target.closest(".places__item").remove();
    })
    .catch((error) => {
      console.log(error);
    });
}

//Функция лайка карточки
function likeCard(event, _id, { likesValue }) {
  putLikes(_id)
    .then((card) => {
      likesValue.textContent = card.likes.length;
      event.target.classList.add("card__like-button_is-active");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {});
}

function deleteLikeCard(event, _id, { likesValue }) {
  deletLikes(_id)
    .then((card) => {
      likesValue.textContent = card.likes.length;
      event.target.classList.remove("card__like-button_is-active");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {});
}

export { createCard, deleteCard, likeCard };
