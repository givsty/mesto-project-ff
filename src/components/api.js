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