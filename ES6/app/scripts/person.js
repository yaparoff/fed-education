import {Animal} from './animal.js';

class Person extends Animal {
	constructor(firstName, lastName, age, gender) {
		super();
		this.firstName = firstName;
    	this.lastName = lastName;
    	this.age = age;
    	this.gender = gender;
	}
	getFirstName() {
		console.log(this.firstName);
	}
	getLastName() {
		console.log(this.lastName);
	}
	getGender() {
		console.log(this.gender);
	}
}

Person.MALE = 'male';
Person.FEMALE = 'female';

let monkey = new Animal(5);
monkey.getAge();

let petr = new Person('Petr', 'Petrov', 20, Person.MALE);
petr.getAge();
petr.getFirstName() + petr.getLastName();
petr.getGender() === Person.MALE ? 'male' : 'female';