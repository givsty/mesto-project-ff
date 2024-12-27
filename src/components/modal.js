//Popup сard
function openModal(element) {
  element.classList.add('popup_is-animated');
  setTimeout(() => {
    element.classList.add('popup_is-opened');
  });
  //События нажатия на клавиатуре
  document.addEventListener('keydown', handleEscape);
}

function closeModal(element, event) {
  const popUpIsOpenedCheck = document.querySelector('.popup_is-opened');
  if (event.target === popUpIsOpenedCheck) {
    element.classList.remove('popup_is-opened');
  } else if (event.target === element.querySelector('.popup__close')) {
    element.classList.remove('popup_is-opened');
  }
  document.removeEventListener('keydown', handleEscape); 
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened')
    
  }
}

export { openModal, closeModal};
