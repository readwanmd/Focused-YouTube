const numbers = [1, 31, 11, 3, 78, 514, 98, 10, 15, 29, 47, 59, 93];
const names = [
	{ id: 11, name: 'asif' },
	{ id: 12, name: 'bulbul' },
	{ id: 10, name: 'zaltan' },
	{ id: 3, name: 'salman' },
	{ id: 1, name: 'readwan' },
	{ id: 2, name: 'sayam' },
	{ id: 6, name: 'tushar' },
	{ id: 4, name: 'sumon' },
	{ id: 5, name: 'fahim' },
	{ id: 9, name: 'sadek' },
	{ id: 7, name: 'shawon' },
	{ id: 8, name: 'rabbi' },
];

const index = numbers.findIndex((item) => item === 0);
console.log(index);

const index2 = names.findIndex((item) => item.name === 'readwan');
console.log(index2);
