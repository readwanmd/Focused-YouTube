const Employee = require('./Employee');

const _title = Symbol('title');

class Stuff extends Employee {
	constructor(id, name, title) {
		super(id, name);
		this[_title] = title;
	}

	get title() {
		return this[_title];
	}

	set title(v) {
		this[_title] = v;
	}

	toString() {
		return `${super.toString()}, title: ${this[_title]}`;
	}
}

module.exports = Stuff;
