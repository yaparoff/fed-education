$('.header__user-btn').click(function(event) {
	event.preventDefault();
	$('.auth-popup').addClass('auth-popup--visible');
	$('#authSign').addClass('auth-popup__container--animated');
	$('#authRegister').addClass('auth-popup__container--hidden');
});

$('#authRegLink').click(function() {
	$('#authSign').addClass('auth-popup__container--hidden');
	$('#authRegister').removeClass('auth-popup__container--hidden');
	$('#authRegister').addClass('auth-popup__container--visible');
});

$('#authSignLink').click(function() {
	$('#authRegister').addClass('auth-popup__container--hidden');
	$('#authSign').removeClass('auth-popup__container--hidden');
	$('#authSign').addClass('auth-popup__container--visible');
});

$('#closeSign').click(function(event) {
	event.preventDefault();
	$('.auth-popup').removeClass('auth-popup--visible');
	$('#authSign').removeClass('auth-popup__container--animated');
	$('#authSign').removeClass('auth-popup__container--hidden');
	$('#authRegister').removeClass('auth-popup__container--hidden');
});

$('#closeRegister').click(function(event) {
	event.preventDefault();
	$('.auth-popup').removeClass('auth-popup--visible');
	$('#authSign').removeClass('auth-popup__container--animated');
	$('#authSign').removeClass('auth-popup__container--hidden');
	$('#authRegister').removeClass('auth-popup__container--hidden');
});
