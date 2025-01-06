function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const form = document.querySelectorAll(`${formSelector}`)
  form.forEach((formElement)=>{
    formElement.addEventListener('submit', (event)=>{
      event.preventDefault()
    })
    const input = formElement.querySelectorAll(`${inputSelector}`)
    const buttonElement = formElement.querySelector(`${submitButtonSelector}`)
    input.forEach((inputElement)=>{
      inputElement.addEventListener('input', (event)=>{
        toggleButtonState(input, buttonElement, inactiveButtonClass)
      })
    })
  })
}

function hasInvalidInput(inputList) {
  return some.inputList((inputElement)=>{
    return !inputElement.validity.valid
  })
}

function clearValidation() {
  return;
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(`${inactiveButtonClass}`)
  }else {
    buttonElement.classList.remove(`${inactiveButtonClass}`)
  }
}


export { enableValidation, clearValidation };