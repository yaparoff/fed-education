
var login = document.querySelector('#userName').value;
var password = document.querySelector('#password').value;
var form = document.querySelector('#form');
var submit = document.querySelector('.button');
var text = document.querySelector('#text');

function send() {
	//login = base64_encode(login);
	//password = base64_encode(password);
	var credentials = btoa('user1:password1');
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:3000/api/auth/basic', true);
	xhr.setRequestHeader('Authorization', 'Basic ' + credentials);
	 
	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;

		if (xhr.status != 200) {
			alert( xhr.status + ': ' + xhr.statusText );
		} else {
			var arr = JSON.parse(xhr.responseText);
			
			for(var i = 0; i < arr.length; i++) {
				if ((login == arr[i]["username"]) && (password == arr[i]["password"])) {
					welcome(login);
				} else {
					console.log('Error');
				}
			}
		}
	}
	xhr.send();
	//xhr.send();
}


function welcome(user) {
	form.style.display = "none";
	text.innerHTML = 'Welcome ' + user + '!';
}

submit.addEventListener('click', function(event) {
	event.preventDefault();
	send();
});

//submit.addEventListene//r('click', send);

function base64_encode( data ) {
	var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var o1, o2, o3, h1, h2, h3, h4, bits, i=0, enc='';

	do { // pack three octets into four hexets
		o1 = data.charCodeAt(i++);
		o2 = data.charCodeAt(i++);
		o3 = data.charCodeAt(i++);
		bits = o1<<16 | o2<<8 | o3;
		h1 = bits>>18 & 0x3f;
		h2 = bits>>12 & 0x3f;
		h3 = bits>>6 & 0x3f;
		h4 = bits & 0x3f;

		// use hexets to index into b64, and append result to encoded string
		enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	} while (i < data.length);

	switch( data.length % 3 ){
		case 1:
			enc = enc.slice(0, -2) + '==';
		break;
		case 2:
			enc = enc.slice(0, -1) + '=';
		break;
	}

	return enc;
}
