import { popUpClose } from "../index"
//Popup сard
function openModal(element) {
  element.classList.add('popup_is-opened', 'popup_is-animated')
}

function closeModal(element) {  
  element.classList.remove('popup_is-opened')
}

export { openModal, closeModal}