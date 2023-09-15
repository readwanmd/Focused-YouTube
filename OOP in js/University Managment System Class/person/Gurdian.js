const Person = require('./Person');

const _profession = Symbol('profession');
const _income = Symbol('income');

class Gurdian extends Person {
	constructor(id, name, profession, income) {
		super(id, name);
		this[_profession] = profession;
		this[_income] = income;
	}

	get profession() {
		return this[_profession];
	}

	get income() {
		return this[_income];
	}

	set profession(v) {
		this[_profession] = v;
	}

	set income(v) {
		this[_income] = v;
	}

	toString() {
		return `${super.toString()}, Profession = ${this[_profession]}, 
		Income = ${this[_income]}`;
	}
}

module.exports = Gurdian;
