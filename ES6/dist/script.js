(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = exports.Animal = function () {
	function Animal(age) {
		_classCallCheck(this, Animal);

		this.age = age;
	}

	_createClass(Animal, [{
		key: "getAge",
		value: function getAge() {
			console.log(this.age);
		}
	}]);

	return Animal;
}();

;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animal = require('./animal.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Person = function (_Animal) {
	_inherits(Person, _Animal);

	function Person(firstName, lastName, age, gender) {
		_classCallCheck(this, Person);

		var _this = _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).call(this));

		_this.firstName = firstName;
		_this.lastName = lastName;
		_this.age = age;
		_this.gender = gender;
		return _this;
	}

	_createClass(Person, [{
		key: 'getFirstName',
		value: function getFirstName() {
			console.log(this.firstName);
		}
	}, {
		key: 'getLastName',
		value: function getLastName() {
			console.log(this.lastName);
		}
	}, {
		key: 'getGender',
		value: function getGender() {
			console.log(this.gender);
		}
	}]);

	return Person;
}(_animal.Animal);

Person.MALE = 'male';
Person.FEMALE = 'female';

var monkey = new _animal.Animal(5);
monkey.getAge();

var petr = new Person('Petr', 'Petrov', 20, Person.MALE);
petr.getAge();
petr.getFirstName() + petr.getLastName();
petr.getGender() === Person.MALE ? 'male' : 'female';

},{"./animal.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXGFuaW1hbC5qcyIsImFwcFxcc2NyaXB0c1xccGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FhLE0sV0FBQSxNO0FBQ1osaUJBQVksR0FBWixFQUFpQjtBQUFBOztBQUNoQixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0E7Ozs7MkJBQ1E7QUFDUixXQUFRLEdBQVIsQ0FBWSxLQUFLLEdBQWpCO0FBQ0E7Ozs7OztBQUNEOzs7Ozs7O0FDUEQ7Ozs7Ozs7O0lBRU0sTTs7O0FBQ0wsaUJBQVksU0FBWixFQUF1QixRQUF2QixFQUFpQyxHQUFqQyxFQUFzQyxNQUF0QyxFQUE4QztBQUFBOztBQUFBOztBQUU3QyxRQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDRyxRQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxRQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsUUFBSyxNQUFMLEdBQWMsTUFBZDtBQUwwQztBQU03Qzs7OztpQ0FDYztBQUNkLFdBQVEsR0FBUixDQUFZLEtBQUssU0FBakI7QUFDQTs7O2dDQUNhO0FBQ2IsV0FBUSxHQUFSLENBQVksS0FBSyxRQUFqQjtBQUNBOzs7OEJBQ1c7QUFDWCxXQUFRLEdBQVIsQ0FBWSxLQUFLLE1BQWpCO0FBQ0E7Ozs7OztBQUdGLE9BQU8sSUFBUCxHQUFjLE1BQWQ7QUFDQSxPQUFPLE1BQVAsR0FBZ0IsUUFBaEI7O0FBRUEsSUFBSSxTQUFTLG1CQUFXLENBQVgsQ0FBYjtBQUNBLE9BQU8sTUFBUDs7QUFFQSxJQUFJLE9BQU8sSUFBSSxNQUFKLENBQVcsTUFBWCxFQUFtQixRQUFuQixFQUE2QixFQUE3QixFQUFpQyxPQUFPLElBQXhDLENBQVg7QUFDQSxLQUFLLE1BQUw7QUFDQSxLQUFLLFlBQUwsS0FBc0IsS0FBSyxXQUFMLEVBQXRCO0FBQ0EsS0FBSyxTQUFMLE9BQXFCLE9BQU8sSUFBNUIsR0FBbUMsTUFBbkMsR0FBNEMsUUFBNUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIEFuaW1hbCB7XHJcblx0Y29uc3RydWN0b3IoYWdlKSB7XHJcblx0XHR0aGlzLmFnZSA9IGFnZTtcclxuXHR9XHJcblx0Z2V0QWdlKCkge1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5hZ2UpO1xyXG5cdH1cclxufTsiLCJpbXBvcnQge0FuaW1hbH0gZnJvbSAnLi9hbmltYWwuanMnO1xyXG5cclxuY2xhc3MgUGVyc29uIGV4dGVuZHMgQW5pbWFsIHtcclxuXHRjb25zdHJ1Y3RvcihmaXJzdE5hbWUsIGxhc3ROYW1lLCBhZ2UsIGdlbmRlcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgXHR0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICBcdHRoaXMuYWdlID0gYWdlO1xyXG4gICAgXHR0aGlzLmdlbmRlciA9IGdlbmRlcjtcclxuXHR9XHJcblx0Z2V0Rmlyc3ROYW1lKCkge1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5maXJzdE5hbWUpO1xyXG5cdH1cclxuXHRnZXRMYXN0TmFtZSgpIHtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMubGFzdE5hbWUpO1xyXG5cdH1cclxuXHRnZXRHZW5kZXIoKSB7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmdlbmRlcik7XHJcblx0fVxyXG59XHJcblxyXG5QZXJzb24uTUFMRSA9ICdtYWxlJztcclxuUGVyc29uLkZFTUFMRSA9ICdmZW1hbGUnO1xyXG5cclxubGV0IG1vbmtleSA9IG5ldyBBbmltYWwoNSk7XHJcbm1vbmtleS5nZXRBZ2UoKTtcclxuXHJcbmxldCBwZXRyID0gbmV3IFBlcnNvbignUGV0cicsICdQZXRyb3YnLCAyMCwgUGVyc29uLk1BTEUpO1xyXG5wZXRyLmdldEFnZSgpO1xyXG5wZXRyLmdldEZpcnN0TmFtZSgpICsgcGV0ci5nZXRMYXN0TmFtZSgpO1xyXG5wZXRyLmdldEdlbmRlcigpID09PSBQZXJzb24uTUFMRSA/ICdtYWxlJyA6ICdmZW1hbGUnOyJdfQ==
