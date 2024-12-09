/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//Темплейт карточки\r\nconst templateCards = document.querySelector('#card-template').content;\r\n\r\n//DOM узлы\r\nconst addPlacesBtn = document.querySelector('.profile__add-button')\r\nconst places = document.querySelector('.places');\r\nconst placesList = places.querySelector('.places__list')\r\n\r\n//Popup \r\nconst popUpElement = document.querySelector('.popup_type_new-card')\r\nconst popUpClose = popUpElement.querySelector('.popup__close')\r\nconst popUpForm = popUpElement.querySelector('.popup__form')\r\n\r\n//Функция создания карточки\r\nfunction createCard (name, link, deleteCard) {\r\n  const cardElement = templateCards.querySelector('.places__item').cloneNode(true);\r\n  const cardName = cardElement.querySelector('.card__title')\r\n  const cardImage = cardElement.querySelector('.card__image')\r\n  const deleteCardBtn = cardElement.querySelector('.card__delete-button')\r\n\r\n  deleteCardBtn.addEventListener('click', (event) => deleteCard(event.target))\r\n\r\n  cardName.textContent = name;\r\n  cardImage.src = link;\r\n  cardImage.alt = name;\r\n  \r\n  return cardElement\r\n}\r\n\r\n//События откртия окна \r\naddPlacesBtn.addEventListener('click', ()=>{\r\n\r\n  //Открытие формы \r\n  popUpElement.classList.add('popup_is-opened')\r\n\r\n  //Сохранение новой карточки\r\n  popUpForm.addEventListener('submit', (event)=>{\r\n    const popUpFormNameValue = popUpForm.querySelector('.popup__input_type_card-name')\r\n    const popUpFormLinkValue = popUpForm.querySelector('.popup__input_type_url')\r\n    placesList.append(createCard(popUpFormNameValue.value, popUpFormLinkValue.value, deleteCard))\r\n    event.preventDefault()\r\n    event.target.reset()\r\n  })\r\n  \r\n  //Закрытие формы \r\n  popUpClose.addEventListener('click', ()=>{\r\n    popUpElement.classList.remove('popup_is-opened')\r\n  })\r\n})\r\n\r\n//Функция удаления карточки\r\n\r\nfunction deleteCard (element) {\r\n  element.closest('.places__item').remove()\r\n}\r\n\r\n//Вывести карточки на страницу\r\ninitialCards.forEach(element => {\r\n  placesList.append(createCard(element.name, element.link, deleteCard))\r\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;