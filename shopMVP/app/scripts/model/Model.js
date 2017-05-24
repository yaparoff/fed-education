export default function Model() {
	
}

function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'js/goods2.json', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            var data = JSON.parse(xhr.responseText);
            return data;
//			var templateGood = document.querySelector('#templateGood').innerHTML;
//			var compileTemplate = Handlebars.compile(templateGood);
//			var result = compileTemplate(obj);
//			var goodsList = document.querySelector('.goods-list');
//			goodsList.innerHTML = result;
        }
    } 
}
module.exports = new Model();