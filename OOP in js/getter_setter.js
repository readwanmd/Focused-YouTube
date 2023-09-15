class Person {
	constructor(name, email) {
		this._name = name;
		this.email = email;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	print() {
		console.log(this);
	}
}

const p1 = new Person('Readwan', 'readwan@gmail.com');
const p2 = new Person('Sayam', 'sayam@gmail.com');
const p3 = new Person('Salman', 'salman@gmail.com');

p1.name = 'John';
console.log(p1.name);
