const _id = Symbol('id');
const _name = Symbol('name');
const _credit = Symbol('credit');

class Subject {
	constructor(id, name, credit) {
		this[_id] = id;
		this[_name] = name;
		this[_credit] = credit;
	}

	get id() {
		return this[_id];
	}

	get name() {
		return this[_name];
	}

	set name(v) {
		this[_name] = v;
	}

	get credit() {
		return this[_credit];
	}

	set credit(v) {
		this[_credit] = v;
	}

	toString() {
		return `
		ID: ${this[_id]}, 
    Name: ${this[_name]}, 
    Credit: ${this[_credit]}`;
	}
}

module.exports = Subject;
