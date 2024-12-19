//Popup сard
function openModal(element) {
  element.classList.add('popup_is-animated')
  setTimeout(()=>{
    element.classList.add('popup_is-opened')
  })
}

function closeModal(element, event) {
  if(event.target.closest('.popup__close')) {
    element.classList.remove('popup_is-opened')   
  }
}

export { openModal, closeModal}