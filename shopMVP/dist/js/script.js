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


userBtn.addEventListener('click', function(event) {
	event.preventDefault();
	authPopup.classList.add('auth-popup--visible');
	authSign.classList.add('auth-popup__container--animated');
	authRegister.classList.add('auth-popup__container--hidden');
});

authRegLink.addEventListener('click', function(event) {
	event.preventDefault();
	authSign.classList.add('auth-popup__container--hidden');
	authRegister.classList.remove('auth-popup__container--hidden');
	authRegister.classList.add('auth-popup__container--visible');
});

authSignLink.addEventListener('click', function(event) {
	event.preventDefault();
	authRegister.classList.add('auth-popup__container--hidden');
	authSign.classList.remove('auth-popup__container--hidden');
	authSign.classList.add('auth-popup__container--visible');
});

function toggleAuthForms(from, to, link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		from.classList.add('auth-popup__container--hidden');
		to.classList.remove('auth-popup__container--hidden');
		to.classList.add('auth-popup__container--visible');
	});
}
authPopup.addEventListener('click', function(event) {
	var target = event.target;
	for (var i = 0; i < closePopup.length; i++) {
		if (target == closePopup[i]) {
			authPopup.classList.remove('auth-popup--visible');
			for (var i = 0; i < authPopupContainers.length; i++) {
				authPopupContainers[i].classList.remove('auth-popup__container--animated');
				authPopupContainers[i].classList.remove('auth-popup__container--hidden');
			}
		}
	}
});

authSignSubmit.addEventListener('click', function() {
	isEmptyInput(emailSign);
	isEmptyInput(passwordSign);
//    validateEmail(emailSign);
	
	if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(emailSign.value)) {
		emailSign.classList.add('auth-popup__input--invalid');
        emailSign.nextElementSibling.innerHTML = 'Email is not valid';
	}
});

function isEmptyInput(input) {
	if (input.value == '') {
		input.classList.add('auth-popup__input--invalid');
		input.nextElementSibling.innerHTML = 'A field is required';
	}
}
/*
for (var i = 0; authPopupInputs.length; i++) {
	authPopupInputs[i].addEventListener('focus', function() {
		if (authPopupInputs[i].classList.contains('auth-popup__inpit--invalid')) {
			authPopupInputs[i].classList.remove('auth-popup__inpit--invalid');
		}
	});
}
*/

//function validateEmail(input) {
//    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(input.value) == true) {
//		input.classList.add('auth-popup__input--invalid');
//        input.nextElementSibling.innerHTML = 'Email is not valid';
//	}
//}



//for (var i = 0; authPopupInputs.length; i++) {
//	authPopupInputs[i].addEventListener('blur', function() {
//		if (authPopupInputs[i].value == '') {
//			authPopupInputs[i].classList.add('auth-popup__inpit--invalid');
//		}
//	});
//}

//function controlPopups(event) {
//	var target = event.target;
//	if (target.classList.contains('auth-popup') || target.classList.contains('auth-popup__close')) {
//		
//	}
//}


var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/goods2.json', true);
xhr.send();
xhr.onreadystatechange = function() {
	if (xhr.readyState != 4) return;
	
	if (xhr.status != 200) {
		alert( xhr.status + ': ' + xhr.statusText );
	} else {
		var obj = JSON.parse(xhr.responseText);
		var templateGood = document.querySelector('#templateGood').innerHTML;
		var compileTemplate = Handlebars.compile(templateGood);
		var result = compileTemplate(obj);
		var goodsList = document.querySelector('.goods-list');
		goodsList.innerHTML = result;
	}
}


