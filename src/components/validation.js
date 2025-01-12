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
  const buttonElement = formElement.querySelector(submitButtonSelector)
  toggleButtonState({inputList, inactiveButtonClass, buttonElement})
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
    showInputError(formElement, inputElement.validationMessage, inputErrorClass, errorClass, inputElement)
  } else {
    hideInputError(formElement, inputErrorClass, errorClass, inputElement)
  }
}

function showInputError(formElement, errorMessage, inputErrorClass, errorClass, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`)
  inputElement.classList.add(inputErrorClass)
  errorElement.classList.add(errorClass)
  errorElement.textContent = errorMessage
}

function hideInputError(formElement, inputErrorClass, errorClass, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`)
  inputElement.classList.remove(inputErrorClass)
  errorElement.classList.add(errorClass)
  errorElement.textContent = ''
}

function clearValidation() {
  return '';
}

export { enableValidation, clearValidation };
