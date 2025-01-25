const config = {
  baseUrl: 'https://mesto.nomoreparties.co/cohort-mag-4/cards',
  headers: {
    authorization: '561bff47-1094-4520-9c65-f40457c0b35c',
    'Content-Type': 'application/json',
  },
};

export function getInitialCards() {
  return fetch(`${config.baseUrl}`, {
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

export function postInitialCard(post) {
  return fetch(`${config.baseUrl}`, {
    headers: config.headers.authorization,
    method: 'POST',
    body: JSON.stringify({
      _id: config.authorization,
      name: post.name,
      link: post.link,
      likeCard: likeCard,
      handleImageClick: handleImageClick,
      likes: post.likes,
      deleteActive: false
    }),
    headers: config.headers,
  })
  .then((result) => {
    if(result.ok) {
      result.json()
    }
    return Promise.reject(`Ошибка ${result.status}`)
  })
}

export function getProfileName() {
  return fetch('', {
    headers: config.headers.authorization
  })
    .then((result)=>{
      if(result.ok) {
        result.json()
      }
      return Promise.reject(`Ошбика ${result.status}`)
    })
}

export function postProfileName() {
  return fetch()
}
