const numbers = [1, 31, 11, 3, 78, 514, 98, 10, 15, 29, 47, 59, 93];

numbers.sort((a, b) => a - b);
console.log(numbers);

const str = ['asdf', 'das', 'efs', 'frs', 'as', 'lax', 'zlx', 'mrf', 'fs'];
str.sort((a, b) => {
	if (a > b) return 1;
	if (b > a) return -1;
	return 0;
});
console.log(str);

const names = [
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

//sort by id
names.sort((a, b) => {
	if (a.id > b.id) return 1;
	if (a.id < b.id) return -1;
	return 0;
});
console.log(names);

//sort by name
names.sort((a, b) => {
	if (a.name > b.name) return 1;
	if (a.name < b.name) return -1;
	return 0;
});
console.log(names);
