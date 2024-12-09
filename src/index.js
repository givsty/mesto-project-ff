//Темплейт карточки
const templateCards = document.querySelector('#card-template').content;

//DOM узлы
const addPlacesBtn = document.querySelector('.profile__add-button')
const places = document.querySelector('.places');
const placesList = places.querySelector('.places__list')

//Popup 
const popUpElement = document.querySelector('.popup_type_new-card')
const popUpClose = popUpElement.querySelector('.popup__close')
const popUpForm = popUpElement.querySelector('.popup__form')

//Функция создания карточки
function createCard (name, link, deleteCard) {
  const cardElement = templateCards.querySelector('.places__item').cloneNode(true);
  const cardName = cardElement.querySelector('.card__title')
  const cardImage = cardElement.querySelector('.card__image')
  const deleteCardBtn = cardElement.querySelector('.card__delete-button')

  deleteCardBtn.addEventListener('click', (event) => deleteCard(event.target))

  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  
  return cardElement
}

//События откртия окна 
addPlacesBtn.addEventListener('click', ()=>{

  //Открытие формы 
  popUpElement.classList.add('popup_is-opened')

  //Сохранение новой карточки
  popUpForm.addEventListener('submit', (event)=>{
    const popUpFormNameValue = popUpForm.querySelector('.popup__input_type_card-name')
    const popUpFormLinkValue = popUpForm.querySelector('.popup__input_type_url')
    placesList.append(createCard(popUpFormNameValue.value, popUpFormLinkValue.value, deleteCard))
    event.preventDefault()
    event.target.reset()
  })
  
  //Закрытие формы 
  popUpClose.addEventListener('click', ()=>{
    popUpElement.classList.remove('popup_is-opened')
  })
})

//Функция удаления карточки

function deleteCard (element) {
  element.closest('.places__item').remove()
}

//Вывести карточки на страницу
initialCards.forEach(element => {
  placesList.append(createCard(element.name, element.link, deleteCard))
});