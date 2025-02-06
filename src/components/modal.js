//Popup сard
function openModal(element) {
  element.classList.add("popup_is-opened");
  //События нажатия на клавиатуре
  document.addEventListener("keydown", handleEscape);
}

function closeModal(element) {
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
}

function handleEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closeModal(openedPopup);
  }
}

export { openModal, closeModal };
