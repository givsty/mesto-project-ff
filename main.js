(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}t.p="";var n={baseUrl:"https://mesto.nomoreparties.co/v1/cohort-mag-4",headers:{authorization:"561bff47-1094-4520-9c65-f40457c0b35c","Content-Type":"application/json"}};function r(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}function o(){return fetch("".concat(n.baseUrl,"/users/me"),{headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},method:"GET"}).then((function(t){return r(t)}))}var a=document.querySelector("#card-template").content;function i(t,e){var o;(o=e,fetch("".concat(n.baseUrl,"/cards/").concat(o),{headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},method:"DELETE"}).then((function(t){return r(t)}))).then((function(){t.target.closest(".places__item").remove()})).catch((function(t){console.log(t)}))}function c(t,e,o){var a=o.likesValue;(function(t){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:n.headers.authorization}}).then((function(t){return r(t)}))})(e).then((function(e){a.textContent=e.likes.length,t.target.classList.add("card__like-button_is-active")})).catch((function(t){console.log(t)})).finally((function(){}))}function u(t){t.classList.add("popup_is-animated"),setTimeout((function(){t.classList.add("popup_is-opened")})),document.addEventListener("keydown",s)}function l(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s)}function s(t){"Escape"===t.key&&l(document.querySelector(".popup_is-opened"))}const p=t.p+"fc3e6875d825f899a98d.svg";function d(t){var e=t.inputList,n=t.inactiveButtonClass,r=t.buttonElement;!function(t){return t.some((function(t){return!t.validity.valid}))}(e)?(r.disabled=!1,r.classList.remove(n)):(r.disabled=!0,r.classList.add(n))}function f(t,e,n,r){var o=t.querySelector(".".concat(r.name,"-input-error"));r.classList.remove(e),o.classList.add(n),o.textContent=""}function m(t,e){var n=e.inputSelector,r=e.submitButtonSelector,o=e.inactiveButtonClass,a=e.inputErrorClass,i=e.errorClass,c=Array.from(t.querySelectorAll(n)),u=t.querySelector(r);u.disabled=!0,u.classList.add(o),c.forEach((function(e){f(t,a,i,e)}))}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var _,h=document.querySelector(".profile__add-button"),v=document.querySelector(".profile__image"),b=document.querySelector(".profile__edit-button"),S=document.querySelector(".places").querySelector(".places__list"),C=document.querySelectorAll(".popup"),g=document.querySelector(".header__logo"),E=document.forms["edit-profile"],k=document.forms["new-place"],q=document.forms.avatar,L=document.querySelector(".profile__title"),T=document.querySelector(".profile__description"),j=document.querySelector(".popup_type_edit"),A=document.querySelector(".popup_type_avatar"),z=j.querySelector(".popup__input_type_name"),x=j.querySelector(".popup__input_type_description"),B=document.querySelector(".popup_type_new-card"),w=k.querySelector(".popup__input_type_card-name"),I=k.querySelector(".popup__input_type_url"),U=document.querySelector(".popup_type_image"),P=U.querySelector(".popup__image"),O=U.querySelector(".popup__caption"),D=q.querySelector(".popup__input_type_url");g.src=p;var V,M,N,J,H,G,$,F={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function K(t,e){var o=function(t){var e=t.card,o=t.deleteCard,i=t.likeCard,c=t.handleImageClick,u=t.userId,l=e.name,s=e.link,p=e.likes,d=e._id,f=e.owner,m=a.querySelector(".places__item").cloneNode(!0),y=m.querySelector(".card__title"),_=m.querySelector(".card__image"),h=m.querySelector(".card__delete-button"),v=m.querySelector(".card__like-button"),b=m.querySelector(".card__like-counter");console.log(f._id),h.addEventListener("click",(function(t){o(t,d)})),v.addEventListener("click",(function(t){S?(function(t,e,o){var a=o.likesValue;(function(t){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:n.headers.authorization,"Content-Type":"application/json"}}).then((function(t){return r(t)}))})(e).then((function(e){a.textContent=e.likes.length,t.target.classList.remove("card__like-button_is-active")})).catch((function(t){console.log(t)})).finally((function(){}))}(t,d,{likes:p,likesValue:b}),S=!1):(i(t,d,{likes:p,likesValue:b}),S=!0)}));var S=p.some((function(t){return t._id===u}));return S&&v.classList.add("card__like-button_is-active"),_.addEventListener("click",(function(){c(l,s)})),f._id!==u&&h.remove(),y.textContent=l,_.src=s,_.alt=l,b.textContent=p.length,m}(t);S[e](o)}function Q(t,e){P.src=e,P.alt=t,O.textContent=t,u(U)}function R(t,e){e.querySelector(".popup__button").textContent=t?"Сохранение...":"Сохранить"}Promise.all([fetch("".concat(n.baseUrl,"/cards"),{headers:n.headers}).then((function(t){return r(t)})),o()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,c=[],u=!0,l=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];Array.from(o).forEach((function(t){_=a._id,L.textContent=a.name,T.textContent=a.about,v.style.backgroundImage="url('".concat(a.avatar,"')"),K({card:t,likeCard:c,deleteCard:i,handleImageClick:Q,userId:_},"prepend")}))})).catch((function(t){console.log(t)})),k.addEventListener("submit",(function(t){var o,a,u,s;R(!0,t.target),(o={name:w.value,link:I.value},fetch("".concat(n.baseUrl,"/cards"),(a={headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:o.name,link:o.link})},u="headers",s=n.headers,(u=function(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}(u))in a?Object.defineProperty(a,u,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[u]=s,a)).then((function(t){return r(t)}))).then((function(t){l(B),K({card:t,likeCard:c,deleteCard:i,handleImageClick:Q,userId:_},"prepend"),k.reset()})).catch((function(t){console.log(t)})).finally((function(){R(!1,t.target)})),t.preventDefault()})),h.addEventListener("click",(function(t){m(k,F),u(B)})),b.addEventListener("click",(function(){m(E,F),o().then((function(t){var e=t.name,n=t.about;z.value=e,x.value=n})).catch((function(t){console.log(t)})),u(j)})),v.addEventListener("click",(function(t){m(q,F),t.preventDefault(),u(A)})),E.addEventListener("submit",(function(t){var e,o={name:z.value,about:x.value};R(!0,t.target),(e=o,fetch("".concat(n.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(t){return r(t)}))).then((function(t){L.textContent=t.name,T.textContent=t.about,l(j)})).catch((function(t){console.log(t)})).finally((function(){R(!1,t.target)})),t.preventDefault()})),q.addEventListener("submit",(function(t){var e;R(!0,t.target),(e=D.value,fetch("".concat(n.baseUrl,"/users/me/avatar"),{headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e}),method:"PATCH"}).then((function(t){return r(t)}))).then((function(t){v.style.backgroundImage="url('".concat(t.avatar,"')"),l(A),m(q,F)})).catch((function(t){console.log(t)})).finally((function(){R(!1,t.target)})),t.preventDefault()})),C.forEach((function(t){t.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_is-opened")||e.target.classList.contains("popup__close"))&&l(t)}))})),M=(V=F).formSelector,N=V.inputSelector,J=V.submitButtonSelector,H=V.inactiveButtonClass,G=V.inputErrorClass,$=V.errorClass,Array.from(document.querySelectorAll(M)).forEach((function(t){var e=Array.from(t.querySelectorAll(N));!function(t){var e=t.formElement,n=t.inputList,r=t.submitButtonSelector,o=t.inactiveButtonClass,a=t.inputErrorClass,i=t.errorClass,c=e.querySelector(r);d({inputList:n,inactiveButtonClass:o,buttonElement:c}),n.forEach((function(t){t.addEventListener("input",(function(r){r.preventDefault(),d({inputList:n,inactiveButtonClass:o,buttonElement:c}),function(t){var e=t.formElement,n=t.inputElement,r=t.inputErrorClass,o=t.errorClass;n.validity.patternMismatch?n.setCustomValidity(n.dataset.errorMessage):n.setCustomValidity(""),n.validity.valid?f(e,r,o,n):function(t,e,n,r,o){var a=t.querySelector(".".concat(o.name,"-input-error"));o.classList.add(n),a.classList.add(r),a.textContent=e}(e,n.validationMessage,r,o,n)}({formElement:e,inputElement:t,inputErrorClass:a,errorClass:i})}))}))}({formElement:t,inputList:e,submitButtonSelector:J,inactiveButtonClass:H,inputErrorClass:G,errorClass:$})}))})();