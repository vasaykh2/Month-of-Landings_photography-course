const header = document.querySelector('.header');
const openPopupNav = header.querySelector('.burger-menu__button');
const popup = document.querySelector('.popup');
const closePopupButtons = document.querySelectorAll('.popup__close-button');
const itemsNavPopup = popup.querySelectorAll('.nav__item');

const form = document.querySelector('.form');
const inputEMail = form.querySelector('.form__item');
const registButton = form.querySelector('.form__reg');

//открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  header.classList.add('header_type_down');
}

//закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  header.classList.remove('header_type_down');
}

//обновление поля формы
function updateForm() {
  inputEMail.placeholder = '';
}

//функция submit для формы регистрации E-mail
function handleFormSubmit(evt) {
  evt.preventDefault();
  inputEMail.placeholder = inputEMail.textContent;
  registButton.textContent = 'Спасибо!';
}

//функция реакции на нажатие пункта меню навигации popup
function handleItemNavPopup(evt) {
  closePopup(popup);
}

//обработчик всех кнопок закрытия popup (крестиков)
closePopupButtons.forEach((button) => {
  // поиск ближайшего (родительского) к крестику popup
  const popup = button.closest('.popup');
  // обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

//обработчик наведения для формы регистрации E-mail
inputEMail.addEventListener('focus', updateForm);

//обработчик submit для формы регистрации E-mail
form.addEventListener('submit', handleFormSubmit);

//обработчик всех пунктов меню навигации popup
itemsNavPopup.forEach((item) =>
  item.addEventListener('click', handleItemNavPopup)
);

//обработчик кнопки открытия popup меню навигации
openPopupNav.addEventListener('click', () => openPopup(popup));
