const config = {
  baseUrl: 'https://mesto.nomoreparties.co/cohort-mag-4',
  headers: {
    authorization: '561bff47-1094-4520-9c65-f40457c0b35c',
    'Content-Type': 'application/json',
  },
};

export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
  .then((result) => {
    if (result.ok) {
      return result.json();
    } else {
      return Promise.reject(`Ошибка ${result.status}`);
    }
  })
}

export function postInitialCard(cardElement) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(cardElement),
    headers: config.headers,
  })
  .then((result) => {
    if(result.ok) {
      return result.json()
    }
    return Promise.reject(`Ошибка ${result.status}`)
  })
}

export function getProfileName() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json',
    },
    method: 'GET'
  })
  .then((result)=>{
    return result.json()
  })
}

export function patchProfileName(data) {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    method: 'PATCH' 
  })
  .then((result)=>{
    if(result.ok) {
      result.json()
    }
    return Promise.reject(`Ошибка ${result.status}`)
  })
}

export function getLikes() {
  return fetch(`${config.baseUrl}`)
}

export function postLikes() {
  return fetch(`${config.baseUrl}`)
}

getProfileName()
  .then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.log(err)
  })