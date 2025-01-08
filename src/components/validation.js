function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector))
    setEventListener({
      formElement,
      inputList,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    });
  });
}
function setEventListener({
  formElement,
  inputList,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const buttonElement = document.querySelector(submitButtonSelector)
  inputList.forEach((inputElement)=>{
    inputElement.addEventListener('input', ()=>{
      toggleButtonState({inputList, inactiveButtonClass, buttonElement})
      checkinputValidity({formElement, inputElement, inputErrorClass, errorClass})
    })
  })
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid
  })
}

function toggleButtonState({inputList, inactiveButtonClass, buttonElement}){
  if(hasInvalidInput(inputList)) {
    buttonElement.disabled = true
    buttonElement.classList.add(inactiveButtonClass)
  } else {
    buttonElement.disabled = false
    buttonElement.classList.remove(inactiveButtonClass)
  }
}

function checkinputValidity({formElement, inputElement, inputErrorClass, errorClass}) {
  if(!inputElement.validity.valid) {
    showInputError(inputElement.validationMessage, inputErrorClass, errorClass)
  } else {
    hideInputError()
  }
}
function showInputError(errorMessage, inputErrorClass, errorClass, inputElement) {
  console.log(errorMessage);
}

function hideInputError() {
  return ''
}

function clearValidation() {
  return;
}

export { enableValidation, clearValidation };
