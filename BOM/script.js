var history = document.querySelector('#history span');
var historyBack = document.querySelector('#historyBack');
var historyForward = document.querySelector('#historyForward');

historyBack.addEventListener('click', function() {
	window.history.back();
});
historyForward.addEventListener('click', function() {
	window.history.forward();
});
//history.innerHTML = window.history.length;
document.write('<div id="history">Длина истории посещений:<br><span>' + window.history.length + '</span></div>');
