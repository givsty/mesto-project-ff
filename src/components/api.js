const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-mag-4",
  headers: {
    authorization: "561bff47-1094-4520-9c65-f40457c0b35c",
    "Content-Type": "application/json",
  },
};

function getResponseData(result) {
  if(result.ok) {
    return result.json()
  }
  return Promise.reject(`Ошибка ${result.status}`);
}

export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((result) => {
    return getResponseData(result)
  });
}

export function postInitialCard(cardElement) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: cardElement.name,
      link: cardElement.link,
    }),
    headers: config.headers,
  }).then((result) => {
    return getResponseData(result)
  });
}

export function getProfileName() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization,
      "Content-Type": "application/json",
    },
    method: "GET",
  }).then((result) => {
    return getResponseData(result)
  });
}

export function patchProfileName(data) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: config.headers.authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  }).then((result) => {
    return getResponseData(result)
  });
}

export function putLikes(_id) {
  return fetch(`${config.baseUrl}/cards/likes/${_id}`, {
    method: "PUT",
    headers: {
      authorization: config.headers.authorization,
    },
  }).then((result) => {
    return getResponseData(result)
  });
}

export function deletLikes(_id) {
  return fetch(`${config.baseUrl}/cards/likes/${_id}`, {
    method: "DELETE",
    headers: {
      authorization: config.headers.authorization,
      "Content-Type": "application/json",
    },
  }).then((result) => {
    return getResponseData(result)
  });
}

export function postAvatarImage(image) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: {
      authorization: config.headers.authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: image,
    }),
    method: "PATCH",
  }).then((result) => {
    return getResponseData(result)
  });
}

export function deleteInitialCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    headers: {
      authorization: config.headers.authorization,
      "Content-Type": "application/json",
    },
    method: "DELETE",
  }).then((result) => {
    return getResponseData(result)
  });
}
