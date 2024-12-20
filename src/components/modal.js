//Popup сard
function openModal(element) {
  element.classList.add('popup_is-animated')
  setTimeout(()=>{
    element.classList.add('popup_is-opened')
  })
}

function closeModal(element, event) {
  element.classList.remove('popup_is-opened')   
}

function keyHandler(event, element) {
  if(event.key === 'Escape') {
    closeModal(element, event)
  } 
}
export { openModal, closeModal, keyHandler}