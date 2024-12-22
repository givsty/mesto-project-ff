//Popup сard 
import { handleFormSubmit} from "../index"

function openModal(element) {
  element.classList.add('popup_is-animated')
  setTimeout(()=>{
    element.classList.add('popup_is-opened')
  })
}

function closeModal(element, event) {
  element.classList.remove('popup_is-opened')
}

function closeModalOnBg(element) {
  window.addEventListener('click', (event) => {
    if (event.target === element) {
      closeModal(element, event);
    }
  });
}

function keyHandler(event, element) {
  if(event.key === 'Escape') {
    closeModal(element, event)
  }

  if(event.key === 'Enter') {
    handleFormSubmit(event)
  }
}

export { openModal, closeModal, keyHandler, closeModalOnBg}