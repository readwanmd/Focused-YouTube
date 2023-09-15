const _id = Symbol('id');
const _name = Symbol('name');
const _passMark = Symbol('passMark');
const _subject = Symbol('subject');

class Exam {
	constructor(id, name, subject, passMark) {
		this[_id] = id;
		this[_name] = name;
		this[_subject] = subject;
		this[_passMark] = passMark;
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

	get passMark() {
		return this[_passMark];
	}

	set passMark(v) {
		this[_passMark] = v;
	}

	get subject() {
		return this[_subject];
	}

	set subject(v) {
		this[_subject] = v;
	}

	toString() {
		return `ID: ${this[_id]}, 
    Name: ${this[_name]}, 
    Subject: ${this[_subject]}, 
    passMark: ${this[_passMark]},`;
	}
}

module.exports = Exam;
