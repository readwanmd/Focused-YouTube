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

function linearSearch(arr, key) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === key) return i;
	}
	return -1;
}
console.log(linearSearch(numbers, 98));

//linear search using callback
function linearSearchCB(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		if (cb(arr[i])) return i;
	}
	return -1;
}

let res = linearSearchCB(names, (item) => item.name === 'bulbul');
console.log(res);

let res1 = linearSearchCB(numbers, (item) => item === 514);
console.log(res1);
