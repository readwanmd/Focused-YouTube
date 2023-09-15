const _name = Symbol('name');
const _age = Symbol('age');

class Person {
	constructor(name, age) {
		this[_name] = name;
		this[_age] = age;
	}

	get name() {
		return this[_name];
	}

	set name(value) {
		this[_name] = value;
	}

	get age() {
		return this[_age];
	}

	set age(value) {
		this[_age] = value;
	}
}

const p1 = new Person('Readwan', 24);

console.log(p1);
