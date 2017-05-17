(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 2.Написать стрелочную функцию которая будет сразу возвращать сумму двух аргументов без ключевого слова return.*/

var add = function add(v, i) {
	return v + i;
};

/* 3. Написать стрелочную функцию которая будет возвращать пустой объект */

var empty = function empty() {
	return obj = {};
};

// let empty = () => {let obj = {}; return obj }

// let empty = () => ({});


/* 4. Создать объект в котором будет 2 метода, в одном из методов будет вызван setTimeout, который в свою очередь должен будет вызвать через какое-то время другой метод и передать контекст.
*/

var Person = function () {
	function Person(time) {
		_classCallCheck(this, Person);

		this.time = time;
	}

	_createClass(Person, [{
		key: 'say',
		value: function say() {
			var _this = this;

			this.time += 5;
			setTimeout(function () {
				alert(_this.sayPhrase.call(_this));
			}, 1000);
		}
	}, {
		key: 'sayPhrase',
		value: function sayPhrase() {
			return 'I have been waiting for you ' + this.time + ' minutes';
		}
	}]);

	return Person;
}();

var vasya = new Person(15);
console.log(vasya.sayPhrase());
vasya.say();
console.log(vasya.sayPhrase());

/* Iterator */

function makeCharIterator(str) {
	var arr = [];

	for (var i = 0; i < str.length; i++) {
		arr.push(str[i]);
	}
	return {
		next: function next() {
			for (var j = 0; j < arr.length; j++) {
				console.log({ done: false, char: arr[j] });
			}
			console.log({ done: true });
		}
	};
}

var iterator = makeCharIterator('lorem');
console.log(iterator);

console.log(iterator.next());

/*let & const*/

/*
- Область видимости - блок {}, в котором объявлена  (так же if, for, while)
- видны только после объявления
- Нельзя повторно объявлять

const - задает константу (т.е. переменную которую нельзя менять)

*/

/* Arrow Functions. Отличия от обычных функций*/

/*
- Лексическое связывание. Значения специальных переменных this, super и arguments определяются не тем, как стрелочные функции были вызваны, а тем, как они были созданы.
- Неизменяемые this, super и arguments. Значения этих переменных внутри стрелочных функций остаются неизменными на протяжении всего жизненного цикла функции.
- Стрелочные функции не могут быть использованы как конструктор и кидают ошибку при использовании с оператором new.
- Недоступность «собственного» значения переменной arguments.

*/

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFkZF9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7O0FBRUMsSUFBSSxNQUFNLFNBQU4sR0FBTSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBQUEsUUFBVSxJQUFJLENBQWQ7QUFBQSxDQUFWOztBQUVEOztBQUVDLElBQUksUUFBUSxTQUFSLEtBQVE7QUFBQSxRQUFPLE1BQU0sRUFBYjtBQUFBLENBQVo7O0FBRUE7O0FBRUE7OztBQUdEOzs7SUFHTSxNO0FBQ0wsaUJBQVksSUFBWixFQUFrQjtBQUFBOztBQUNqQixPQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0E7Ozs7d0JBQ0s7QUFBQTs7QUFDSixRQUFLLElBQUwsSUFBYSxDQUFiO0FBQ0QsY0FBVyxZQUFNO0FBQ2hCLFVBQU0sTUFBSyxTQUFMLENBQWUsSUFBZixPQUFOO0FBQ0EsSUFGRCxFQUVHLElBRkg7QUFHQTs7OzhCQUNXO0FBQ1gsVUFBTyxpQ0FBaUMsS0FBSyxJQUF0QyxHQUE2QyxVQUFwRDtBQUNBOzs7Ozs7QUFHRixJQUFJLFFBQVEsSUFBSSxNQUFKLENBQVcsRUFBWCxDQUFaO0FBQ0EsUUFBUSxHQUFSLENBQVksTUFBTSxTQUFOLEVBQVo7QUFDQSxNQUFNLEdBQU47QUFDQSxRQUFRLEdBQVIsQ0FBWSxNQUFNLFNBQU4sRUFBWjs7QUFJQTs7QUFFQSxTQUFTLGdCQUFULENBQTBCLEdBQTFCLEVBQStCO0FBQzlCLEtBQUksTUFBTSxFQUFWOztBQUVBLE1BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxJQUFJLE1BQXhCLEVBQWdDLEdBQWhDLEVBQXFDO0FBQ3BDLE1BQUksSUFBSixDQUFTLElBQUksQ0FBSixDQUFUO0FBQ0E7QUFDRCxRQUFPO0FBQ04sUUFBTSxnQkFBVztBQUNoQixRQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksSUFBSSxNQUF4QixFQUFnQyxHQUFoQyxFQUFxQztBQUNwQyxZQUFRLEdBQVIsQ0FBWSxFQUFDLE1BQU0sS0FBUCxFQUFjLE1BQU0sSUFBSSxDQUFKLENBQXBCLEVBQVo7QUFDQTtBQUNELFdBQVEsR0FBUixDQUFZLEVBQUMsTUFBTSxJQUFQLEVBQVo7QUFDQTtBQU5LLEVBQVA7QUFRQTs7QUFFRCxJQUFJLFdBQVcsaUJBQWlCLE9BQWpCLENBQWY7QUFDQSxRQUFRLEdBQVIsQ0FBWSxRQUFaOztBQUVBLFFBQVEsR0FBUixDQUFZLFNBQVMsSUFBVCxFQUFaOztBQUtBOztBQUVBOzs7Ozs7Ozs7QUFXQTs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiAyLtCd0LDQv9C40YHQsNGC0Ywg0YHRgtGA0LXQu9C+0YfQvdGD0Y4g0YTRg9C90LrRhtC40Y4g0LrQvtGC0L7RgNCw0Y8g0LHRg9C00LXRgiDRgdGA0LDQt9GDINCy0L7Qt9Cy0YDQsNGJ0LDRgtGMINGB0YPQvNC80YMg0LTQstGD0YUg0LDRgNCz0YPQvNC10L3RgtC+0LIg0LHQtdC3INC60LvRjtGH0LXQstC+0LPQviDRgdC70L7QstCwIHJldHVybi4qL1xyXG5cdFxyXG5cdGxldCBhZGQgPSAodiwgaSkgPT4gdiArIGk7XHJcblxyXG4vKiAzLiDQndCw0L/QuNGB0LDRgtGMINGB0YLRgNC10LvQvtGH0L3Rg9GOINGE0YPQvdC60YbQuNGOINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0L/Rg9GB0YLQvtC5INC+0LHRitC10LrRgiAqL1xyXG5cclxuXHRsZXQgZW1wdHkgPSAoKSA9PiAob2JqID0ge30pO1xyXG5cclxuXHQvLyBsZXQgZW1wdHkgPSAoKSA9PiB7bGV0IG9iaiA9IHt9OyByZXR1cm4gb2JqIH1cclxuXHJcblx0Ly8gbGV0IGVtcHR5ID0gKCkgPT4gKHt9KTtcclxuXHJcblxyXG4vKiA0LiDQodC+0LfQtNCw0YLRjCDQvtCx0YrQtdC60YIg0LIg0LrQvtGC0L7RgNC+0Lwg0LHRg9C00LXRgiAyINC80LXRgtC+0LTQsCwg0LIg0L7QtNC90L7QvCDQuNC3INC80LXRgtC+0LTQvtCyINCx0YPQtNC10YIg0LLRi9C30LLQsNC9IHNldFRpbWVvdXQsINC60L7RgtC+0YDRi9C5INCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMINC00L7Qu9C20LXQvSDQsdGD0LTQtdGCINCy0YvQt9Cy0LDRgtGMINGH0LXRgNC10Lcg0LrQsNC60L7QtS3RgtC+INCy0YDQtdC80Y8g0LTRgNGD0LPQvtC5INC80LXRgtC+0LQg0Lgg0L/QtdGA0LXQtNCw0YLRjCDQutC+0L3RgtC10LrRgdGCLlxyXG4qL1xyXG5cclxuY2xhc3MgUGVyc29uIHtcclxuXHRjb25zdHJ1Y3Rvcih0aW1lKSB7XHJcblx0XHR0aGlzLnRpbWUgPSB0aW1lO1xyXG5cdH1cclxuXHRzYXkoKSB7XHJcblx0ICB0aGlzLnRpbWUgKz0gNTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRhbGVydCh0aGlzLnNheVBocmFzZS5jYWxsKHRoaXMpKTtcclxuXHRcdH0sIDEwMDApXHJcblx0fTtcclxuXHRzYXlQaHJhc2UoKSB7XHJcblx0XHRyZXR1cm4gJ0kgaGF2ZSBiZWVuIHdhaXRpbmcgZm9yIHlvdSAnICsgdGhpcy50aW1lICsgJyBtaW51dGVzJztcclxuXHR9O1xyXG59XHJcblxyXG5sZXQgdmFzeWEgPSBuZXcgUGVyc29uKDE1KTtcclxuY29uc29sZS5sb2codmFzeWEuc2F5UGhyYXNlKCkpO1xyXG52YXN5YS5zYXkoKTtcclxuY29uc29sZS5sb2codmFzeWEuc2F5UGhyYXNlKCkpO1xyXG5cclxuXHJcblxyXG4vKiBJdGVyYXRvciAqL1xyXG5cclxuZnVuY3Rpb24gbWFrZUNoYXJJdGVyYXRvcihzdHIpIHtcclxuXHRsZXQgYXJyID0gW107XHJcblx0XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGFyci5wdXNoKHN0cltpXSk7XHJcblx0fVxyXG5cdHJldHVybiB7XHJcblx0XHRuZXh0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh7ZG9uZTogZmFsc2UsIGNoYXI6IGFycltqXX0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKHtkb25lOiB0cnVlfSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5sZXQgaXRlcmF0b3IgPSBtYWtlQ2hhckl0ZXJhdG9yKCdsb3JlbScpO1xyXG5jb25zb2xlLmxvZyhpdGVyYXRvcik7IFxyXG5cclxuY29uc29sZS5sb2coaXRlcmF0b3IubmV4dCgpKTtcclxuXHJcblxyXG5cclxuXHJcbi8qbGV0ICYgY29uc3QqL1xyXG5cclxuLypcclxuLSDQntCx0LvQsNGB0YLRjCDQstC40LTQuNC80L7RgdGC0LggLSDQsdC70L7QuiB7fSwg0LIg0LrQvtGC0L7RgNC+0Lwg0L7QsdGK0Y/QstC70LXQvdCwICAo0YLQsNC6INC20LUgaWYsIGZvciwgd2hpbGUpXHJcbi0g0LLQuNC00L3RiyDRgtC+0LvRjNC60L4g0L/QvtGB0LvQtSDQvtCx0YrRj9Cy0LvQtdC90LjRj1xyXG4tINCd0LXQu9GM0LfRjyDQv9C+0LLRgtC+0YDQvdC+INC+0LHRitGP0LLQu9GP0YLRjFxyXG5cclxuY29uc3QgLSDQt9Cw0LTQsNC10YIg0LrQvtC90YHRgtCw0L3RgtGDICjRgi7QtS4g0L/QtdGA0LXQvNC10L3QvdGD0Y4g0LrQvtGC0L7RgNGD0Y4g0L3QtdC70YzQt9GPINC80LXQvdGP0YLRjClcclxuXHJcbiovXHJcblxyXG5cclxuXHJcbi8qIEFycm93IEZ1bmN0aW9ucy4g0J7RgtC70LjRh9C40Y8g0L7RgiDQvtCx0YvRh9C90YvRhSDRhNGD0L3QutGG0LjQuSovXHJcblxyXG4vKlxyXG4tINCb0LXQutGB0LjRh9C10YHQutC+0LUg0YHQstGP0LfRi9Cy0LDQvdC40LUuINCX0L3QsNGH0LXQvdC40Y8g0YHQv9C10YbQuNCw0LvRjNC90YvRhSDQv9C10YDQtdC80LXQvdC90YvRhSB0aGlzLCBzdXBlciDQuCBhcmd1bWVudHMg0L7Qv9GA0LXQtNC10LvRj9GO0YLRgdGPINC90LUg0YLQtdC8LCDQutCw0Log0YHRgtGA0LXQu9C+0YfQvdGL0LUg0YTRg9C90LrRhtC40Lgg0LHRi9C70Lgg0LLRi9C30LLQsNC90YssINCwINGC0LXQvCwg0LrQsNC6INC+0L3QuCDQsdGL0LvQuCDRgdC+0LfQtNCw0L3Riy5cclxuLSDQndC10LjQt9C80LXQvdGP0LXQvNGL0LUgdGhpcywgc3VwZXIg0LggYXJndW1lbnRzLiDQl9C90LDRh9C10L3QuNGPINGN0YLQuNGFINC/0LXRgNC10LzQtdC90L3Ri9GFINCy0L3Rg9GC0YDQuCDRgdGC0YDQtdC70L7Rh9C90YvRhSDRhNGD0L3QutGG0LjQuSDQvtGB0YLQsNGO0YLRgdGPINC90LXQuNC30LzQtdC90L3Ri9C80Lgg0L3QsCDQv9GA0L7RgtGP0LbQtdC90LjQuCDQstGB0LXQs9C+INC20LjQt9C90LXQvdC90L7Qs9C+INGG0LjQutC70LAg0YTRg9C90LrRhtC40LguXHJcbi0g0KHRgtGA0LXQu9C+0YfQvdGL0LUg0YTRg9C90LrRhtC40Lgg0L3QtSDQvNC+0LPRg9GCINCx0YvRgtGMINC40YHQv9C+0LvRjNC30L7QstCw0L3RiyDQutCw0Log0LrQvtC90YHRgtGA0YPQutGC0L7RgCDQuCDQutC40LTQsNGO0YIg0L7RiNC40LHQutGDINC/0YDQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQuCDRgSDQvtC/0LXRgNCw0YLQvtGA0L7QvCBuZXcuXHJcbi0g0J3QtdC00L7RgdGC0YPQv9C90L7RgdGC0YwgwqvRgdC+0LHRgdGC0LLQtdC90L3QvtCz0L7CuyDQt9C90LDRh9C10L3QuNGPINC/0LXRgNC10LzQtdC90L3QvtC5IGFyZ3VtZW50cy5cclxuXHJcbiovIl19
