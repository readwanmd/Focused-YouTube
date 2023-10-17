const numbers = [1, 31, 11, 3, 78, 514, 98, 10, 15, 29, 47, 59, 93];
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

const bubbleSort = (arr, cb) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i; j < arr.length - 1; j++) {
			if (cb(arr[j], arr[j + 1]) > 0) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
};

bubbleSort(numbers, (a, b) => b - a);
console.log(numbers);
