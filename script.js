let formOpener = document.querySelector('.profile__edit-button');
let content = document.querySelector('.popup');
function popupOpened() {
    content.classList.add('popup__opened');
}
formOpener.addEventListener('click', popupOpened);

let formCloser = document.querySelector('.popup__close-button');
function popupClosed() {
    content.classList.remove('popup__opened');
}
formCloser.addEventListener('click', popupClosed);

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__comment');
let profileAuthor = document.querySelector('.profile__name_author');
let profileComment = document.querySelector('.profile__name_comment');
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileAuthor.textContent = nameInput.value;
    profileComment.textContent = jobInput.value;

    popupClosed();
}

formElement.addEventListener('submit', formSubmitHandler);