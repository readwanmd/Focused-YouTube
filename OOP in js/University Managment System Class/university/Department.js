const _id = Symbol('id');
const _name = Symbol('name');
const _subjects = Symbol('subjects');
const _dean = Symbol('dean');
const _teachers = Symbol('teachers');

class Department {
	constructor({ id, name, subjects, dean, teachers }) {
		this[_id] = id;
		this[_name] = name;
		this[_subjects] = subjects || [];
		this[_dean] = dean || null;
		this[_teachers] = teachers || [];
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

	get subjects() {
		return this[_subjects];
	}

	set subjects(v) {
		this[_subjects] = v;
	}

	get dean() {
		return this[_dean];
	}

	set dean(v) {
		this[_dean] = v;
	}

	get teachers() {
		return this[_teachers];
	}

	set teachers(v) {
		this[_teachers] = v;
	}

	addTeacher(teacher) {
		this[_teachers].push(teacher);
	}

	toString() {
		return `
		ID: ${this[_id]},
    Name: ${this[_name]},
		Subject: ${this[_subjects]}
		`;
	}
}

module.exports = Department;
