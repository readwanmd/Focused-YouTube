class Person {
	constructor(name, email, age) {
		this.name = name;
		this.email = email;
		/**
		 * Use underscore before any property to determine it is a private property.
		 * As js dosen't support of private property thats why this is community driven solution
		 * though this also act like normal property, but we developer act as it is a private property
		 */
		this._age = age;
	}

	changeName(name) {
		this.name = name;
	}

	sendEmail(msg) {
		console.log('To:', this.email);
		console.log('Sending email...');
		console.log('Message: ', this._sanetizeMessage(msg));
	}

	_sanetizeMessage(msg) {
		return msg.trim().toLowerCase();
	}

	getAge() {
		return this._age;
	}

	setAge(age) {
		this._age = age;
	}

	print() {
		console.log(this);
	}
}

const p1 = new Person('readwan', 'readwan@gmail.com', 24);
const p2 = new Person('Sayam', 'sayam@gmail.com', 25);
const p3 = new Person('Salman', 'salman@gmail.com', 24);

console.log(p1);
console.log(p2);
console.log(p3);

p3.changeName('Sumon');
p3.sendEmail(`     Hello! ${p3.name}`);
p3.print();
