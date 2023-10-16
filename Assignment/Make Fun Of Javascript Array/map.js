const names = [
	'Stack Learner',
	'Stack School',
	'Stack Consaltency',
	'Stack Solution',
	'Stack Tech',
];

let length = names.map((name) => name.length);
let upper = names.map((name) => name.toUpperCase());
let sliced = names.map((name) => name.slice(6));
// console.log(length);
// console.log(upper);
// console.log(sliced);

const stusentArray = [
	{ id: 1, name: 'Readwan', cgpa: 3.2, email: 'readwan@gmail.com' },
	{ id: 2, name: 'Sayam', cgpa: 2.98, email: 'sayam@gmail.com' },
	{ id: 3, name: 'Salaman', cgpa: 3.38, email: 'salman@gmail.com' },
	{ id: 4, name: 'Sumon', cgpa: 3.05, email: 'sumon@gmail.com' },
	{ id: 5, name: 'Fahim', cgpa: 3.02, email: 'fahim@gmail.com' },
];

const mappedStudent = stusentArray.map((value) => {
	return {
		...value,
		title: `${value.name} - Your result has been published`,
		msg: `Your result has been published and You ${
			value.cgpa >= 3 ? 'PASSED' : 'FAILED'
		} with CGPA-${value.cgpa}`,
	};
});

console.log(mappedStudent);
