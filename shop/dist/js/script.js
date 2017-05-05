var userBtn = document.querySelector('.header__user-btn');
var authPopup = document.querySelector('.auth-popup');
var authPopupWrapper = document.querySelector('.auth-popup__wrapper');
var closePopup = document.querySelector('.auth-popup__close');

userBtn.addEventListener('click', function(event) {
	event.preventDefault();
	authPopup.classList.add('auth-popup_visible');
	authPopupWrapper.style.animationName = 'auth-open';
	authPopupWrapper.style.animationDuration = '0.6s';
});

closePopup.addEventListener("click", function(event) {
	event.preventDefault();
	authPopup.classList.remove('auth-popup_visible');
	authPopupWrapper.style.animation = 'none';
});