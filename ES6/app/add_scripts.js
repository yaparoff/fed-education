/* 2.Написать стрелочную функцию которая будет сразу возвращать сумму двух аргументов без ключевого слова return.*/
	
	let add = (v, i) => v + i;

/* 3. Написать стрелочную функцию которая будет возвращать пустой объект */

	let empty = () => (obj = {});

	// let empty = () => {let obj = {}; return obj }

	// let empty = () => ({});


/* 4. Создать объект в котором будет 2 метода, в одном из методов будет вызван setTimeout, который в свою очередь должен будет вызвать через какое-то время другой метод и передать контекст.
*/

class Person {
	constructor(time) {
		this.time = time;
	}
	say() {
	  this.time += 5;
		setTimeout(() => {
			alert(this.sayPhrase.call(this));
		}, 1000)
	};
	sayPhrase() {
		return 'I have been waiting for you ' + this.time + ' minutes';
	};
}

let vasya = new Person(15);
console.log(vasya.sayPhrase());
vasya.say();
console.log(vasya.sayPhrase());



/* Iterator */

function makeCharIterator(str) {
	let arr = [];
	
	for (let i = 0; i < str.length; i++) {
		arr.push(str[i]);
	}
	return {
		next: function() {
			for (let j = 0; j < arr.length; j++) {
				console.log({done: false, char: arr[j]});
			}
			console.log({done: true});
		}
	}
}

let iterator = makeCharIterator('lorem');
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