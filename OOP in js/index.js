const Person = require('./Inmeritance/Person');
const Teacher = require('./Inmeritance/Teacher');
const Student = require('./Inmeritance/Student');

const p = new Person('Readwan', 'readwanmd@gmail.com');
const t = new Teacher(
	'Hm Nayeem',
	'hmm@gmail.com',
	'Computer Fundamental',
	40000
);
const s = new Student(
	'Readwan',
	'readwan@gmail.com',
	['Computer Fundamental', 'SPL', 'DS', 'DAA', 'DBMS'],
	219000
);

console.log(p);
console.log(t);
console.log(s);

console.log(t instanceof Teacher);
