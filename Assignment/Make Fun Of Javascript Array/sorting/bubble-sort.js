const arr = [1, 31, 11, 3, 78, 514, 98, 10, 15, 29, 47, 59, 93];

const bubbleSort = (array) => {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
};

console.log('first', arr);
bubbleSort(arr);
console.log('last', arr);
