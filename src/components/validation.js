function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formList = Array.from(document.querySelectorAll(`${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    setEventListener({
      formElement,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    });
  });
}
function setEventListener({
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const inputList = formElement.querySelectorAll(inputSelector);
  const buttonElement = formElement.querySelector(submitButtonSelector)
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', ()=>{  
      checkInputValidity(formElement, inputElement)
      toggleButtonState(inputList, buttonElement, inactiveButtonClass)
    })
  });
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass)
  }else {
    buttonElement.classList.remove(inactiveButtonClass)
  }
}
function checkInputValidity(formElement, inputElement) {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement)
  } else {
    hideInputError()
  }
}

function hasInvalidInput(inputList) { 
  // return inputList.some((inputElement) => {
  //   return !inputElement.validity.valid;
  // });
}

function hideInputError() {
  return ''
}

function showInputError () {
  return ''
}

function clearValidation() {
  return;
}

export { enableValidation, clearValidation };