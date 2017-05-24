var handlebars = require('handlebars');
var Presenter = function(template) {
	this._template = template;
}

Presenter.prototype.render = function(element, data) {
    var compileTemplate = Handlebars.compile(this._template);
    var html = compiledTemplate(data);
	element.innerHTML = html;
	this.bindEvents();

};




Presenter.prototype.bindEvents = function() {

	openPopup: function() {
		userBtn.addEventListener('click', function(event) {
			event.preventDefault();
			authPopup.classList.add('auth-popup--visible');
			authSign.classList.add('auth-popup__container--animated');
			authRegister.classList.add('auth-popup__container--hidden');
		});
	},
	
	closePopup: function() {
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
	},

	submitForm: function() {
		authSignSubmit.addEventListener('click', function() {
			isEmptyInput(emailSign);
			isEmptyInput(passwordSign);
		    validateEmail(emailSign);
		});
	},
    
    isEmptyInput: function() {
		if (input.value == '') {
			input.classList.add('auth-popup__input--invalid');
			input.nextElementSibling.innerHTML = 'A field is required';
		}
	},

	validateEmail: function(emailInput) {
		if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(emailInput.value)) {
			emailInput.classList.add('auth-popup__input--invalid');
	        emailInput.nextElementSibling.innerHTML = 'Email is not valid';
		}
	},

	toggleAuthForms: function(from, to, link) {
		link.addEventListener('click', function(event) {
			event.preventDefault();
			from.classList.add('auth-popup__container--hidden');
			to.classList.remove('auth-popup__container--hidden');
			to.classList.add('auth-popup__container--visible');
		});
	}


};

module.exports = Presenter;