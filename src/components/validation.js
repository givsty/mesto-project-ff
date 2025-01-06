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
    const input = document.querySelectorAll(`${inputSelector}`)
    input.forEach((inputElement)=>{
      console.log(inputElement);
    })
  })
}

function clearValidation() {
  return;
}

function buttonState() {

}
export { enableValidation, clearValidation };
