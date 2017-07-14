(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
var goodsToListLink = document.querySelector('#goodsToList');
var goodsToGridLink = document.querySelector('#goodsToGrid');
var vkSignLink = document.querySelector('.auth-popup__social');

var goodsList = document.querySelector('.goods-list');
var tabletsLink = document.querySelector('#tabletsLink');
var phonesLink = document.querySelector('#phonesLink');
var notebooksLink = document.querySelector('#notebooksLink');


function operateClasses(selector, actionClass, action) {
	var selectedElements = document.querySelectorAll(selector);
	if (action === 'add') {
		for (var i = 0; i < selectedElements.length; i++) {
			selectedElements[i].classList.add(actionClass);
		}
	} else if (action === 'remove') {
		for (var i = 0; i < selectedElements.length; i++) {
			selectedElements[i].classList.remove(actionClass);
		}
	}
}

userBtn.addEventListener('click', function (event) {
	event.preventDefault();
	authPopup.classList.add('auth-popup--visible');
	authSign.classList.add('auth-popup__container--animated');
	authRegister.classList.add('auth-popup__container--hidden');
});
/*
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
*/
function toggleAuthForms(from, to, link) {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		from.classList.add('auth-popup__container--hidden');
		to.classList.remove('auth-popup__container--hidden');
		to.classList.add('auth-popup__container--visible');
	});
}
toggleAuthForms(authSign, authRegister, authRegLink);
toggleAuthForms(authRegister, authSign, authSignLink);
/*
goodsToListLink.addEventListener('click', function(event) {
	event.preventDefault();
	operateClasses('#goodsToList', 'goods-list__btn--visible', 'remove');
	operateClasses('#goodsToGrid', 'goods-list__btn--visible', 'add');
	
	operateClasses('.goods-list', 'goods-list--vertical', 'add');
	operateClasses('.good', 'good--vertical', 'add');
	operateClasses('.good__image', 'good__image--vertical', 'add');
	operateClasses('.good__info', 'good__info--vertical', 'add');
	operateClasses('.good__title', 'good__title--vertical', 'add');
	operateClasses('.good__price', 'good__price--vertical', 'add');
	operateClasses('.good__description', 'good__description--vertical', 'add');
	operateClasses('.good__buy', 'good__buy--vertical', 'add');
});

goodsToGridLink.addEventListener('click', function(event) {
	event.preventDefault();
	operateClasses('#goodsToList', 'goods-list__btn--visible', 'add');
	operateClasses('#goodsToGrid', 'goods-list__btn--visible', 'remove');
	
	operateClasses('.goods-list', 'goods-list--vertical', 'remove');
	operateClasses('.good', 'good--vertical', 'remove');
	operateClasses('.good__image', 'good__image--vertical', 'remove');
	operateClasses('.good__info', 'good__info--vertical', 'remove');
	operateClasses('.good__title', 'good__title--vertical', 'remove');
	operateClasses('.good__price', 'good__price--vertical', 'remove');
	operateClasses('.good__description', 'good__description--vertical', 'remove');
	operateClasses('.good__buy', 'good__buy--vertical', 'remove');
});

*/
authPopup.addEventListener('click', function (event) {
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

authSignSubmit.addEventListener('click', function () {
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

vkSignLink.addEventListener('click', sendRequest);

function getUrl(method, params) {
	params['access_token'] = "c42346f831684a2ba6fdf6b5c31908da6a959192591e29645457874af532e9813e200b4b16faa3618e8bd";
	return "https://api.vk.com/method/" + method + "?" + $.param(params);
}

function sendRequest() {
	$.ajax({
		url: getUrl('users.get', { fields: 'photo' }),
		method: "GET",
		dataType: "JSONP",
		success: function success(data) {
			$('social-popup__photo').css({ 'backgroundImage': 'url(' + data.response[0].photo + ')' });
			console.log(data.response[0].first_name + " " + data.response[0].last_name + " " + data.response[0].photo);
		}
	});
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

/*
var xhr = new XMLHttpRequest();
//xhr.open('GET', 'js/goods2.json', true);
xhr.open('GET', 'http://localhost:2403/goods/', true);
xhr.send();
xhr.onreadystatechange = function () {
	if (xhr.readyState != 4) return;

	if (xhr.status != 200) {
		alert(xhr.status + ': ' + xhr.statusText);
	} else {
		var obj = JSON.parse(xhr.responseText);
		var templateGood = document.querySelector('#templateGood').innerHTML;
		var compileTemplate = Handlebars.compile(templateGood);
		var result = compileTemplate(obj);
		var goodsList = document.querySelector('.goods-list');
		goodsList.innerHTML = result;
	}
};*/

function print(item) {
	var resultHTML = `<a href="#" class="good">\
						<div class="good__image">\
							<img src="${item.img}" alt="${item.name}">\
						</div>\
						<div class="good__info">\
							<h3 class="good__title">${item.name}</h3>\
							<div class="good__price">$${item.price}</div>\
							<div class="good__description">${item.description}</div>\
							<span class="good__buy">Add to cart</span>\
						</div>\
					</a>`;

	goodsList.innerHTML += resultHTML;
}

tabletsLink.addEventListener('click', function(event) {
	event.preventDefault();
	goodsList.innerHTML = '';
	dpd.tablets.get(function(arr) {
		for (var i = 0; arr.length; i++) {
			print(arr[i]);
		}
	});
});

phonesLink.addEventListener('click', function(event) {
	event.preventDefault();
	goodsList.innerHTML = '';
	dpd.phones.get(function(arr) {
		for (var i = 0; arr.length; i++) {
			print(arr[i]);
		}
	});
});

notebooksLink.addEventListener('click', function(event) {
	event.preventDefault();
	goodsList.innerHTML = '';
	dpd.notebooks.get(function(arr) {
		for (var i = 0; arr.length; i++) {
			print(arr[i]);
		}
	});
});

dpd.phones.del({id: 'e79516561a72c802'});


/*
dpd.phones.post(
	{
		img: 'img/goods/phone5.jpg',
		name: 'phone3', 
		price: 69,
		description: 'The case is made out of polycarbonate, which is a good electrical insulator and heat- & flame- resistant. This means you can use this device in the outdoor conditions with no worry at all'
	}
);*/

//dpd.phones.del({id: 'dd9a47b393835811'});

//dpd.phones.put('92814e5b96a068de', {name: 'Iphone7', price: 1000});
},{}]},{},[1])

/*
function createGood(category, goodImg, goodName, goodPrice, goodDescr) {
	var productData = { 
		img: goodImg,
		name: goodName, 
		price: goodPrice,
		description: goodDescr
	};
	fetch( '/' + category, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(productData)
	})
	.then((result) => { console.log(result.status) });
}
createGood('phones', 'img/goods/phone4.jpg', 'phone3', 81, 'Description of phone3');
*/
/*
function createGood(category, goodImg, goodName, goodPrice, goodDescr) {
	dpd.category.post(
		{
			img: goodImg,
			name: goodName, 
			price: goodPrice,
			description: goodDescr
		}
	);
}
createGood(phones, 'img/goods/phone4.jpg', 'phone3', 81, 'Description of phone3');
*/

/*
function deleteGood(goodId, category) {
	dpd.category.del({id: goodId});
}
deleteGood('0471afb942cb9ab6', phones);*/


//# sourceMappingURL=app.js.map
