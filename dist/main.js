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

eval("//Темплейт карточки\nvar templateCards = document.querySelector('#card-template').content;\n\n//DOM узлы\nvar addPlacesBtn = document.querySelector('.profile__add-button');\nvar places = document.querySelector('.places');\nvar placesList = places.querySelector('.places__list');\n\n//Popup \nvar popUpElement = document.querySelector('.popup_type_new-card');\nvar popUpClose = popUpElement.querySelector('.popup__close');\nvar popUpForm = popUpElement.querySelector('.popup__form');\n\n//Функция создания карточки\nfunction createCard(name, link, deleteCard) {\n  var cardElement = templateCards.querySelector('.places__item').cloneNode(true);\n  var cardName = cardElement.querySelector('.card__title');\n  var cardImage = cardElement.querySelector('.card__image');\n  var deleteCardBtn = cardElement.querySelector('.card__delete-button');\n  deleteCardBtn.addEventListener('click', function (event) {\n    return deleteCard(event.target);\n  });\n  cardName.textContent = name;\n  cardImage.src = link;\n  cardImage.alt = name;\n  return cardElement;\n}\n\n//События откртия окна \naddPlacesBtn.addEventListener('click', function () {\n  //Открытие формы \n  popUpElement.classList.add('popup_is-opened');\n\n  //Сохранение новой карточки\n  popUpForm.addEventListener('submit', function (event) {\n    var popUpFormNameValue = popUpForm.querySelector('.popup__input_type_card-name');\n    var popUpFormLinkValue = popUpForm.querySelector('.popup__input_type_url');\n    placesList.append(createCard(popUpFormNameValue.value, popUpFormLinkValue.value, deleteCard));\n    event.preventDefault();\n    event.target.reset();\n  });\n\n  //Закрытие формы \n  popUpClose.addEventListener('click', function () {\n    popUpElement.classList.remove('popup_is-opened');\n  });\n});\n\n//Функция удаления карточки\n\nfunction deleteCard(element) {\n  element.closest('.places__item').remove();\n}\n\n//Вывести карточки на страницу\ninitialCards.forEach(function (element) {\n  placesList.append(createCard(element.name, element.link, deleteCard));\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

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