import { createCard } from "./card";

function searchCard() {
  fetch('https://mesto.nomoreparties.co/cohort-mag-4/cards', {
    headers: {
      authorization: '561bff47-1094-4520-9c65-f40457c0b35c'
    }
  })
}

function renderCard() {
  searchCard()
    .then(res => res.json())
    .catch((error)=>{
      console.log(error)
    })
    .then((data) => {
      console.log(typeof data)
    });
}
  
