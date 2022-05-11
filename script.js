const formOpener = document.querySelector('.profile__edit');
const content = document.querySelector('.popup');
function popupOpened() {
    content.classList.add('popup__opened');
}
formOpener.addEventListener('click', popupOpened);

const formCloser = document.querySelector('.popup__close-button');
function popupClosed() {
    content.classList.remove('popup__opened');
}
formCloser.addEventListener('click', popupClosed);

const formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__comment');
let profileAuthor = document.querySelector('.profile__author');
let profileComment = document.querySelector('.profile__comment');
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileAuthor.textContent = nameInput.value;
    profileComment.textContent = jobInput.value;

    popupClosed();
}

formElement.addEventListener('submit', formSubmitHandler);