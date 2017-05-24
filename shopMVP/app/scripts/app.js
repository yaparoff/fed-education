var userBtn = document.querySelector('.header__user-btn');
var authPopup = document.querySelector('.auth-popup');
var authPopupContainers = document.querySelectorAll('.auth-popup__container');
var authPopupInputs = document.querySelectorAll('.auth-popup__input');
var closePopup = document.querySelectorAll('.auth-popup__close');
var authRegister = document.querySelector('#authRegister');
var authSign = document.querySelector('#authSign');
var authSignSubmit = document.querySelector('#authSignSubmit');
var authRegLink = document.querySelector('#authRegLink');
var authSignLink = document.querySelector('#authSignLink');
var emailSign = document.querySelector('#emailSign');
var passwordSign = document.querySelector('#passwordSign');


var outerContent = document.querySelector('.layout-center-wrapper');
var categoryScreen = require('presenters/categoryScreen.js');

var onHashChange = function() {
	switch(location.hash) {
		case '#category': 
			categoryScreen.init(outerContent);
			break;
		case '#main':
			mainScreen.init(outerContent);
	}
	previousHash = location.hash;
};

location.hash = '#category';
var previousHash;

window.addEventListener('hashchange', onHashChange);
onHashChange();