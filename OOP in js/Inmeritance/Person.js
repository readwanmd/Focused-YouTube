class Person {
	constructor(name, email) {
		this._name = name;
		this._email = email;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get email() {
		return this._email;
	}

	set email(value) {
		this._email = value;
	}

	print() {
		console.log(this);
	}

	static equals(p1, p2) {
		if (p1.name !== p2.name) return false;
		if (p1.email !== p2.email) return false;

		return true;
	}
}

module.exports = Person;
